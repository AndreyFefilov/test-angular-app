import { MediaItem } from '@features/media/models';

export interface MediaState {
  media: MediaItem[];
}

export const initialMediaState: MediaState = {
  media: []
};

export const MEDIA_FEATURE_NAME = 'media';
