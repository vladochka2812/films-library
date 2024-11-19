import { PageTitleType } from '@/shared/PageTitle/model/model';
import { ReviewCardType, ReviewType } from '@/shared/ReviewCard/model/model';

export type ReviewsPageSectionsType = {
  title: PageTitleType;
  reviews: ReviewCardType[];
};
