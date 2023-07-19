import { createAction, props, union } from '@ngrx/store';

import { MediaItem } from '@features/media/models';

export const loadMedia = createAction('[Media] Load');

export const loadMediaSuccess = createAction(
  '[Media] Load Success',
  props<{ media: MediaItem[] }>()
);

export const loadMediaFailure = createAction('[Media] Load Failure');

export const clearMedia = createAction('[Media] Clear');

const actions = union({
  loadMedia,
  loadMediaSuccess,
  clearMedia,
});

export type MediaActionsUnion = typeof actions;