import {
  CastCrewCardType,
  CastMember,
  CrewMember,
} from '@/shared/CastCrewCard/model/model';

export type EpisodeType = {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: CrewMember[];
  guest_stars: CastMember[];
};

export type EpisodeCardType = {
  image: string;
  rate: number;
  date: string;
  overview: string;
  episodeNumber: number;
  runtime: string;
  episodeName: string;
  crew: Record<string, string[]>;
  cast: CastCrewCardType[];
  triggerFunc: (episodeNumber: number) => Promise<string[]>;
};

export const episodeImageSize = 'w640_and_h360_bestv2';
export const imageFromEpisodeSize = 'w320_and_h180_bestv2';

export const episodeImagePlaceholder =
  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
