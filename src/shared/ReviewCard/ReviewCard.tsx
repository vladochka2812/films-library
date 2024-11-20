import { useTranslation } from 'react-i18next';
import { Rate } from '../Film/ui/Rate';
import { ReviewCardType } from './model/model';

export const ReviewCard = ({
  author,
  content,
  avatar,
  date,
  rate,
}: ReviewCardType) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="p-5 rounded-lg border mb-5">
        <div className="flex items-center">
          <span className="mr-4 w-[45px] h-[45px] rounded-full text-white bg-darkBlue flex justify-center items-center">
            {avatar ? (
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

        <p className="mx-1 my-2 text-[1rem] text-black font-normal max-h-[250px] overflow-auto">
          {content}
        </p>
      </div>
    </div>
  );
};
