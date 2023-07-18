import { Store } from '@ngrx/store';

import { AuthState } from '@state/auth';
import { AuthService } from '@core/services'
import { checkAuthStatus } from "@state/auth/auth.actions";

export function appInitFactory(authService: AuthService, store: Store<AuthState>) {
  return () => {
    const isLoggedIn = authService.checkAuthStatus();
    store.dispatch(checkAuthStatus({ isLoggedIn }));
  }
}