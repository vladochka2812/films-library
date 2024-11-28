import classNames from 'classnames';
import { TooltipType } from './model/model';

export const TooltipHover = ({
  position,
  content,
  className,
  children,
}: TooltipType) => {
  const getPositionClassNames = (position: string) => {
    switch (position) {
      case 'top':
        return 'left-1/2 -translate-x-1/2 bottom-[calc(100%)]';
      case 'bottom':
        return 'left-1/2 -translate-x-1/2 top-[calc(100%)] w-[500px]';
      case 'left':
        return 'top-1/2 -translate-y-1/2 right-[calc(100%)]';
      case 'right':
        return 'top-1/2 -translate-y-1/2 left-[calc(100%)]';
      default:
        return ''; // Return an empty string or default class if needed
    }
  };
  const style = getPositionClassNames(position);

  return (
    <div className="md:relative flex cursor-pointer group">
      <div>
        {children}
        <span
          className={classNames(
            'w-auto absolute hidden p-2 rounded-md shadow-md opacity-100 z-50 group-hover:inline-block',
            className,
            style
          )}
        >
          {content}
        </span>
      </div>
    </div>
  );
};
