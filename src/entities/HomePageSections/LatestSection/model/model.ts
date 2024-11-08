import { useTranslation } from 'react-i18next';

export const PathType = {
  nowPlaying: 'now_playing',
  popular: 'popular',
  topRated: 'top_rated',
  upcoming: 'upcoming',
};

export const LatestDate = {
  nowPlaying: 'latestDate.nowPlaying',
  popular: 'latestDate.popular',
  topRated: 'latestDate.topRated',
  upcoming: 'latestDate.upcoming',
};

export const useLatestTabs = () => {
  const { t } = useTranslation();

  return [
    t(LatestDate.nowPlaying),
    t(LatestDate.popular),
    t(LatestDate.topRated),
    t(LatestDate.upcoming),
  ];
};

export const bgImageSize = 'w1920_and_h427_multi_faces';
