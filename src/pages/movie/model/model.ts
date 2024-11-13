export const mainImageSize = 'w300_and_h450_bestv2';
export const bgImageSize = 'w1920_and_h800_multi_faces';
export const collectionImageSize = 'w1440_and_h320_multi_faces';

export type MovieType = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    name: string;
    id: number;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string | null;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
