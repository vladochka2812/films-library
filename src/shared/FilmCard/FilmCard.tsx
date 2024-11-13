import { useMemo } from 'react';
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
import { CgMoreO } from 'react-icons/cg';
import { Tooltip } from '../Tooltip/Tooltip';
import { RatingRing } from './ui/RatingRing';
import classNames from 'classnames';

export const FilmCard = ({
  film,
  variant = FilmCardVariant.vertical,
  setCurrentImage,
}: FilmCardType) => {
  const {
    vote_average,
    id,
    name,
    title,
    release_date,
    poster_path,
    media_type,
    backdrop_path,
  } = film;
  const linkHref = useMemo(() => {
    return `/${media_type ? media_type : 'tv'}/${id}-${title ? title?.toLowerCase().replace(normalizeTitle, '-') : name?.toLowerCase().replace(normalizeTitle, '-')}`;
  }, [media_type, id, title || name]);

  const formattedDate = useMemo(() => {
    return (
      release_date &&
      new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(new Date(release_date))
    );
  }, [release_date]);

  const imageHref =
    variant === FilmCardVariant.vertical
      ? `${import.meta.env.VITE_IMAGE_API_LINK}/${imageCardVerticalSize}/${poster_path}`
      : `${import.meta.env.VITE_IMAGE_API_LINK}/${imageCardHorizontalSize}/${backdrop_path}`;

  const currentImage = `${import.meta.env.VITE_IMAGE_API_LINK}/${imageBgSize}/${backdrop_path}`;

  const percent = Math.round(vote_average * 10);

  return (
    <div
      className={classNames({
        'w-[150px] min-w-[150px]': variant === FilmCardVariant.vertical,
        'w-[300px]': variant === FilmCardVariant.horizontal,
      })}
    >
      <div
        className={classNames('shadow-md rounded-md w-full overflow-hidden', {
          'h-auto': variant === FilmCardVariant.horizontal,
          'min-h-[calc(150px*1.5)] h-[calc(150px*1.5)] bg-gray-300 ':
            variant === FilmCardVariant.vertical,
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
            onMouseOver={() =>
              setCurrentImage && setCurrentImage(currentImage || '')
            }
          >
            <Link to={linkHref}>
              <img
                loading="lazy"
                src={imageHref}
                alt={title || name}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          <div className="absolute top-2 right-2  z-[4]">
            <Tooltip position="bottom" content={''}>
              <CgMoreO
                className="text-white/60 hover:text-sky-400 "
                size={26}
              />
            </Tooltip>
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
        <h2
          className={classNames('text-[16px] w-full font-bold ', {
            'hover:text-sky-400': variant === FilmCardVariant.vertical,
            'text-center': variant === FilmCardVariant.horizontal,
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
