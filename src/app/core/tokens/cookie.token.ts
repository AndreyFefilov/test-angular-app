import { InjectionToken } from '@angular/core';

export const ACCESS_TOKEN_KEY = new InjectionToken<string>('AccessTokenKey', {
  factory: () => 'access_token'
});

export const REFRESH_TOKEN_KEY = new InjectionToken<string>('RefreshTokenKey', {
  factory: () => 'refresh_token'
});

