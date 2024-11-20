import { GoDotFill } from 'react-icons/go';
import { SeasonCardVariant, SeasonType } from './model/model';
import { Rate } from '../Film/ui/Rate';
import classNames from 'classnames';

export const SeasonCard = ({
  season,
  image,
  rate,
  episodes,
  overview,
  year,
  variant = SeasonCardVariant.default,
}: SeasonType) => {
  return (
    <div
      className={classNames('flex sm:flex-row flex-col items-center w-full', {
        'border rounded-lg': SeasonCardVariant.outline === variant,
      })}
    >
      <div className="w-[130px] h-[195px]">
        <img
          src={image}
          alt={season}
          className={classNames('w-full h-full object-cover', {
            'sm:rounded-l-md ': SeasonCardVariant.outline === variant,
            'rounded-md': SeasonCardVariant.default === variant,
          })}
        />
      </div>
      <div className="p-5 lg:max-w-[900px] sm:max-w-[500px]">
        <h2 className="font-semibold text-[20px]">{season}</h2>
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
