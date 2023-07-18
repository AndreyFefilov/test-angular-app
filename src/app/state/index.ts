import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth';
import * as fromLoadingProcess from './loading-process';

export interface AppState {
  auth: fromAuth.AuthState;
  loadingProcess: fromLoadingProcess.LoadingProcessState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  loadingProcess: fromLoadingProcess.loadingProcessReducer
};

export const effects = [
  fromAuth.AuthEffects,
  fromLoadingProcess.LoadingProcessEffects
];
