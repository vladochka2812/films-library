import { PageTitle } from '@/shared/PageTitle/PageTitle';

import { ReviewsPageSectionsType } from './model/model';
import { ReviewCard } from '@/shared/ReviewCard/ReviewCard';

export const ReviewsPageSections = ({
  title,
  reviews,
}: ReviewsPageSectionsType) => {
  return (
    <div className="flex flex-col w-full mb-20 lg:items-center">
      <PageTitle {...title} />
      <div className="max-w-[1400px] my-10 w-full flex flex-col lg:items-start items-center gap-[30px] lg:ml-[30px] px-10 py-[30px] lg:px-0 lg:py-0">
        {reviews ? (
          reviews?.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))
        ) : (
          <p>There no reviews yet</p>
        )}
      </div>
    </div>
  );
};
