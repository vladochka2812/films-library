import { FilmType } from '@/shared/FilmCard/model/model';

export const TopRatedDate = ['Movie', 'TV'];

export type topRatedSectionType = {
  page: number;
  results: FilmType[];
  total_pages: number;
  total_results: number;
};

export enum PathType {
  'Movie' = '/movie',
  'TV' = '/tv',
}
