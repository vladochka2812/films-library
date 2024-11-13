import { useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { languages } from '@/assets/locales/model/model';
import { AppDispatch, RootState } from '@/app/store/store';
import { useParams } from 'react-router-dom';
import { bgImageSize, collectionImageSize, mainImageSize } from './model/model';
import { getMovie } from './api/getMovie';
import { MainInfo } from '@/shared/Film/ui/MainInfo';
import { SubInfo } from '@/shared/Film/ui/SubInfo';
import { Collection } from '@/shared/Film/ui/Collection';

const Movie = () => {
  const { i18n, t } = useTranslation();
  const lang = useMemo(
    () => languages[i18n.language as keyof typeof languages],
    [i18n.language]
  );

  const { id } = useParams();
  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const { movieItem, loading } = useSelector(
    (state: RootState) => state.movieItem
  );

  useEffect(() => {
    dispatch(getMovie({ path, lang }));
  }, [path, dispatch, lang]);

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

  const { date, year } = useMemo(() => {
    if (release_date) {
      const [year, month, day] = release_date?.split('-');
      const date = `${day}/${month}/${year}`;
      return { date, year };
    }
    return { date: '', year: '' };
  }, [release_date]);

  const minutes = 60;

  const genresList = useMemo(() => {
    return genres?.map((genre) => genre.name).join(', ');
  }, [genres]);

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

  const language = useMemo(() => {
    return spoken_languages?.map((lang) => lang.name).join(', ');
  }, [spoken_languages]);

  const { collectionName, collectionLink, collectionBgImage } = useMemo(() => {
    if (belongs_to_collection) {
      const collectionName = belongs_to_collection.name;
      const collectionLink = `/collection/${belongs_to_collection.id}-${collectionName.toLowerCase().replace(' ', '-')}`;
      const collectionBgImage = `${import.meta.env.VITE_IMAGE_API_LINK}/${collectionImageSize}/${belongs_to_collection.backdrop_path}`;
      return { collectionName, collectionLink, collectionBgImage };
    }
    return { collectionName: '', collectionBgImage: '', collectionLink: ' ' };
  }, [belongs_to_collection]);
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
        <SubInfo
          homepage={homepage || ''}
          status={status || ''}
          revenue={revenuePrice}
          budget={budgetPrice}
          language={language}
        />
        <Collection
          name={collectionName}
          bgImage={collectionBgImage}
          link={collectionLink}
        />
      </div>
    )
  );
};

export default Movie;
