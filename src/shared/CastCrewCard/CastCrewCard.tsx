import classNames from 'classnames';
import { CastCrewCardType, CastCrewCardVariant } from './model/model';
import { Link } from 'react-router-dom';

export const CastCrewCard = ({
  name,
  variant,
  description,
  image,
  link,
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
        <Link to={link}>
          <h4 className="font-semibold text-[15px] text-black hover:text-black/70">
            {name}
          </h4>
        </Link>

        <span
          className={classNames('w-full h-full object-cover', {
            'flex flex-col': variant === CastCrewCardVariant.vertical,
            'flex gap-2': variant === CastCrewCardVariant.horizontal,
          })}
        >
          {description?.map((item, index) => (
            <div key={index}>
              <span className="text-[0.9rem]">{item.job}</span>
              {variant === CastCrewCardVariant.horizontal && (
                <span
                  className={classNames('text-[0.9rem] ml-1 text-black/50')}
                >
                  {item.episodeAmount}{' '}
                  {index + 1 !== description?.length && ','}
                </span>
              )}
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};
