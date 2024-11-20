import { ReviewCard } from '@/shared/ReviewCard/ReviewCard';
import { ReviewCardType } from '@/shared/ReviewCard/model/model';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export const Reviews = ({ review }: { review: ReviewCardType }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <div className="py-[30px] w-full border-t border-b my-5 max-w-[1400px]">
      <h3 className="mb-[30px] font-semibold text-[1.4rem] lg:mx-0 mx-4">
        {t('FilmPage.reviews')}
      </h3>
      <div className="w-full mt-4 ">{review && <ReviewCard {...review} />}</div>
      <Link
        to={`${pathname}/reviews`}
        className=" flex mt-5 text-[1rem] text-black font-semibold"
      >
        {t('FilmPage.reviewsViewAll')}
      </Link>
    </div>
  );
};
