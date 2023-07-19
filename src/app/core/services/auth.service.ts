import { inject, Injectable} from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { HttpService } from '@core/services/index';
import { AuthData, ObservableApiResponse } from '@core/models';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  AUTH_BODY_TOKEN,
  AUTH_URL_TOKEN
} from '@core/tokens';
import {HttpRequest} from "@angular/common/http";

type AuthTokens = Omit<AuthData, 'user_id'>;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpService);
  private readonly cookieService = inject(CookieService);

  private readonly authUrl = inject(AUTH_URL_TOKEN);
  private readonly authBody = inject(AUTH_BODY_TOKEN);
  private readonly accessTokenKey = inject(ACCESS_TOKEN_KEY);
  private readonly refreshTokenKey = inject(REFRESH_TOKEN_KEY);

  logIn(): ObservableApiResponse<AuthData> {
    return this.http.post<AuthData>('/session', this.authBody, {}, undefined, this.authUrl);
  }

  // Т.к. нет эндпойнта для рефреша, будем имитировать методом logIn()
  refreshAccessToken(refreshToken: string): ObservableApiResponse<AuthData> {
    return this.logIn();
  }

  getAuthTokens(): AuthTokens {
    return {
      access_token: this.cookieService.get(this.accessTokenKey),
      refresh_token: this.cookieService.get(this.refreshTokenKey)
    }
  }

  saveAuthTokens({ access_token, refresh_token }: AuthTokens) {
    this.cookieService.set(this.accessTokenKey, access_token);
    this.cookieService.set(this.refreshTokenKey, refresh_token);
  }

  logOut() {
    this.clearAuthTokens();
  }

  checkAuthStatus(): boolean {
    return !!this.getAuthTokens().access_token;
  }

  setAuthorizationHeader(request: HttpRequest<any>) {
    const { access_token } = this.getAuthTokens();

    if (access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`
        }
      });
    }

    return request;
  }

  private clearAuthTokens() {
    this.cookieService.delete(this.accessTokenKey);
    this.cookieService.delete(this.refreshTokenKey);
  }
}