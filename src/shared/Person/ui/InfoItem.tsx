import React from 'react';
import { InfoItemType } from '../model/model';

export const InfoItem = ({ title, content }: InfoItemType) => {
  return (
    <span className="font-[1rem] mb-5 flex flex-col">
      <h5 className="font-semibold">{title}</h5>
      {content}
    </span>
  );
};
