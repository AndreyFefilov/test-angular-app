import { inject, Injectable} from '@angular/core';

import { AUTH_BODY_TOKEN, AUTH_URL_TOKEN } from '@core/tokens/auth-url.token';
import { HttpService } from '@core/services/index';
import { AuthData, ObservableApiResponse } from '@core/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpService);
  private readonly authUrl = inject(AUTH_URL_TOKEN);
  private readonly authBody = inject(AUTH_BODY_TOKEN);

  logIn(): ObservableApiResponse<AuthData> {
    return this.http.post<AuthData>('/session', this.authBody, {}, undefined, this.authUrl);
  }

  getAuthData(): string | null {
    return localStorage.getItem('auth-data');
  }
}