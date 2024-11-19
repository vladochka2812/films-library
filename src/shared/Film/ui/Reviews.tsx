import { useTranslation } from 'react-i18next';
import { ReviewCard } from '@/shared/ReviewCard/ReviewCard';
import { Link, useLocation } from 'react-router-dom';
import { ReviewCardType } from '@/shared/ReviewCard/model/model';

export const Reviews = ({ review }: { review: ReviewCardType }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <div className="py-[30px] w-full border-t border-b my-5">
      <h3 className="mb-[30px] font-semibold text-[1.4rem] lg:mx-0 mx-4">
        {t('FilmPage.reviews')}
      </h3>
      <div className="max-h-[300px] sm:w-full mt-4 overflow-y-scroll">
        {review && <ReviewCard {...review} />}
      </div>
      <Link
        to={`${pathname}/reviews`}
        className=" flex mt-10 text-[1rem] text-black font-semibold"
      >
        {t('FilmPage.viewMore')}
      </Link>
    </div>
  );
};
