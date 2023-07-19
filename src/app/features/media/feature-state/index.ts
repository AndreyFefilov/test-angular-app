import { ActionReducerMap } from '@ngrx/store';

import * as MediaActions from './media.actions';
import { MediaState } from './media.state';
import { mediaReducer } from "./media.reducer";
import { MediaEffects } from './media.effects';

export * from './media.effects';
export * from './media.reducer';
export * from './media.state';

export { MediaActions };

export const reducers: ActionReducerMap<{ media: MediaState }> = {
  media: mediaReducer,
};

export const effectsForFeature = [MediaEffects];
