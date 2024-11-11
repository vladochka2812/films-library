import { useTranslation } from 'react-i18next';

export const PathType = {
  movie: 'movie',
  TV: 'tv',
};

export const TopRatedDate = {
  movie: 'popularSection.streaming',
  TV: 'popularSection.onTV',
};

export const useTopRatedTabs = () => {
  const { t } = useTranslation();

  return [t(TopRatedDate.movie), t(TopRatedDate.TV)];
};
