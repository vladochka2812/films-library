import { FilmsResponse } from '@/shared/FilmCard/model/model';

export type ListPageSectionsType = {
  items: FilmsResponse;
  handlePageChange: (page: number) => void;
  page: number;
  title: string;
};
