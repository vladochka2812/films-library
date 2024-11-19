import { PageTitleType } from '@/shared/PageTitle/model/model';
import { ReviewType } from '@/shared/ReviewCard/model/model';

export type ReviewsPageSectionsType = {
  title: PageTitleType;
  reviews: ReviewType[];
};
