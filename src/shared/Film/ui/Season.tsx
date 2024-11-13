import { SeasonType } from '../model/model';
import { GoDotFill } from 'react-icons/go';
import { Rate } from './Rate';

export const Season = ({
  season,
  image,
  rate,
  episodes,
  overview,
  year,
}: SeasonType) => {
  return (
    <div className="flex items-center border max-w-[1000px] w-full rounded-lg">
      <div className="w-[130px] h-[195px]">
        <img
          src={image}
          alt={season}
          className="w-full h-full object-cover rounded-l-md"
        />
      </div>
      <div className="p-5 max-w-[800px]">
        <h2>{season}</h2>
        <div className="mt-0.5 flex gap-4">
          <Rate rate={rate} />
          <div className="flex items-center gap-1">
            <span>{year}</span>
            <GoDotFill size={10} />
            <span>{episodes} Episodes</span>
          </div>
        </div>
        <p className="pt-5">{overview}</p>
      </div>
    </div>
  );
};
