import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  ActionReducer,
  INIT,
} from '@ngrx/store';

import { checkAuthStatus, logInFailure, logInSuccess, logOut, refreshTokenSuccess } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(logInSuccess, (state, { authData }): AuthState => ({
      ...state,
      authData,
      isLoggedIn: true,
    })
  ),
  on(refreshTokenSuccess, (state, { authData }): AuthState => ({
    ...state,
    authData,
  })),
  on(logInFailure, (): AuthState => ({ ...initialAuthState })),
  on(checkAuthStatus, (state, { isLoggedIn }): AuthState => ({ ...state, isLoggedIn })),
);

export function logOutMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if ( action.type === logOut().type) {
      return reducer( undefined, { type: INIT });
    }

    return reducer(state, action);
  };
}

export const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectLoggedIn = createSelector(
  selectAuthFeature,
  (state) => state.isLoggedIn
);