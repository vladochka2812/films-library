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

  movies: '/movie',
  movies_popular: '/movie/popular',
  movies_now_playing: '/movie/now-playing',
  movies_upcoming: '/movie/upcoming',
  movies_top_rated: '/movie/top-rated',
  movies_filtered: '/movie/filtered',

  tv_popular: '/tv/popular',
  tv_today: '/tv/airing-today',
  tv_onTV: '/tv/on-the-air',
  tv_top_rated: '/tv/top-rated',
  tv_filtered: '/tv/filtered',
};
