export type KnownForType = {
  backdrop_path?: string;
  id: number;
  title?: string;
  name?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  origin_country?: string[];
};

export type PersonType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  known_for: KnownForType[];
};

export type PersonCardType = {
  person: PersonType;
  variant?: PersonCardType;
};

export type PersonsResponse = {
  page: number;
  results: PersonType[];
  total_pages: number;
  total_results: number;
};

export const imageCardSmallSize = '/w150_and_h150_face';
export const imageCardVerticalSize = '/w220_and_h330_face';
export const imageCardHorizontalSize = 'w355_and_h200_multi_faces';
export const imageBgSize = 'w1920_and_h427_multi_faces';

export enum PersonCardVariant {
  vertical = 'vertical',
  horizontal = 'horizontal',
}
