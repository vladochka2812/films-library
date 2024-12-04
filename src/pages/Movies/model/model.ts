import { GenreType } from '@/pages/movie/model/model';

export const SortedBy = {
  'Popularity Descending': 'popularity.asc',
  'Popularity Ascending': 'popularity.desc',
  'Rating Descending': 'vote_average.desc',
  'Rating Ascending': 'vote_average.asc',
  'Release Date Descending': 'primary_release_date.desc',
  'Release Date Ascending': 'primary_release_date.asc',
  'Title (A-Z)': 'title.desc',
  'Title (Z-A)': 'title.asc',
};

export type KeywordsResponse = {
  page: number;
  results: GenreType[];
  total_pages: number;
  total_results: number;
};
