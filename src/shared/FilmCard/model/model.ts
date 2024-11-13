type MediaType = 'tv' | 'movie';

export type FilmType = {
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type FilmCardType = {
  film: FilmType;
  variant?: FilmCardVariant;
  setCurrentImage?: (img: string) => void;
};

export type FilmsResponse = {
  page: number;
  results: FilmType[];
  total_pages: number;
  total_results: number;
};

export const imageCardVerticalSize = '/w220_and_h330_face';
export const imageCardHorizontalSize = 'w355_and_h200_multi_faces';
export const imageBgSize = 'w1920_and_h427_multi_faces';

export const colorRingSets = {
  small: { main: '#e01919', sub: '#300b0b' },
  medium: { main: '#d2d531', sub: '#423d0f' },
  high: { main: '#21d07a', sub: '#204529' },
};

export enum FilmCardVariant {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export const normalizeTitle = /[:\s]/g;

export enum CircleSize {
  big = 'big',
  small = 'small',
}
