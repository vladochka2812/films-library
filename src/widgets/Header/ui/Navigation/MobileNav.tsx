import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { useState } from 'react';
import { MobileContent } from '../Content/MobileContent';
import { RightBar } from '../RightBarComponent/RightBar';

export const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu(!openMenu);

  const handleClose = () => setOpenMenu(false);

  return (
    <div className="grid grid-cols-3 w-full items-center justify-center">
      <div onClick={handleMenu} className="relative">
        <HiOutlineMenu className="text-white" size={30} />
        <div
          className={`fixed top-[64px] left-0 sm:w-[90%] w-full h-[100vh] bg-darkBlue/90 backdrop-blur-md z-[9999] transition-transform ease-in-out duration-300 p-5 transform ${
            openMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <MobileContent handleClose={handleClose} />
        </div>
      </div>

      <Link to="/" aria-label="Home" className="flex justify-center">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="The Movie Database (TMDB)"
          width="55"
          height="40"
        />
      </Link>
      <div>
        <RightBar />
      </div>
    </div>
  );
};
