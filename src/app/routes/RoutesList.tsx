import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Auth from '../../pages/Auth/Auth';
import Home from '../../pages/Home/Home';

export const RoutesList = () => {
  return (
    <div className="md:mt-[84px] mt-16 my-5 flex items-center justify-center">
      <Routes>
        <Route path={routes.signUp} element={<Auth />} />
        <Route path={routes.login} element={<Auth />} />
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </div>
  );
};
