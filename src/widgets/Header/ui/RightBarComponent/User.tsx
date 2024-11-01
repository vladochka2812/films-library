import { useState } from 'react';
import { Tooltip } from '../../../../shared/Tooltip/Tooltip';
import classNames from 'classnames';
import { useLogout } from '../../../../features/Logout/useLogout';

export const User = () => {
  const [isHovered, setIsHovered] = useState(false);
  const logout = useLogout();

  return (
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
  );
};
