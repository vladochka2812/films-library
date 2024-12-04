import React from 'react';
import { DateInputType } from './model/model';

export const InputDate = ({ changeEventHandler }: DateInputType) => {
  return (
    <input
      type="date"
      onChange={changeEventHandler}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-1 text-[0.9rem]"
    />
  );
};
