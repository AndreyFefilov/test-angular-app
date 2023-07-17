import { inject, Injectable } from '@angular/core';

import { HttpService } from '@core/services';
import { ObservableApiResponse } from "@core/models";
import { environment } from "@environments/environment";
import { AuthData } from "../models";

const AUTH_HOST = environment.auth.url;
const AUTH_BODY = environment.auth.body;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpService);

  logIn(): ObservableApiResponse<AuthData> {
    return this.http.post<AuthData>('/session', AUTH_BODY, {}, undefined, AUTH_HOST);
  }

  getAuthData(): string | null {
    return localStorage.getItem('auth-data');
  }
}