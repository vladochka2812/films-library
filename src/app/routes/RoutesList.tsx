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

export const RoutesList = () => {
  return (
    <div className=" items-center justify-center flex mt-16">
      <Routes>
        <Route path={routes.signUp} element={<Auth />} />
        <Route path={routes.login} element={<Auth />} />
        <Route path={routes.home} element={<Home />} />

        <Route path={routes.tv} element={<TV />} />
        <Route path={routes.tv_seasons} element={<SeasonsTV />} />
        <Route path={routes.tv_reviews} element={<ReviewsTV />} />
        <Route path={routes.tv_videos} element={<VideosTV />} />
        <Route path={routes.tv_images} element={<ImagesTV />} />
        <Route path={routes.tv_cast} element={<CastTV />} />

        <Route path={routes.movie} element={<Movie />} />
        <Route path={routes.movie_videos} element={<VideosMovie />} />
        <Route path={routes.movie_images} element={<ImagesMovie />} />
        <Route path={routes.movie_reviews} element={<ReviewsMovie />} />
        <Route path={routes.movie_cast} element={<CastMovie />} />
      </Routes>
    </div>
  );
};
