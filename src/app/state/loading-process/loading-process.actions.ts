import { createAction, props } from '@ngrx/store';

export const setLoadingInProcess = createAction(
  '[Loading Process] Set Loading In Process',
  props<{ isLoading: boolean }>()
);
