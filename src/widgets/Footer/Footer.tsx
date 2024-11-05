import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../features/AuthFirebase/firebaseConfig';
import { routes } from '../../app/routes/routes';
import { NavigationList } from './model/model';

export const Footer = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(!!user);
      } else {
        setIsAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const username = useMemo(() => {
    return localStorage.getItem('username') || '';
  }, [isAuth]);

  return (
    <div className="mt-auto">
      <div className="max-w-full w-[100vw] bg-darkBlue">
        <nav className="flex flex-col md:flex-row md:items-center md:justify-center py-10 md:py-20 gap-10 md:px-0 px-5 ">
          <div>
            <Link
              to="/"
              aria-label="Home"
              className="md:flex justify-center hidden"
            >
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="The Movie Database (TMDB)"
                width="130"
                height="94"
              />
            </Link>
            <div className="w-[130px] md:w-full text-[21px] font-bold md:text-lightBlue text-darkBlue break-words bg-white rounded-[4px] px-4 py-2 md:mt-10 text-end">
              {isAuth ? (
                `Hi, ${username}!`
              ) : (
                <Link to={routes.signUp} className="px-5 py-2">
                  JOIN THE COMMUNITY
                </Link>
              )}
            </div>
          </div>
          <div className="flex md:gap-10 gap-[30px] flex-col md:flex-row text-white">
            {NavigationList.map((item, index) => (
              <div key={index}>
                <h3 className="text-[22px] font-bold"> {item.mainCategory}</h3>
                <ul className="max-w-[260px] overflow-ellipsis ">
                  {item.subCategories.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};
