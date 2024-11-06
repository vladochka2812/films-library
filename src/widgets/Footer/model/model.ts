import { NavigationListType } from '../../Header/model/model';

// change links

export const NavigationList: NavigationListType = [
  {
    mainCategory: 'THE BASICS',
    subCategories: [
      { link: '/movie', name: 'About TMDB' },
      { link: '/movie/now-playing', name: 'Contact Us' },
      { link: '/movie/upcoming', name: 'Upcoming' },
      { link: '/movie/top-rated', name: 'Support Forums' },
      { link: '/movie/top-rated', name: 'API' },
      { link: '/movie/top-rated', name: 'System Status' },
    ],
  },
  {
    mainCategory: 'GET INVOLVED',
    subCategories: [
      { link: '/tv', name: 'Contribution Bible' },
      { link: '/tv/airing-today', name: 'Add New Movie' },
      { link: '/tv/on-the-air', name: 'Add New TV Show' },
    ],
  },
  {
    mainCategory: 'COMMUNITY',
    subCategories: [
      { link: '/person', name: 'Guidelines' },
      { link: '/person', name: 'Discussions' },
      { link: '/person', name: 'Leaderboard' },
    ],
  },
  {
    mainCategory: 'LEGAL',
    subCategories: [
      { link: '/talk', name: 'Terms of Use' },
      { link: '/talk', name: 'API Terms of Use' },
      { link: '/talk', name: 'Privacy Policy' },
      { link: '/talk', name: 'DMCA Policy' },
    ],
  },
];
