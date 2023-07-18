import { ActionReducerMap } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

import * as fromAuth from './auth';
import * as fromLoadingProcess from './loading-process';
import * as fromHeader from './header';

export interface AppState {
  auth: fromAuth.AuthState;
  loadingProcess: fromLoadingProcess.LoadingProcessState;
  header: fromHeader.HeaderState;
  [fromRouter.DEFAULT_ROUTER_FEATURENAME]: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  loadingProcess: fromLoadingProcess.loadingProcessReducer,
  header: fromHeader.headerReducer,
  [fromRouter.DEFAULT_ROUTER_FEATURENAME]: fromRouter.routerReducer
};

export const effects = [
  fromAuth.AuthEffects,
  fromLoadingProcess.LoadingProcessEffects,
  fromHeader.HeaderEffects
];
