import React, { useState } from 'react';
import { DropdownType } from './model/model';
import classNames from 'classnames';

export const Dropdown = ({ options, onChange }: DropdownType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="text-[0.9rem] w-full">
      <div
        onClick={toggleDropdown}
        className="flex justify-between bg-gray-200 rounded-md border"
      >
        <span className="px-3 py-1.5">{selectedOption || options[0]}</span>
        <span className="p-1.5">▼</span>
      </div>
      {isOpen && (
        <ul className="max-h-[200px] h-[200px] overflow-y-scroll py-2 mt-2 shadow-lg rounded-md border">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={classNames('px-3 py-1.5 text-[1rem]', {
                'bg-lightBlue hover:bg-darkBlue text-white':
                  selectedOption === option,
                'hover:bg-gray-200': selectedOption !== option,
              })}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
