import { JobType } from '@/shared/Person/model/model';

export type PersonType = {
  adult: boolean | true;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday?: string | '';
  gender: number | 0;
  homepage?: string | '';
  id: number | 0;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number | 0;
  profile_path?: string;
};

export type SocialType = {
  id: number;
  freebase_mid?: string;
  freebase_id?: string;
  imdb_id?: string;
  tvrage_id: number;
  wikidata_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  tiktok_id?: string;
  twitter_id?: string;
  youtube_id?: string;
};

export enum SocialLinks {
  IMDb = 'https://www.imdb.com/title/',
  TVRage = 'https://www.tvmaze.com/shows/',
  Wikidata = 'https://www.wikidata.org/wiki/',
  Facebook = 'https://www.facebook.com/',
  Instagram = 'https://www.instagram.com/',
  TikTok = 'https://www.tiktok.com/@',
  Twitter = 'https://twitter.com/',
  YouTube = 'https://www.youtube.com/channel/',
}

export const mainImageSize = 'w300_and_h450_bestv2';

export type CastMember = {
  id: number;
  poster_path: string;
  title?: string;
  name?: string;
  character: string;
  first_air_date?: string;
  episode_count?: number;
  release_date?: string;
  media_type: 'movie' | 'tv';
};

export type CrewMember = {
  id: number;
  title?: string;
  name?: string;
  character: string;
  first_air_date?: string;
  release_date?: string;
  episode_count?: number;
  media_type: 'movie' | 'tv';
  department: string;
  job: string;
};

export type CreditsType = {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
};

export type YearsGroupsType = {
  [key: string]: JobType[];
};

export type JobGroupsType = {
  [department: string]: YearsGroupsType[];
};
