import { HorizontalScrollWrapperType } from './model/model';
import classNames from 'classnames';

export const HorizontalScrollWrapper = ({
  children,
  bgImage,
}: HorizontalScrollWrapperType) => {
  return (
    <div className="overflow-x-auto scrollbar-hide py-5 transition duration-500 linear relative">
      <div
        style={
          bgImage
            ? {
                backgroundImage: `url(${bgImage})`,
              }
            : {}
        }
        className={classNames('w-full', {
          'bg-fixed bg-contain bg-no-repeat bg-center': bgImage,
        })}
      >
        <div className="relative overflow-x-auto scrollbar-hide py-5 flex before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[60px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[60px] after:bg-gradient-to-l after:from-white after:to-transparent">
          {children}
        </div>
      </div>
    </div>
  );
};
