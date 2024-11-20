import { PageTitle } from '@/shared/PageTitle/PageTitle';
import { ReviewCard } from '@/shared/ReviewCard/ReviewCard';

import { useTranslation } from 'react-i18next';
import { ReviewsPageSectionsType } from './model/model';

export const ReviewsPageSections = ({
  title,
  reviews,
}: ReviewsPageSectionsType) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full mb-20 lg:items-center">
      <PageTitle {...title} />
      <div className="max-w-[1400px] my-10 w-full flex flex-col lg:items-start items-center gap-[30px] lg:ml-[30px] px-10 py-[30px] lg:px-0 lg:py-0">
        {!!reviews?.length ? (
          reviews?.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))
        ) : (
          <p>{t('emptyMessages.reviews')}</p>
        )}
      </div>
    </div>
  );
};
