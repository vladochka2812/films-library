import { useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { useParams } from 'react-router-dom';

import { Reviews } from '@/shared/Film/ui/Reviews';
import { Media } from '@/shared/Film/ui/Media';
import { Recommendations } from '@/shared/Film/ui/Recommendations';
import { dateUsual, formatDate, getYear } from '@/shared/Date/Date';
import { Collection } from '@/shared/Film/ui/Collection';
import { MainInfo } from '@/shared/Film/ui/MainInfo';
import { SubInfo } from '@/shared/Film/ui/SubInfo';
import { getImages } from '../api/gets/getImages';
import { getKeywords } from '../api/gets/getKeywords';
import { getMovie } from '../api/gets/getMovie';
import { getRecommendations } from '../api/gets/getRecommendations';
import { getReviews } from '../api/gets/getReviews';
import { getVideos } from '../api/gets/getVideos';
import {
  mainImageSize,
  bgImageSize,
  collectionImageSize,
  posterImageSize,
  backdropImageSize,
} from '../model/model';
import { avatarSize } from '@/shared/ReviewCard/model/model';

const Movie = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const {
    movieItem,
    images,
    keywords,
    recommendations,
    reviews,
    videos,
    loading,
  } = useSelector((state: RootState) => state.movieItem);

  useEffect(() => {
    dispatch(getMovie({ path }));
    dispatch(getImages({ path }));
    dispatch(getKeywords({ path }));
    dispatch(getRecommendations({ path }));
    dispatch(getReviews({ path }));
    dispatch(getVideos({ path }));
  }, [path, dispatch]);

  const {
    backdrop_path,
    poster_path,
    vote_average,
    overview,
    tagline,
    release_date,
    title,
    genres,
    runtime,
    production_companies,
    status,
    budget,
    revenue,
    spoken_languages,
    homepage,
    belongs_to_collection,
  } = movieItem;

  const formatPrice = ({ price }: { price: number }) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(price);
  };

  const mainImageHref = `${import.meta.env.VITE_IMAGE_API_LINK}/${mainImageSize}/${poster_path}`;

  const bgImageHref = `${import.meta.env.VITE_IMAGE_API_LINK}/${bgImageSize}/${backdrop_path}`;

  const vote = Math.round(vote_average * 10);

  const date = release_date && dateUsual(release_date);

  const year = release_date && getYear(release_date);

  const minutes = 60;

  const genresList = genres?.map((genre) => genre.name).join(', ');

  const timing = useMemo(() => {
    return runtime
      ? Math.trunc(runtime / minutes) +
          t('FilmPage.hours') +
          (runtime % minutes) +
          t('FilmPage.min')
      : '';
  }, [runtime]);

  const production = production_companies?.map((compony) => compony.name);

  const budgetPrice = useMemo(() => {
    return formatPrice({ price: budget });
  }, [budget]);

  const revenuePrice = useMemo(() => {
    return formatPrice({ price: revenue });
  }, [revenue]);

  const language = spoken_languages?.map((lang) => lang.name).join(', ');

  const { collectionName, collectionLink, collectionBgImage } = useMemo(() => {
    if (belongs_to_collection) {
      const collectionName = belongs_to_collection.name;
      const collectionLink = `/collection/${belongs_to_collection.id}-${collectionName.toLowerCase().replace(' ', '-')}`;
      const collectionBgImage = `${import.meta.env.VITE_IMAGE_API_LINK}/${collectionImageSize}/${belongs_to_collection.backdrop_path}`;
      return { collectionName, collectionLink, collectionBgImage };
    }
    return { collectionName: '', collectionBgImage: '', collectionLink: ' ' };
  }, [belongs_to_collection]);

  const keywordsList = keywords?.keywords?.map((keyword) => {
    return {
      link: `keyword/${keyword.id}-${keyword.name.replace(' ', '-')}/movie`,
      name: keyword.name,
    };
  });
  const videoList = videos?.results
    ?.filter((video) => video.type === 'Trailer')
    ?.map((video) => video?.key);

  const postersList = images?.posters
    ?.slice(0, 6)
    .map(
      (poster) =>
        `${import.meta.env.VITE_IMAGE_API_LINK}/${posterImageSize}/${poster.file_path}`
    );

  const backdropsList = images?.backdrops
    ?.slice(0, 6)
    .map(
      (backdrop) =>
        `${import.meta.env.VITE_IMAGE_API_LINK}/${backdropImageSize}/${backdrop.file_path}`
    );

  const postersAmount = images?.posters?.length.toString();
  const backdropsAmount = images?.posters?.length.toString();
  const videoAmount = videos?.results?.length.toString();

  const review = reviews?.results?.[0] && {
    date: formatDate(reviews.results[0].created_at || ''),
    avatar: reviews.results[0].author_details?.avatar_path
      ? `${import.meta.env.VITE_IMAGE_API_LINK}/${avatarSize}/${reviews.results[0].author_details.avatar_path}`
      : '',
    rate: Math.round(reviews.results[0].author_details?.rating ?? 0),
    content: reviews.results[0].content,
    author: reviews.results[0].author,
  };

  return (
    !loading && (
      <div className="flex flex-col items-center mb-10">
        <MainInfo
          mainImageHref={mainImageHref}
          bgImageHref={bgImageHref}
          vote={vote}
          overview={overview || ''}
          name={title}
          tagline={tagline || ''}
          date={date}
          year={year}
          genresList={genresList}
          timing={timing}
          production={production}
        />
        <div className="flex lg:flex-row flex-col max-w-[1400px] lg:w-[1400px] justify-center">
          <div className="flex flex-col lg:pr-[30px] lg:p-0 px-2">
            {review ? (
              <Reviews review={review} />
            ) : (
              <h4>{t('emptyMessages.reviews')}</h4>
            )}
            <Media
              posters={postersList}
              videos={videoList}
              backdrops={backdropsList}
              postersAmount={postersAmount}
              backdropsAmount={backdropsAmount}
              videoAmount={videoAmount}
            />
            <Collection
              name={collectionName}
              bgImage={collectionBgImage}
              link={collectionLink}
            />
            {recommendations && (
              <Recommendations films={recommendations.results} />
            )}
          </div>
          <div className="flex ">
            <SubInfo
              homepage={homepage || ''}
              status={status || ''}
              revenue={revenuePrice}
              budget={budgetPrice}
              language={language}
              keywords={keywordsList}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Movie;
