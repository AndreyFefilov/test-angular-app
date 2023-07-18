import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import { HeaderState, initialHeaderState } from './header.state';
import { setHeaderTitle } from './header.actions';

export const headerReducer = createReducer(
  initialHeaderState,
  on(setHeaderTitle, (state, { headerTitle }): HeaderState =>({ ...state, headerTitle }))
)

export const selectHeaderFeature = createFeatureSelector<HeaderState>('header');

export const selectHeaderTitle = createSelector(
  selectHeaderFeature,
  (state) => state.headerTitle
);
