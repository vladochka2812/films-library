import { GenreType } from '@/pages/movie/model/model';

export type AutocompleteType = {
  suggestions: GenreType[];
  setInput: (param: string) => void;
  saveKeywords: (id: number[]) => void;
  placeholder: string;
};
