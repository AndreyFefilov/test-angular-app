import { AuthData } from '@core/models';

export interface AuthState {
  authData: AuthData | null;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  authData: null,
  isLoggedIn: false,
};
