import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import { loadMediaSuccess, loadMediaFailure, clearMedia } from './media.actions';
import { MediaState, initialMediaState, MEDIA_FEATURE_NAME } from './media.state';

export const mediaReducer = createReducer(
  initialMediaState,
  on(loadMediaSuccess, (state: MediaState, { media }): MediaState => ({ ...state, media })),
  on(loadMediaFailure, (): MediaState => ({ ...initialMediaState })),
  on(clearMedia, (): MediaState => ({ ...initialMediaState })),
);

export const selectMediaFeature = createFeatureSelector<MediaState>(MEDIA_FEATURE_NAME);

export const selectMediaList = createSelector(
  selectMediaFeature,
  (state) => state.media,
);
