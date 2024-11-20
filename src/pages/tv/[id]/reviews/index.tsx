import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { useTranslation } from 'react-i18next';
import { ReviewsPageSections } from '@/entities/ReviewsPageSections/ReviewsPageSections';
import { getReviews } from '../../api/gets/getReviews';
import { formatDate } from '@/shared/Date/Date';
import { avatarSize } from '@/shared/ReviewCard/model/model';
import { getTV } from '../../api/gets/getTV';

const ReviewsTV = () => {
  const { pathname } = useLocation();

  const { id } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const { reviews, tvItem } = useSelector((state: RootState) => state.tvItem);

  const { name, poster_path, first_air_date } = tvItem;

  useEffect(() => {
    dispatch(getReviews({ path }));
    dispatch(getTV({ path }));
  }, [path, dispatch]);

  const titleInfo = useMemo(() => {
    return {
      title: name,
      image: poster_path,
      link: pathname.replace('/reviews', ''),
      year: first_air_date?.split('-')[0],
    };
  }, [name, poster_path, first_air_date]);

  const reviewsList = reviews?.results?.map((review) => ({
    date: formatDate(review.created_at),
    avatar: review.author_details?.avatar_path
      ? `${import.meta.env.VITE_IMAGE_API_LINK}/${avatarSize}/${review.author_details.avatar_path}`
      : '',
    rate: Math.round(review.author_details?.rating ?? 0),
    content: review.content,
    author: review.author,
  }));

  return <ReviewsPageSections title={titleInfo} reviews={reviewsList} />;
};

export default ReviewsTV;
