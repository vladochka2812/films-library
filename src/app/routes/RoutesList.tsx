import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Auth from '@/pages/Auth/Auth';
import Home from '@/pages/Home/Home';
import TV from '@/pages/tv/[id]';
import VideosMovie from '@/pages/movie/[id]/videos';
import Movie from '@/pages/movie/[id]';
import ImagesMovie from '@/pages/movie/[id]/images';
import ReviewsMovie from '@/pages/movie/[id]/reviews';

export const RoutesList = () => {
  return (
    <div className=" items-center justify-center flex mt-16">
      <Routes>
        <Route path={routes.signUp} element={<Auth />} />
        <Route path={routes.login} element={<Auth />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.tv} element={<TV />} />
        <Route path={routes.movie} element={<Movie />} />
        <Route path={routes.movie_videos} element={<VideosMovie />} />
        <Route path={routes.movie_images} element={<ImagesMovie />} />
        <Route path={routes.movie_reviews} element={<ReviewsMovie />} />
      </Routes>
    </div>
  );
};
