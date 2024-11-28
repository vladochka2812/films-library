import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CircleSize,
  FilmCardType,
  FilmCardVariant,
  imageBgSize,
  imageCardHorizontalSize,
  imageCardVerticalSize,
  normalizeTitle,
} from './model/model';
import { RatingRing } from './ui/RatingRing';
import classNames from 'classnames';
import { dateUsual, formatDate } from '../Date/Date';
import { BsCalendar3 } from 'react-icons/bs';

export const FilmCard = ({
  film,
  variant = FilmCardVariant.vertical,
  setCurrentImage,
}: FilmCardType) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setCurrentImage && setCurrentImage(currentImage || '');
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const {
    vote_average,
    id,
    name,
    title,
    release_date,
    poster_path,
    media_type,
    backdrop_path,
    first_air_date,
  } = film;
  const linkHref = useMemo(() => {
    return `/${media_type ? media_type : 'tv'}/${id}-${title ? title?.toLowerCase().replace(normalizeTitle, '-') : name?.toLowerCase().replace(normalizeTitle, '-')}`;
  }, [media_type, id, title || name]);

  const formattedDate = release_date
    ? formatDate(release_date)
    : formatDate(first_air_date);

  const date = release_date
    ? dateUsual(release_date)
    : dateUsual(first_air_date);

  const imageHref =
    variant === FilmCardVariant.vertical || variant === FilmCardVariant.simple
      ? `${import.meta.env.VITE_IMAGE_API_LINK}/${imageCardVerticalSize}/${poster_path}`
      : `${import.meta.env.VITE_IMAGE_API_LINK}/${imageCardHorizontalSize}/${backdrop_path}`;

  const currentImage = `${import.meta.env.VITE_IMAGE_API_LINK}/${imageBgSize}/${backdrop_path}`;

  const percent = Math.round(vote_average * 10);

  return (
    <div
      className={classNames({
        'w-[150px] min-w-[150px]': variant === FilmCardVariant.vertical,
        'w-[300px]': variant === FilmCardVariant.horizontal,
        'w-[250px]': variant === FilmCardVariant.hover,
      })}
    >
      <div
        className={classNames('shadow-md rounded-md w-full overflow-hidden', {
          'h-auto': variant === FilmCardVariant.horizontal,
          'min-h-[calc(150px*1.5)] h-[calc(150px*1.5)] bg-gray-300 ':
            variant === FilmCardVariant.vertical,
          'w-[250px] h-[141px]': variant === FilmCardVariant.hover,
        })}
      >
        <div className={classNames('w-full h-full relative top-0 left-0')}>
          <div
            className={classNames(
              'w-full h-full relative top-0 left-0 transition-transform duration-300',
              {
                'hover:scale-105': variant === FilmCardVariant.horizontal,
              }
            )}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={linkHref}>
              <img
                loading="lazy"
                src={imageHref}
                alt={title || name}
                className="w-full h-full object-cover"
              />
            </Link>
            {variant === FilmCardVariant.hover && isHover && (
              <div className="absolute bottom-0 rounded-b-md h-10 z-10 bg-white/90 w-full flex items-center px-2.5 text-[1rem] gap-1">
                <BsCalendar3 /> {date}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={classNames(
          'flex flex-col items-start relative px-[10px]flex-wrap whitespace-normal',
          {
            'pt-[26px]': variant === FilmCardVariant.vertical,
          }
        )}
      >
        {variant === FilmCardVariant.vertical && (
          <div className="absolute top-[-19px] left-[10px] rounded-full shadow-md">
            <RatingRing percent={percent} size={CircleSize.small} />
          </div>
        )}
        {variant === FilmCardVariant.hover && (
          <div className="flex w-full justify-between mt-3 font-normal">
            <h2 className={classNames('text-[16px] w-full')}>
              <Link to={linkHref}>{title || name}</Link>
            </h2>
            <span>{percent}%</span>
          </div>
        )}
        <h2
          className={classNames('text-[16px] w-full font-bold ', {
            'hover:text-sky-400': variant === FilmCardVariant.vertical,
            'text-center': variant === FilmCardVariant.horizontal,
            hidden: variant === FilmCardVariant.hover,
          })}
        >
          <Link to={linkHref}>{title || name}</Link>
        </h2>
        {variant === FilmCardVariant.vertical && formattedDate && (
          <p className="text-[16px] text-black/60">{formattedDate}</p>
        )}
      </div>
    </div>
  );
};
