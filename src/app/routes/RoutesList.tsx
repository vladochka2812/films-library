import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Auth from '../../pages/Auth/Auth';
import Home from '../../pages/Home/Home';

export const RoutesList = () => {
  return (
    <div className=" items-center justify-center flex mt-16">
      <Routes>
        <Route path={routes.signUp} element={<Auth />} />
        <Route path={routes.login} element={<Auth />} />
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </div>
  );
};
