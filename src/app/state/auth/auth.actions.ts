import { createAction, props } from '@ngrx/store';
import { AuthData } from '@core/models';

export const logIn = createAction('[Auth] Log In');

export const logInSuccess = createAction(
  '[Auth] Log In Success',
  props<{ authData: AuthData }>()
);

export const logInFailure = createAction('[Auth] Log In Failure');

export const logOut = createAction('[Auth] Log Out');