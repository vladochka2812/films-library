import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { useTranslation } from 'react-i18next';
import { getMovie } from '../../api/gets/getMovie';
import { ReviewsPageSections } from '@/entities/ReviewsPageSwctions/ReviewsPageSections';
import { getReviews } from '../../api/gets/getReviews';

const ReviewsMovie = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { id } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const [type, setType] = useState(t('videosPage.trailers'));

  const dispatch = useDispatch<AppDispatch>();

  const { reviews, movieItem } = useSelector(
    (state: RootState) => state.movieItem
  );

  const { title, poster_path, release_date } = movieItem;
  useEffect(() => {
    dispatch(getReviews({ path }));
    dispatch(getMovie({ path }));
  }, [path, dispatch]);

  const titleInfo = useMemo(() => {
    return {
      title: title,
      image: poster_path,
      link: pathname.replace('/reviews', ''),
      year: release_date?.split('-')[0],
    };
  }, [title, poster_path, release_date]);

  return <ReviewsPageSections title={titleInfo} reviews={reviews.results} />;
};

export default ReviewsMovie;
