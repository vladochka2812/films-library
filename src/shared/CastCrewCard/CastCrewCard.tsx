import classNames from 'classnames';
import { CastCrewCardType, CastCrewCardVariant } from './model/model';

export const CastCrewCard = ({
  name,
  variant,
  description,
  image,
}: CastCrewCardType) => {
  return (
    <div
      className={classNames({
        'w-[140px] min-h-[260px] rounded-md shadow-lg border':
          variant === CastCrewCardVariant.vertical,
        'flex w-100% items-center': variant === CastCrewCardVariant.horizontal,
      })}
    >
      <div
        className={classNames({
          'w-[138px] h-[175px]': variant === CastCrewCardVariant.vertical,
          'w-[66px] h-[66px]': variant === CastCrewCardVariant.horizontal,
        })}
      >
        <img
          src={image}
          alt={name}
          className={classNames('w-full h-full object-cover', {
            'rounded-t-lg': variant === CastCrewCardVariant.vertical,
            'rounded-lg': variant === CastCrewCardVariant.horizontal,
          })}
        />
      </div>
      <div className="flex flex-col p-2">
        <h4 className="font-semibold text-[15px] ">{name}</h4>
        <span
          className={classNames('w-full h-full object-cover', {
            'flex flex-col': variant === CastCrewCardVariant.vertical,
            'flex gap-2': variant === CastCrewCardVariant.horizontal,
          })}
        >
          {description?.map((item, index) => (
            <div key={index}>
              <span className="text-[0.9rem]">{item.job}</span>
              <span className={classNames('text-[0.9rem] ml-1 text-black/50')}>
                {item.episodeAmount} {index + 1 !== description?.length && ','}
              </span>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};
