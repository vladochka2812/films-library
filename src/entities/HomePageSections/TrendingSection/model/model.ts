import { useTranslation } from 'react-i18next';

export const bgImage =
  'https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg';

export const PathType = {
  week: 'week',
  day: 'day',
};

export const TrendingDate = {
  week: 'trending.week',
  day: 'trending.day',
};

export const useTrendingTabs = () => {
  const { t } = useTranslation();

  return [t(TrendingDate.week), t(TrendingDate.day)];
};
