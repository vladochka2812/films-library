import { CastMember, CrewMember } from '@/shared/CastCrewCard/model/model';
import { ImageType } from '@/shared/ImageCard/model/model';
import { ReviewType } from '@/shared/ReviewCard/model/model';
import { VideoType } from '@/shared/VideoCard/model/model';

export const mainImageSize = 'w300_and_h450_bestv2';
export const bgImageSize = 'w1920_and_h800_multi_faces';
export const collectionImageSize = 'w1440_and_h320_multi_faces';
export const backdropImageSize = 'w533_and_h300_bestv2';
export const posterImageSize = 'w220_and_h330_face';

export type GenreType = {
  id: number;
  name: string;
};

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
  genres: GenreType[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string;
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

export type ImagesType = {
  id: number;
  backdrops: ImageType[];
  logos: ImageType[];
  posters: ImageType[];
};

export type KeywordType = {
  id: number;
  name: string;
};

export type KeywordsType = {
  id: number;
  keywords: KeywordType[];
};

export type ReviewsType = {
  page: number;
  results: ReviewType[];
  total_pages: number;
  total_results: number;
};

export type VideosType = {
  id: number;
  results: VideoType[];
};

export type CastCrewType = {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
};
