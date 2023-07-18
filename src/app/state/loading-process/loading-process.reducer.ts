import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import {
  initialLoadingProcessState, LoadingProcessState } from '@state/loading-process/loading-process.state';
import { setLoadingInProcess } from './loading-process.actions';

export const loadingProcessReducer = createReducer(
  initialLoadingProcessState,
  on(setLoadingInProcess, (state, { isLoading }): LoadingProcessState => ({
      ...state,
    isLoading
    })
  ),
);

export const selectLoadingProcessFeature = createFeatureSelector<LoadingProcessState>('loadingProcess');

export const selectIsDataLoading = createSelector(
  selectLoadingProcessFeature,
  (state) => state.isLoading
);
