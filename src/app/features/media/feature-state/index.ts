import * as MediaActions from './media.actions';
import { MediaEffects } from './media.effects';

export * from './media.effects';
export * from './media.reducer';
export * from './media.state';

export { MediaActions };

export const effectsForFeature = [MediaEffects];
