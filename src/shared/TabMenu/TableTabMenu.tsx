import { useState } from 'react';
import { TabMenuType } from './model/model';
import classNames from 'classnames';
import { HorizontalScrollWrapper } from '../HorizontalScrollWrapper/HorizontalScrollWrapper';
import { HorizontalScrollWrapperVariant } from '../HorizontalScrollWrapper/model/model';

export const TableTabMenu = ({
  items,
  selectedItem,
  onSelect,
  afterContent,
  title,
}: TabMenuType) => {
  const [selected, setSelected] = useState(selectedItem);

  const handleSelect = (item: string) => {
    onSelect(item);
    setSelected(item);
  };

  const itemsList = items.map((item, index) => (
    <li
      key={index}
      className={classNames(
        'flex justify-between hover:bg-gray-100 py-2.5 px-5 gap-2',
        {
          'lg:bg-black/10': selected === item,
        }
      )}
      onClick={() => handleSelect(item)}
    >
      <span
        className={classNames('text-[16px] text-nowrap', {
          'font-semibold': selected === item,
        })}
      >
        {item}
      </span>
      {afterContent && (
        <span
          className={classNames(
            'flex items-center justify-center font-light text-[0.8rem]  hover:bg-white rounded-lg w-8',
            {
              'bg-white': selected === item,
              'bg-gray-200': selected !== item,
            }
          )}
        >
          {afterContent[index]}
        </span>
      )}
    </li>
  ));
  return (
    <div className="flex h-full flex-col lg:w-[260px] border lg:shadow-md lg:rounded-lg w-full text-black">
      <div className="lg:p-5 p-4 bg-gray-500 lg:rounded-t-lg w-full">
        <h3 className="text-[1.3rem] font-semibold">{title}</h3>
      </div>
      <ul className="py-2 hidden lg:flex lg:flex-col">{itemsList}</ul>
      <HorizontalScrollWrapper variant={HorizontalScrollWrapperVariant.simple}>
        <ul className="py-2 lg:hidden flex">{itemsList}</ul>
      </HorizontalScrollWrapper>
    </div>
  );
};
