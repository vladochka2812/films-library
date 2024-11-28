import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { AiOutlineMinus } from 'react-icons/ai';
import { JobType } from '../model/model';

export const Job = ({ name, job, character, episode, year, link }: JobType) => {
  return (
    <div className="px-4 py-2.5 flex items-start">
      <div className="w-16 flex py-1 px-4 items-start text-center mt-1">
        {year === '-' ? <AiOutlineMinus /> : year}
      </div>
      <div className="flex py-2 items-start text-center mt-1">
        <FaRegCircle size={12} />
      </div>
      <div className="py-2 ml-6 flex flex-col">
        <a href={link} className="font-semibold hover:text-lightBlue">
          {name}
        </a>
        {character && (
          <div className="flex pl-[14px]">
            <span className="text-black/60">
              {episode ? `(${episode})` : 'as '}
            </span>
            <span className="ml-1">{character}</span>
          </div>
        )}
        {job && (
          <div className="flex pl-[14px]">
            <span className="text-black/60">...</span>
            <span className="ml-1">{job}</span>
          </div>
        )}
      </div>
    </div>
  );
};
