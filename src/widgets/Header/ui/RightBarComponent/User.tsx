import { useState } from 'react';
import { Tooltip } from '../../../../shared/Tooltip/Tooltip';

export const User = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tooltip position="bottom" content={'avatar'}>
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-7 h-7 rounded-full bg-red-300"></div>
        <span
          className={`${
            isHovered ? 'inline-block' : 'hidden'
          } absolute top-8 left-[calc(50%-4px)] w-[10px] h-[10px] rotate-45 bg-white`}
        ></span>
        {isHovered && (
          <div className="absolute top-full mt-2 text-center bg-white px-2 py-1 border rounded shadow-md text-nowrap text-[14px] font-medium">
            Profile and Settings
          </div>
        )}
      </div>
    </Tooltip>
  );
};

// const [isHovered, setIsHovered] = useState(false);

//   return (

//   );
