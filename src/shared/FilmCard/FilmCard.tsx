import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FilmCardType, imageCardSize } from './model/model';
import { CgMoreO } from 'react-icons/cg';
import { Tooltip } from '../Tooltip/Tooltip';
import { RatingRing } from './ui/RatingRing';

export const FilmCard = ({ film }: FilmCardType) => {
  const { vote_average, id, title, release_date, poster_path, media_type } =
    film;

  const linkHref = useMemo(() => {
    return `/${media_type}/${id}-${title.toLowerCase().split(':').join('').split(' ').join('-')}`;
  }, [media_type, id, title]);

  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(new Date(release_date));
  }, [release_date]);

  const imageHref = `${import.meta.env.VITE_IMAGE_API_LINK}/${imageCardSize}/${poster_path}`;

  const percent = Math.round(vote_average * 10);

  return (
    <div className="w-[150px] min-w-[150px]">
      <div className="shadow-md rounded-md w-full min-h-[calc(150px*1.5)] h-[calc(150px*1.5)] bg-gray-300 overflow-hidden">
        <div className="w-full h-full relative top-0 left-0">
          <Link to={linkHref}>
            <img loading="lazy" src={imageHref} alt={title} />
          </Link>
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
      <div className="flex items-start relative px-[10px] pt-[26px] flex-wrap whitespace-normal">
        <div className="absolute top-[-19px] left-[10px] rounded-full shadow-md">
          <RatingRing percent={percent} />
        </div>
        <h2 className="text-[16px] w-full font-bold hover:text-sky-400">
          <Link to={linkHref}>{title}</Link>
        </h2>
        <p className="text-[16px] text-black/60">{formattedDate}</p>
      </div>
    </div>
  );
};
