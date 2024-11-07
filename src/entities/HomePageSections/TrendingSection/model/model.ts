import { FilmType } from '@/shared/FilmCard/model/model';

export const TrendingDate = ['Today', 'This Week'];

export type TrendingSectionType = {
  page: number;
  results: FilmType[];
  total_pages: number;
  total_results: number;
};

export enum PathType {
  'This Week' = 'week',
  'Today' = 'day',
}

export const bgImage =
  'https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg';
