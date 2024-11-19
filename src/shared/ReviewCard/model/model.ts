export type ReviewType = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type ReviewCardType = {
  author: string;
  content: string;
  avatar: string;
  date: string;
  rate: number;
};
export const avatarSize = 'w45_and_h45_face';
