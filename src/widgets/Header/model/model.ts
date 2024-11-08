import { useTranslation } from 'react-i18next';

export type LinkType = {
  link: string;
  name: string;
};

export type NavigationListType = {
  mainCategory: string;
  subCategories: LinkType[];
}[];

export const useNavigationList = (): NavigationListType => {
  const { t } = useTranslation();

  return [
    {
      mainCategory: t('navigation.movies.main'),
      subCategories: [
        { link: '/movie', name: t('navigation.movies.popular') },
        { link: '/movie/now-playing', name: t('navigation.movies.nowPlaying') },
        { link: '/movie/upcoming', name: t('navigation.movies.upcoming') },
        { link: '/movie/top-rated', name: t('navigation.movies.topRated') },
      ],
    },
    {
      mainCategory: t('navigation.tvShows.main'),
      subCategories: [
        { link: '/tv', name: t('navigation.tvShows.popular') },
        { link: '/tv/airing-today', name: t('navigation.tvShows.airingToday') },
        { link: '/tv/on-the-air', name: t('navigation.tvShows.onTv') },
        { link: '/tv/top-rated', name: t('navigation.tvShows.topRated') },
      ],
    },
    {
      mainCategory: t('navigation.people.main'),
      subCategories: [
        { link: '/person', name: t('navigation.people.popularPeople') },
      ],
    },
    {
      mainCategory: t('navigation.more.main'),
      subCategories: [{ link: '/talk', name: t('navigation.more.support') }],
    },
  ];
};

export const languageList = {
  en: 'EN',
  ua: 'UA',
};
