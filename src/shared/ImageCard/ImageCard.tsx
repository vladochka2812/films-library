import {
  ImageCardType,
  ImageCardVariant,
  backdropImageSize,
  originalImageSize,
} from './model/model';
import { posterImageSize } from '@/pages/movie/model/model';
import classNames from 'classnames';
import { FaCheck } from 'react-icons/fa';
import { LuX } from 'react-icons/lu';

export const ImageCard = ({
  height,
  width,
  type,
  imageHref,
  originalImageHref,
}: ImageCardType) => {
  return (
    <div
      className={classNames('rounded-lg border ', {
        'w-[338px]': type === ImageCardVariant.backdrop,
        'w-[224px]': type === ImageCardVariant.poster,
      })}
    >
      <div
        className={classNames({
          'w-[336px]': type === ImageCardVariant.backdrop,
          'w-[222px] h-[330ox]': type === ImageCardVariant.poster,
        })}
      >
        <img
          src={imageHref}
          alt={type}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex items-center gap-4 hover:underline p-2">
        <a
          href={originalImageHref}
          target="_blank"
          className="flex items-center gap-0.5"
        >
          {width}
          <LuX size={10} />
          {height}
        </a>
        <span>
          <FaCheck />
        </span>
      </div>
    </div>
  );
};
