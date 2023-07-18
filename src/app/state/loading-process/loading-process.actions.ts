import { createAction, props } from '@ngrx/store';

export const setLoadingInProcess = createAction(
  '[LoadingProcess] Set Loading In Process',
  props<{ isLoading: boolean }>()
);
