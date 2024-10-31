import { useMemo } from 'react';
import { colorRingSets } from '../model/model';

export const RatingRing = ({ percent }: { percent: number }) => {
  const colorSet = useMemo(() => {
    return percent <= 30
      ? colorRingSets.small
      : percent <= 70
        ? colorRingSets.medium
        : colorRingSets.high;
  }, [percent]);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-[40px] h-[40px] rounded-full bg-zinc-800">
      <svg width="42" height="42">
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="transparent"
          stroke={colorSet.sub}
          strokeWidth="2"
        />
        <circle
          cx="20"
          cy="20"
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
      <div className="absolute text-[14px] font-bold top-0 left-0 w-[42px] h-[42px] flex justify-center items-center text-white after:content-['%'] after:text-[5px] after:mt-[-5px] after:font-medium">
        {percent}
      </div>
    </div>
  );
};
