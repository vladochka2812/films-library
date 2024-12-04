import { routes } from '@/app/routes/routes';
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
        { link: routes.movies_popular, name: t('navigation.movies.popular') },
        {
          link: routes.movies_now_playing,
          name: t('navigation.movies.nowPlaying'),
        },
        { link: routes.movies_upcoming, name: t('navigation.movies.upcoming') },
        {
          link: routes.movies_top_rated,
          name: t('navigation.movies.topRated'),
        },
        {
          link: routes.movies_filtered,
          name: t('navigation.movies.filtered'),
        },
      ],
    },
    {
      mainCategory: t('navigation.tvShows.main'),
      subCategories: [
        { link: routes.tv_popular, name: t('navigation.tvShows.popular') },
        { link: routes.tv_today, name: t('navigation.tvShows.airingToday') },
        { link: routes.tv_onTV, name: t('navigation.tvShows.onTv') },
        { link: routes.tv_top_rated, name: t('navigation.tvShows.topRated') },
        {
          link: routes.tv_filtered,
          name: t('navigation.tvShows.filtered'),
        },
      ],
    },
    {
      mainCategory: t('navigation.people.main'),
      subCategories: [
        { link: routes.person, name: t('navigation.people.popularPeople') },
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
