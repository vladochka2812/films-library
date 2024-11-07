import { FilmType } from '../../../shared/FilmCard/model/model';

export const LatestDate = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming'];

export type LatestSectionType = {
  page: number;
  results: FilmType[];
  total_pages: number;
  total_results: number;
};

export enum PathType {
  'Now Playing' = 'now_playing',
  'Popular' = 'popular',
  'Top Rated' = 'top_rated',
  'Upcoming' = 'upcoming',
}
export const bgImageSize = 'w1920_and_h427_multi_faces';
