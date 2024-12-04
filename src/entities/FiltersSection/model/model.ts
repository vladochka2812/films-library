import { GenreType } from '@/pages/movie/model/model';
import { SliderLineType } from '@/shared/SliderLine/model/model';

export type FiltersSectionType = {
  sortedList: string[];
  handleSortedBy: (key: any) => void;
  handleStartDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEndDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  genres: GenreType[];
  selectedGenres: number[];
  handleAddGenres: (gender: number) => void;
  keywords: GenreType[];
  setKeyword: (e: string) => void;
  setSelectedKeyword: (ids: number[]) => void;
  userScore: SliderLineType;
  voteScore: SliderLineType;
  runtimeScore: SliderLineType;
  className?: string;
  title: string;
};
