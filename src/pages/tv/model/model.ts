import { CastMember, CrewMember } from '@/shared/CastCrewCard/model/model';
import { EpisodeType } from '@/shared/EpisodeCard/model/model';
import { ImageType } from '@/shared/ImageCard/model/model';
import { ReviewType } from '@/shared/ReviewCard/model/model';
import { VideoType } from '@/shared/VideoCard/model/model';

export const mainImageSize = 'w300_and_h450_bestv2';
export const bgImageSize = 'w1920_and_h800_multi_faces';
export const networkLogoSize = 'h30';
export const seasonImageSize = 'w130_and_h195_bestv2';
export const episodeImageSize = 'w227_and_h127_bestv2';

export type TVShowType = {
  adult: boolean;
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: EpisodeType;
  name: string;
  next_episode_to_air: EpisodeType;
  networks: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
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
  results: KeywordType[];
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
