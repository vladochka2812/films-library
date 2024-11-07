import { FilmType } from '@/shared/FilmCard/model/model';

export const PopularDate = ['Streaming', 'On TV'];

export type PopularSectionType = {
  page: number;
  results: FilmType[];
  total_pages: number;
  total_results: number;
};

export enum PathType {
  'Streaming' = '/movie/popular',
  'On TV' = '/tv/popular',
}
