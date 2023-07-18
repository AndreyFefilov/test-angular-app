import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';

import { logInFailure, logInSuccess } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(logInSuccess, (state, { authData }): AuthState => ({
      ...state,
      authData,
      isLoggedIn: true,
    })
  ),
  on(logInFailure, (): AuthState => ({ ...initialAuthState })),
);
export const selectAuthFeature = createFeatureSelector<AuthState>('auth');

export const selectLoggedIn = createSelector(
  selectAuthFeature,
  (state) => state.isLoggedIn
);
