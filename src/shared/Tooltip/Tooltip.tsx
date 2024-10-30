import { useEffect, useRef, useState } from 'react';
import { TooltipType } from './model/model';

export const Tooltip = ({
  position,
  content,
  style,
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
    <div className="md:relative flex cursor-pointer group">
      <div onClick={handleToggle}>
        {children}
        <span
          className={`${
            isVisible ? 'inline-block' : 'hidden'
          } absolute top-8 left-[calc(50%-4px)] w-[10px] h-[10px] rotate-45 bg-white`}
        ></span>

        <span
          ref={tooltipRef}
          className={`${style} w-auto absolute z-50 py-2 px-0.5 rounded shadow-md bg-white ${
            isVisible ? 'inline-block' : 'hidden'
          } opacity-100 ${
            position === 'top'
              ? 'left-1/2 -translate-x-1/2 bottom-[calc(100%)]'
              : ''
          }
          ${
            position === 'bottom'
              ? 'left-1/2 -translate-x-1/2 top-9 w-[500px]'
              : ''
          }
          ${
            position === 'left'
              ? 'top-1/2 -translate-y-1/2 right-[calc(100%)]'
              : ''
          }
          ${
            position === 'right'
              ? 'top-1/2 -translate-y-1/2 left-[calc(100%)]'
              : ''
          }`}
        >
          {content}
        </span>
      </div>
    </div>
  );
};
