import classNames from 'classnames';
import { TooltipType } from './model/model';

export const TooltipHover = ({
  position,
  content,
  className,
  children,
}: TooltipType) => {
  return (
    <div className="md:relative flex cursor-pointer group">
      <div>
        {children}
        <span
          className={classNames(
            'w-auto absolute hidden p-2 rounded-md shadow-md opacity-100 z-50 group-hover:inline-block',
            className,
            {
              'left-1/2 -translate-x-1/2 bottom-[calc(100%)]':
                position === 'top',
              'left-1/2 -translate-x-1/2 top-[calc(100%)] w-[500px]':
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
