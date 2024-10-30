import { Link } from 'react-router-dom';
import { DesktopContent } from '../Content/DesktopContent';

export const DesktopNav = () => {
  return (
    <nav className="flex items-center">
      <Link to="/" aria-label="Home" className=" mr-4">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="The Movie Database (TMDB)"
          width="154"
          height="20"
        />
      </Link>
      <DesktopContent />
    </nav>
  );
};
