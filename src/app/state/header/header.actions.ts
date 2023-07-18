import { createAction, props } from '@ngrx/store';

export const setHeaderTitle = createAction(
  '[Header] Set Header Title',
  props<{ headerTitle: string | undefined }>()
);
