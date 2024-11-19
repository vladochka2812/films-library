import classNames from 'classnames';
import { TabMenuType, TabMenuVariant } from './model/model';
import { FiChevronDown } from 'react-icons/fi';
import { useEffect, useMemo, useState } from 'react';

export const TabMenu = ({
  items,
  selectedItem,
  onSelect,
  variant = TabMenuVariant.default,
  afterContent,
}: TabMenuType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({});
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

  const itemsFilter = useMemo(() => {
    return items.filter((item) => item !== selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    const selectedIndex = items.indexOf(selectedItem);
    setHighlightStyle({
      left: `${(selectedIndex * 100) / items.length}%`,
    });
  }, [selectedItem, items]);

  const gradient = ' bg-gradient-to-r from-extraLightGreen to-lightGreen';

  return (
    <>
      <div
        className={classNames(
          'relative leading-6 inline-block text-left lg:hidden text-nowrap',
          {
            'rounded-t-[15px] border-l border-r': isOpen,
            [gradient]: isOpen,
            'border-darkBlue': variant === TabMenuVariant.default,
            'border-lightGreen': variant === TabMenuVariant.green,
            hidden: variant === TabMenuVariant.simple,
          }
        )}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={classNames(
            'font-semibold w-full py-2 px-4 rounded-[15px] flex items-center',
            {
              'bg-darkBlue text-lightGreen ':
                variant === TabMenuVariant.default,
              [gradient]: variant === TabMenuVariant.green,
            }
          )}
        >
          {selectedOption}
          <FiChevronDown className="ml-2" />
        </button>
        {isOpen && (
          <span
            className={classNames(
              'absolute w-full border-l border-r border-b rounded-b-[15px]  z-10 bg-gradient-to-r from-extraLightGreen to-lightGreen ',
              {
                'border-darkBlue': variant === TabMenuVariant.default,
                'border-lightGreen': variant === TabMenuVariant.green,
              }
            )}
          >
            {itemsFilter.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item)}
                className={classNames(
                  'z-10 cursor-pointer  font-semibold py-2 px-4',
                  {
                    'text-darkBlue': variant === TabMenuVariant.default,
                    'text-white': variant === TabMenuVariant.green,
                  }
                )}
              >
                {item}
              </div>
            ))}
          </span>
        )}
      </div>

      <div
        className={classNames(
          'rounded-[30px] overflow-hidden text-[14px] leading-6 items-center font-semibold relative',
          {
            'hidden lg:flex border border-darkBlue':
              variant === TabMenuVariant.default,
            'hidden lg:flex border border-lightGreen':
              variant === TabMenuVariant.green,
            '': variant === TabMenuVariant.simple,
          }
        )}
      >
        <div
          className={classNames(
            'absolute top-0 left-0 h-full rounded-[30px] transition-all duration-300',
            {
              'bg-darkBlue': variant === TabMenuVariant.default,
              [gradient]: variant === TabMenuVariant.green,
              hidden: variant === TabMenuVariant.simple,
            }
          )}
          style={{
            width: `${100 / items.length}%`,
            ...highlightStyle,
          }}
        ></div>

        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item)}
            className={classNames('py-1 relative z-10', {
              'px-5':
                variant === TabMenuVariant.default ||
                variant === TabMenuVariant.green,
              'px-4': variant === TabMenuVariant.simple,
            })}
          >
            <h3
              className={classNames(`transition-colors duration-500`, {
                [gradient]:
                  item === selectedItem && variant === TabMenuVariant.default,
                'bg-clip-text text-transparent':
                  item === selectedItem && variant === TabMenuVariant.default,
                'text-darkBlue':
                  item !== selectedItem && variant === TabMenuVariant.default,
                'text-darkBlue font-medium':
                  item === selectedItem && variant === TabMenuVariant.green,
                'text-white':
                  item !== selectedItem && variant === TabMenuVariant.green,
                'font-semibold text-[16px] text-black':
                  variant === TabMenuVariant.simple,
                'border-b-4 border-black':
                  item === selectedItem && variant === TabMenuVariant.simple,
              })}
            >
              {item}
              <span className="text-black/70 ml-1">
                {afterContent && afterContent[index]}
              </span>
            </h3>
          </button>
        ))}
      </div>
    </>
  );
};
