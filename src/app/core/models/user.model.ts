export interface User {
  user_id: string;
  user_avatar_url: string;
  user_name: string;
  user_bio: string;
  counters: UserCounters;
  person_name: string;
  is_identity_confirmed: boolean;
}

interface UserCounters {
  followers: number;
  followings: number;
  likes: number;
  videos: number;
}
