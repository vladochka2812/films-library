import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { TooltipType } from './model/model';

export const Tooltip = ({
  position,
  content,
  className,
  children,
}: TooltipType) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex cursor-pointer group">
      <div onClick={handleToggle}>
        {children}
        <span
          className={classNames(
            'absolute top-8 left-[calc(50%-4px)] w-[10px] h-[10px] rotate-45 bg-white',
            {
              'inline-block': isVisible,
              hidden: !isVisible,
            }
          )}
        ></span>

        <span
          ref={tooltipRef}
          className={classNames(
            className,
            'w-auto absolute z-50 py-2 px-0.5 rounded shadow-md bg-white',
            {
              'inline-block': isVisible,
              hidden: !isVisible,
              'left-1/2 -translate-x-1/2 bottom-[calc(100%)]':
                position === 'top',
              'left-1/2 -translate-x-1/2 top-9 w-[500px]':
                position === 'bottom',
              'top-1/2 -translate-y-1/2 right-[calc(100%)]':
                position === 'left',
              'top-1/2 -translate-y-1/2 left-[calc(100%)]':
                position === 'right',
            }
          )}
        >
          {content}
        </span>
      </div>
    </div>
  );
};
