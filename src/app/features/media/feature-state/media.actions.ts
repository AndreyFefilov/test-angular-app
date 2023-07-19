import { createAction, props } from '@ngrx/store';

import { MediaItem } from '@features/media/models';
import { User } from '@core/models';

export const loadMedia = createAction('[Media] Load');

export const loadMediaSuccess = createAction(
  '[Media] Load Success',
  props<{ media: MediaItem[] }>()
);

export const loadMediaFailure = createAction('[Media] Load Failure');

export const clearMedia = createAction('[Media] Clear');

export const openAuthorInfoDialog = createAction(
  '[Media] Open Author Info Dialog',
  props<{ author: User }>()
);
