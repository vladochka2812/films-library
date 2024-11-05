type MediaType = 'tv' | 'movie';

export type FilmType = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type FilmCardType = {
  film: FilmType;
};

export const imageCardSize = '/w220_and_h330_face';

export const colorRingSets = {
  small: { main: '#e01919', sub: '#300b0b' },
  medium: { main: '#d2d531', sub: '#423d0f' },
  high: { main: '#21d07a', sub: '#204529' },
};

export const film = {
  backdrop_path: '/uGmYqxh8flqkudioyFtD7IJSHxK.jpg',
  id: 889737,
  title: 'Joker: Folie à Deux',
  original_title: 'Joker: Folie à Deux',
  overview:
    "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
  poster_path: '/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg',
  media_type: 'movie',
  adult: false,
  original_language: 'en',
  genre_ids: [18, 80, 53],
  popularity: 1080.437,
  release_date: '2024-10-01',
  video: false,
  vote_average: 5.8,
  vote_count: 1048,
};
