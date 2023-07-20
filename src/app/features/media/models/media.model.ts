import { User } from '@core/models';

export interface MediaItem {
  author: User;
  counters: MediaCounters;
  created_at: number;
  is_liked: boolean;
  media_duration: number;
  media_id: string;
  media_name: string | null;
  media_description: string;
  media_url: string;
  preview_url: string;
}

export interface MediaList {
  media: MediaItem[];
}

export interface MediaCounters {
  comments: number;
  likes: number;
  reposts: number;
  views: number;
}
