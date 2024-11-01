import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="max-w-full w-[100vw]">
        <nav className="flex justify-between py-20">
          <div>
            <Link to="/" aria-label="Home" className="flex justify-center">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="The Movie Database (TMDB)"
                width="130"
                height="94"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
