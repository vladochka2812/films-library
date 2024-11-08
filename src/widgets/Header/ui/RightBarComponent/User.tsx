import { useState, useEffect } from 'react';
import classNames from 'classnames';

import { FaUser } from 'react-icons/fa';
import { useLogout } from '@/features/Logout/useLogout';
import { routes } from '@/app/routes/routes';
import { auth } from '@/features/AuthFirebase/firebaseConfig';
import { Tooltip } from '@/shared/Tooltip/Tooltip';
import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';

export const User = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const logout = useLogout();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return isAuth ? (
    <Tooltip
      position="bottom"
      content={
        <div className="w-[180px] text-[16px] p-[10px]" onClick={logout}>
          Logout
        </div>
      }
    >
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-7 h-7 rounded-full bg-red-300"></div>
        <span
          className={classNames(
            `absolute top-8 left-[calc(50%-4px)] w-[10px] h-[10px] rotate-45 bg-white`,
            {
              'inline-block': isHovered,
              hidden: !isHovered,
            }
          )}
        ></span>
        {isHovered && (
          <div className="absolute top-full mt-2 text-center bg-white px-2 py-1 border rounded shadow-md text-nowrap text-[14px] font-medium">
            Profile
          </div>
        )}
      </div>
    </Tooltip>
  ) : (
    <>
      <div className="lg:flex gap-5 hidden">
        <Link
          to={routes.login}
          className="text-white text-[16px] font-semibold"
        >
          Login
        </Link>
        <Link
          to={routes.signUp}
          className="text-white text-[16px] font-semibold"
        >
          Join TMBD
        </Link>
      </div>
      <div className="lg:hidden">
        <Tooltip
          position="bottom"
          className="w-32"
          content={
            <div className=" flex flex-col">
              <Link
                to={routes.login}
                className="text-[16px] px-5 py-2 border-b"
              >
                Login
              </Link>
              <Link to={routes.signUp} className="text-[16px] px-5 py-2">
                Sign up
              </Link>
            </div>
          }
        >
          <FaUser className="text-white" size={20} />
        </Tooltip>
      </div>
    </>
  );
};
