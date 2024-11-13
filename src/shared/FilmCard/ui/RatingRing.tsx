import { useMemo } from 'react';
import { CircleSize, colorRingSets } from '../model/model';
import classNames from 'classnames';

export const RatingRing = ({
  percent,
  size,
}: {
  percent: number;
  size: CircleSize;
}) => {
  const colorSet = useMemo(() => {
    return percent <= 30
      ? colorRingSets.small
      : percent <= 70
        ? colorRingSets.medium
        : colorRingSets.high;
  }, [percent]);

  const radius = size === CircleSize.big ? 32 : 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const param = size === CircleSize.big ? 68 : 42;

  return (
    offset &&
    percent && (
      <div
        className={classNames(`relative rounded-full bg-zinc-800`, {
          'w-[40px] h-[40px]': size === CircleSize.small,
          'w-[66px] h-[66px] hover:scale-110': size === CircleSize.big,
        })}
      >
        <svg width={param} height={param}>
          <circle
            cx={size === CircleSize.big ? 33 : 20}
            cy={size === CircleSize.big ? 34 : 20}
            r={radius}
            fill="transparent"
            stroke={colorSet.sub}
            strokeWidth="2"
          />
          <circle
            cx={size === CircleSize.big ? 6 : 20}
            cy={size === CircleSize.big ? 33 : 20}
            r={radius}
            fill="transparent"
            stroke={colorSet.main}
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 20 20)"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        <div
          className={classNames(
            `absolute  font-bold top-0 left-0 flex justify-center items-center text-white after:content-['%']  after:mt-[-5px] after:font-medium`,
            {
              'w-[42px] h-[42px] text-[14px] after:text-[5px]':
                size === CircleSize.small,
              'w-[68px] h-[68px] text-[24px] after:text-[10px]':
                size === CircleSize.big,
            }
          )}
        >
          {percent}
        </div>
      </div>
    )
  );
};
