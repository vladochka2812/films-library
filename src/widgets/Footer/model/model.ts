import { NavigationListType } from '@/widgets/Header/model/model';

import { useTranslation } from 'react-i18next';

export const useNavigationList = (): NavigationListType => {
  const { t } = useTranslation();

  return [
    {
      mainCategory: t('footer.THE BASICS'),
      subCategories: [
        { link: '/movie', name: t('footer.About TMDB') },
        { link: '/movie/now-playing', name: t('footer.Contact Us') },
        { link: '/movie/upcoming', name: t('footer.Upcoming') },
        { link: '/movie/top-rated', name: t('footer.Support Forums') },
        { link: '/movie/top-rated', name: t('footer.API') },
        { link: '/movie/top-rated', name: t('footer.System Status') },
      ],
    },
    {
      mainCategory: t('footer.GET INVOLVED'),
      subCategories: [
        { link: '/tv', name: t('footer.Contribution Bible') },
        { link: '/tv/airing-today', name: t('footer.Add New Movie') },
        { link: '/tv/on-the-air', name: t('footer.Add New TV Show') },
      ],
    },
    {
      mainCategory: t('footer.COMMUNITY'),
      subCategories: [
        { link: '/person', name: t('footer.Guidelines') },
        { link: '/person', name: t('footer.Discussions') },
        { link: '/person', name: t('footer.Leaderboard') },
      ],
    },
    {
      mainCategory: t('footer.LEGAL'),
      subCategories: [
        { link: '/talk', name: t('footer.Terms of Use') },
        { link: '/talk', name: t('footer.API Terms of Use') },
        { link: '/talk', name: t('footer.Privacy Policy') },
        { link: '/talk', name: t('footer.DMCA Policy') },
      ],
    },
  ];
};
