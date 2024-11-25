import { ImageType } from '@/shared/ImageCard/model/model';

export type Role = {
  credit_id: string;
  character: string;
  episode_count: number;
};

export type Job = {
  credit_id: string;
  job: string;
  episode_count: number;
};

export type CastMember = {
  adult: boolean;
  gender: number;
  character: string;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  roles: Role[];
  total_episode_count: number;
  order: number;
};

export type CrewMember = {
  adult: boolean;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  jobs: Job[];
  department: string;
  total_episode_count: number;
};

export enum CastCrewCardVariant {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export type CastCrewCardType = {
  name: string;
  description: { job: string; episodeAmount?: string }[];
  variant: CastCrewCardVariant;
  image: string;
  link: string;
};

export type EpisodeImagesType = {
  id: number;
  still: ImageType[];
};

export const verticalImageSize = 'w138_and_h175_face';
export const horizontalImageSize = 'w66_and_h66_face';

export const femalePlaceHolder =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg';
export const malePlaceHolder =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
