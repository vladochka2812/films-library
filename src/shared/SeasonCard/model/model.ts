import { EpisodeType } from '@/shared/EpisodeCard/model/model';

export type SeasonType = {
  _id: string;
  air_date: string;
  episodes: EpisodeType[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type SeasonCardType = {
  image: string;
  rate: number;
  date: string;
  season: string;
  overview: string;
  episodes: number;
  year: string;
  variant?: SeasonCardVariant;
  link: string;
};

export enum SeasonCardVariant {
  outline = 'outline',
  default = 'default',
}
