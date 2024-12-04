import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Auth from '@/pages/Auth/Auth';
import Home from '@/pages/Home/Home';
import TV from '@/pages/tv/[id]';
import VideosMovie from '@/pages/movie/[id]/videos';
import Movie from '@/pages/movie/[id]';
import ImagesMovie from '@/pages/movie/[id]/images';
import ReviewsMovie from '@/pages/movie/[id]/reviews';
import SeasonsTV from '@/pages/tv/[id]/seasons';
import ReviewsTV from '@/pages/tv/[id]/reviews';
import VideosTV from '@/pages/tv/[id]/videos';
import ImagesTV from '@/pages/tv/[id]/images';
import CastTV from '@/pages/tv/[id]/cast';
import CastMovie from '@/pages/movie/[id]/cast';
import Season from '@/pages/tv/[id]/season/[seasonNumber]';
import Persons from '@/pages/Person';
import Person from '@/pages/Person/[id]';
import Popular from '@/pages/Movies/Popular';
import NowPlaying from '@/pages/Movies/NowPlaying';
import TopRated from '@/pages/Movies/TopRated';
import Upcoming from '@/pages/Movies/Upcoming';
import PopularTV from '@/pages/TVShows/Popular';
import TopRatedTV from '@/pages/TVShows/TopRated';
import AiringToday from '@/pages/TVShows/AiringToday';
import OnTV from '@/pages/TVShows/OnTV';
import Filtered from '@/pages/Movies/Filtered';
import FilteredTV from '@/pages/TVShows/Filtered';

export const RoutesList = () => {
  return (
    <div className=" items-center justify-center flex mt-16">
      <Routes>
        <Route path={routes.signUp} element={<Auth />} />
        <Route path={routes.login} element={<Auth />} />
        <Route path={routes.home} element={<Home />} />

        <Route path={routes.tv} element={<TV />} />
        <Route path={routes.tv_seasons} element={<SeasonsTV />} />
        <Route path={routes.tv_season} element={<Season />} />
        <Route path={routes.tv_reviews} element={<ReviewsTV />} />
        <Route path={routes.tv_videos} element={<VideosTV />} />
        <Route path={routes.tv_images} element={<ImagesTV />} />
        <Route path={routes.tv_cast} element={<CastTV />} />

        <Route path={routes.movie} element={<Movie />} />
        <Route path={routes.movie_videos} element={<VideosMovie />} />
        <Route path={routes.movie_images} element={<ImagesMovie />} />
        <Route path={routes.movie_reviews} element={<ReviewsMovie />} />
        <Route path={routes.movie_cast} element={<CastMovie />} />

        <Route path={routes.movies_popular} element={<Popular />} />
        <Route path={routes.movies_now_playing} element={<NowPlaying />} />
        <Route path={routes.movies_top_rated} element={<TopRated />} />
        <Route path={routes.movies_upcoming} element={<Upcoming />} />
        <Route path={routes.movies_filtered} element={<Filtered />} />

        <Route path={routes.tv_popular} element={<PopularTV />} />
        <Route path={routes.tv_top_rated} element={<TopRatedTV />} />
        <Route path={routes.tv_today} element={<AiringToday />} />
        <Route path={routes.tv_onTV} element={<OnTV />} />
        <Route path={routes.tv_filtered} element={<FilteredTV />} />

        <Route path={routes.person} element={<Persons />} />
        <Route path={routes.personId} element={<Person />} />
      </Routes>
    </div>
  );
};
