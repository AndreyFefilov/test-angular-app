export interface User {
  user_id: string;
  user_avatar_url: string | null;
  user_name: string;
  user_bio: string;
  counters: UserCounters;
  person_name: string | null;
  is_identity_confirmed: boolean;
}

interface UserCounters {
  followers: number;
  followings: number;
  likes: number;
  videos: number;
}
