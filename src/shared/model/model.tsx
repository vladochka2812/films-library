import { CrewMember } from "../CastCrewCard/model/model";

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
  guest_stars: CrewMember[];
};

export type EpisodeCardType = {
  image: string;
  rate: number;
  date: string;
  overview: string;
  episodeNumber: number;
  runtime: string;
  episodeName: string;
};

export const episodeImageSize = 'w227_and_h127_bestv2';
