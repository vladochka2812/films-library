import { FilmType } from '../../../shared/FilmCard/model/model';

export const TrendingDate = ['Today', 'This Week'];

export type TrendingSectionType = {
  age: number;
  results: FilmType[];
  total_pages: number;
  total_results: number;
};
