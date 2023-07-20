import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

import { loadMediaSuccess, loadMediaFailure, clearMedia, setLike } from './media.actions';
import { MediaState, initialMediaState, MEDIA_FEATURE_NAME } from './media.state';
import { MediaItem } from '@features/media/models';

export const mediaReducer = createReducer(
  initialMediaState,
  on(loadMediaSuccess, (state: MediaState, { media }): MediaState => ({ ...state, media })),
  on(loadMediaFailure, (): MediaState => ({ ...initialMediaState })),
  on(clearMedia, (): MediaState => ({ ...initialMediaState })),
  on(setLike, (state: MediaState, { mediaId, isLiked }): MediaState => ({
    ...state,
    media: state.media.map((item) => {
      if (item.media_id !== mediaId) {
        return item;
      }

      return <MediaItem>{
        ...item,
        is_liked: isLiked,
        counters: {
          ...item.counters,
          likes: isLiked ? item.counters.likes + 1 : item.counters.likes - 1
        }
      }
    })
  }))
);

export const selectMediaFeature = createFeatureSelector<MediaState>(MEDIA_FEATURE_NAME);

export const selectMediaList = createSelector(
  selectMediaFeature,
  (state) => state.media,
);

export const getMediaCountersById = (id: string) => createSelector(
  selectMediaFeature,
  (state) => state.media.find((x) => x.media_id === id)?.counters
);
