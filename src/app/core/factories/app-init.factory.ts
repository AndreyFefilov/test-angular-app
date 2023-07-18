import { Store } from '@ngrx/store';

import { AuthService } from '@core/services'
import { AuthState } from '@state/auth';
import { checkAuthStatus } from '@state/auth/auth.actions';

export function appInitFactory(authService: AuthService, store: Store<AuthState>) {
  return () => {
    const isLoggedIn = authService.checkAuthStatus();
    store.dispatch(checkAuthStatus({ isLoggedIn }));
  }
}