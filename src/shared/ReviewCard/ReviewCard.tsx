import { useTranslation } from 'react-i18next';
import React from 'react';
import { ReviewType, avatarSize } from './model/model';
import { formatDate } from '../Date/Date';
import { Rate } from '../Film/ui/Rate';

export const ReviewCard = ({
  author,
  content,
  author_details,
  created_at,
}: ReviewType) => {
  const { t } = useTranslation();

  const date = formatDate(created_at);

  const avatar = author_details?.avatar_path
    ? `${import.meta.env.VITE_IMAGE_API_LINK}/${avatarSize}/${author_details.avatar_path}`
    : undefined;

  const rate = Math.round(author_details?.rating);

  return (
    <div className="w-full">
      <div className="p-5 rounded-lg border mb-5">
        <div className="flex items-center">
          <span className="mr-4 w-[45px] h-[45px] rounded-full text-white bg-darkBlue flex justify-center items-center">
            {author_details?.avatar_path ? (
              <img
                src={avatar}
                alt={author[0].toUpperCase()}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              author[0].toUpperCase()
            )}
          </span>
          <div>
            <h3 className="text-[1.3rem] leading-4 font-bold">
              {t('FilmPage.reviewFrom')} {author}
            </h3>
            <span className="flex gap-3 mt-1">
              <Rate rate={rate} />
              <h5 className="text-[0.9rem] font-light">
                {t('FilmPage.writtenBy')} {author}, {date}
              </h5>
            </span>
          </div>
        </div>

        <p className="mx-1 my-2 text-[1rem] text-black font-normal">
          {content}
        </p>
      </div>
    </div>
  );
};
