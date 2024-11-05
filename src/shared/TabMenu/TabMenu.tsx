import classNames from 'classnames';
import { TabMenuType } from './model/model';
import { FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

export const TabMenu = ({ items, selectedItem, onSelect }: TabMenuType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    selectedItem || items[0]
  );

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };
  return (
    <>
      <div
        className={classNames(
          'relative leading-6 inline-block text-left md:hidden text-nowrap',
          {
            'rounded-t-[15px] border-l border-r border-darkBlue bg-gradient-to-r from-extraLightGreen to-lightGreen':
              isOpen,
          }
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-darkBlue text-lightGreen font-semibold w-full py-2 px-4 rounded-[15px] flex items-center"
        >
          {selectedOption}
          <FiChevronDown className="ml-2" />
        </button>
        {isOpen && (
          <span className="absolute w-full border-l border-r border-b rounded-b-[15px] border-darkBlue z-10 bg-gradient-to-r from-extraLightGreen to-lightGreen ">
            {items
              .filter((item) => item !== selectedOption)
              .map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="z-10 cursor-pointer text-darkBlue font-medium py-2 px-4 hover:bg-lightBlue hover:text-white"
                >
                  {item}
                </div>
              ))}
          </span>
        )}
      </div>

      <div className="hidden md:flex border border-darkBlue rounded-[30px] overflow-hidden text-[14px] leading-6 items-center font-semibold relative">
        <div
          className={`absolute top-0 left-0 h-full w-[calc(100%/${items.length})] bg-darkBlue rounded-[30px] transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateX(${items.indexOf(selectedItem) * 100}%)`,
          }}
        ></div>

        {items.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className="px-5 py-1 relative z-10"
          >
            <h3
              className={classNames(
                'bg-transparent transition-colors duration-500',
                {
                  'bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9] bg-clip-text text-transparent':
                    item === selectedItem,
                  'text-darkBlue': item !== selectedItem,
                }
              )}
            >
              {item}
            </h3>
          </button>
        ))}
      </div>
    </>
  );
};
