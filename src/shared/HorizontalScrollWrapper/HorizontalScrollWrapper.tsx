import { useEffect, useRef, useState } from 'react';
import {
  HorizontalScrollWrapperType,
  HorizontalScrollWrapperVariant,
} from './model/model';
import classNames from 'classnames';

export const HorizontalScrollWrapper = ({
  children,
  bgImage,
  variant = HorizontalScrollWrapperVariant.default,
  setCurrentScroll,
}: HorizontalScrollWrapperType) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
        if (setCurrentScroll) {
          setCurrentScroll(scrollRef.current.scrollLeft);
        }
      }
    };
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      className={classNames(
        'overflow-x-auto scrollbar-hide transition duration-500 linear relative overflow-y-hidden w-full',
        {
          'bg-contain bg-no-repeat bg-bottom': bgImage,
        }
      )}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div
        ref={scrollRef}
        className={classNames(
          'relative overflow-x-auto scrollbar-hide py-5 flex after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[60px] after:bg-gradient-to-l after:from-white after:to-transparent',
          {
            'after:hidden':
              scrollPosition !== 0 ||
              variant === HorizontalScrollWrapperVariant.shadow,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};
