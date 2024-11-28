import React from 'react';
import { SocialInfoType } from '../model/model';
import { TooltipHover } from '@/shared/Tooltip/TooltipHover';

export const Social = ({ items, home }: SocialInfoType) => {
  return (
    <div className="text-black/90 flex items-center gap-5 h-[30px] mb-[30px]">
      {!!items?.length &&
        items.map((item, index) => (
          <TooltipHover
            key={index}
            position="top"
            content="gggg"
            className="bg-darkBlue text-white text-[14px] text-nowrap"
          >
            {item.icon}
          </TooltipHover>
        ))}
      {home && (
        <div className="px-4 border-l">
          <TooltipHover
            position="top"
            content={home.text}
            className="bg-darkBlue text-white text-[14px] text-nowrap"
          >
            {home.icon}
          </TooltipHover>
        </div>
      )}
    </div>
  );
};
