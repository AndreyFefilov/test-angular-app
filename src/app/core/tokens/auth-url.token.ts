import { InjectionToken } from '@angular/core';
import { environment } from '@environments/environment';

export const AUTH_URL_TOKEN = new InjectionToken<string>('Auth Address', {
  factory: () => `${environment.auth.url}/${environment.auth.authVersion}/auth/`
});

export const AUTH_BODY_TOKEN = new InjectionToken('Auth request body', {
  factory: () => environment.auth.body
})
