import { GoDotFill } from 'react-icons/go';
import { EpisodeCardType } from './model/model';
import { Rate } from '../Film/ui/Rate';

export const EpisodeCard = ({
  image,
  episodeName,
  episodeNumber,
  rate,
  date,
  runtime,
  overview,
}: EpisodeCardType) => {
  return (
    <div className="flex sm:flex-row flex-col items-center border max-w-[1400px] w-full rounded-lg">
      <div className="w-[230px] h-[130px]">
        <img
          src={image}
          alt={episodeName}
          className="w-full h-full object-cover rounded-md sm:rounded-l-md"
        />
      </div>
      <div className="py-2 px-5 lg:max-w-[700px] sm:max-w-[400px]">
        <h2 className="flex gap-3 font-semibold text-[1.1rem]">
          <span>{episodeNumber}</span>
          <span>{episodeName}</span>
        </h2>
        <div className="mt-0.5 flex gap-4">
          <Rate rate={rate} />

          <div className="flex items-center gap-1">
            <span>{date}</span>
            <GoDotFill size={10} />
            <span>{runtime} </span>
          </div>
        </div>
        <p className="pt-2 text-[0.9rem]">{overview}</p>
      </div>
    </div>
  );
};
