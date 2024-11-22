export const routes = {
  login: '/login',
  signUp: '/signUp',
  home: '/',

  movie: '/movie/:id',
  movie_videos: '/movie/:id/videos',
  movie_images: '/movie/:id/images',
  movie_reviews: '/movie/:id/reviews',
  movie_cast: '/movie/:id/cast',

  tv: '/tv/:id',
  tv_videos: '/tv/:id/videos',
  tv_images: '/tv/:id/images',
  tv_reviews: '/tv/:id/reviews',
  tv_cast: '/tv/:id/cast',
  tv_seasons: '/tv/:id/seasons',
  tv_season: '/tv/:id/season/:seasonNumber',

  person: '/person',
  personId: '/person/:id',
};
