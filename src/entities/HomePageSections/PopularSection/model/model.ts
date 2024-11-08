import { useTranslation } from 'react-i18next';

export const PathType = {
  streaming: 'movie',
  onTV: 'tv',
};

export const PopularDate = {
  streaming: 'popularSection.streaming',
  onTV: 'popularSection.onTV',
};

export const usePopularTabs = () => {
  const { t } = useTranslation();

  return [t(PopularDate.streaming), t(PopularDate.onTV)];
};
