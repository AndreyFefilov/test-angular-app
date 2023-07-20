import { createAction, props, union } from '@ngrx/store';

import { MediaItem } from '@features/media/models';

export const loadMedia = createAction('[Media] Load');

export const loadMediaSuccess = createAction(
  '[Media] Load Success',
  props<{ media: MediaItem[] }>()
);

export const loadMediaFailure = createAction('[Media] Load Failure');

export const clearMedia = createAction('[Media] Clear');

export const setLike = createAction(
  '[Media] Set Like',
  props<{ mediaId: string; isLiked: boolean }>()
);

const actions = union({
  loadMedia,
  loadMediaSuccess,
  clearMedia,
  setLike
});

export type MediaActionsUnion = typeof actions;