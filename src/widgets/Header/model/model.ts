export type LinkType = {
  link: string;
  name: string;
};

export type NavigationListType = {
  mainCategory: string;
  subCategories: LinkType[];
}[];

export const NavigationList: NavigationListType = [
  {
    mainCategory: 'Movies',
    subCategories: [
      { link: '/movie', name: 'Popular' },
      { link: '/movie/now-playing', name: 'Now Playing' },
      { link: '/movie/upcoming', name: 'Upcoming' },
      { link: '/movie/top-rated', name: 'Top Rated' },
    ],
  },
  {
    mainCategory: 'TV Shows',
    subCategories: [
      { link: '/tv', name: 'Popular' },
      { link: '/tv/airing-today', name: 'Airing Today' },
      { link: '/tv/on-the-air', name: 'On TV' },
      { link: '/tv/top-rated', name: 'Top Rated' },
    ],
  },
  {
    mainCategory: 'People',
    subCategories: [{ link: '/person', name: 'Popular People' }],
  },
  {
    mainCategory: 'More',
    subCategories: [{ link: '/talk', name: 'Support' }],
  },
];

export const AddList: LinkType[] = [
  { link: '/movie/new', name: 'Add New Movie' },
  { link: '/tw/new', name: 'Add New TV Show' },
];
