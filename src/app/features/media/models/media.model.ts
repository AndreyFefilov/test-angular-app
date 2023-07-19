import { User } from '@core/models';

export interface MediaItem {
  author: User;
  counters: MediaCounters;
  media_duration: number;
  media_id: string;
  media_name: string;
  media_description: string;
  media_url: string;
  preview_url: string;
}

export interface MediaList {
  media: MediaItem[];
}

interface MediaCounters {
  comments: number;
  likes: number;
  reposts: number;
  views: number;
}
