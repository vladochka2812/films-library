import { useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/app/store/store';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  bgImageSize,
  networkLogoSize,
  mainImageSize,
  seasonImageSize,
} from '../model/model';
import { MainInfo } from '@/shared/Film/ui/MainInfo';
import { SubInfo } from '@/shared/Film/ui/SubInfo';
import { getTV } from '../api/gets/getTV';
import { dateUsual, formatDate, getYear } from '@/shared/Date/Date';
import { getImages } from '../api/gets/getImages';
import { getKeywords } from '../api/gets/getKeywords';
import { getRecommendations } from '../api/gets/getRecommendations';
import { getReviews } from '../api/gets/getReviews';
import { getVideos } from '../api/gets/getVideos';
import { SeasonCard } from '@/shared/SeasonCard/SeasonCard';
import {
  SeasonCardVariant,
  SeasonCardType,
} from '@/shared/SeasonCard/model/model';
import { Reviews } from '@/shared/Film/ui/Reviews';
import { avatarSize } from '@/shared/ReviewCard/model/model';
import { Media } from '@/shared/Film/ui/Media';
import {
  backdropImageSize,
  posterImageSize,
} from '@/shared/ImageCard/model/model';
import { Recommendations } from '@/shared/Film/ui/Recommendations';
import { getCastCrew } from '../api/gets/getCastCrew';
import {
  CastCrewCardVariant,
  Role,
  verticalImageSize,
} from '@/shared/CastCrewCard/model/model';
import { Cast } from '@/shared/Film/ui/Cast';

const TV = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const { id } = useParams();
  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const {
    tvItem,
    images,
    keywords,
    recommendations,
    reviews,
    videos,
    castCrew,
    loading,
  } = useSelector((state: RootState) => state.tvItem);

  useEffect(() => {
    dispatch(getTV({ path }));
    dispatch(getImages({ path }));
    dispatch(getKeywords({ path }));
    dispatch(getRecommendations({ path }));
    dispatch(getReviews({ path }));
    dispatch(getVideos({ path }));
    dispatch(getCastCrew({ path }));
  }, [path, dispatch]);

  const {
    backdrop_path,
    poster_path,
    vote_average,
    overview,
    tagline,
    name,
    genres,
    first_air_date,
    production_companies,
    number_of_episodes,
    number_of_seasons,
    status,
    spoken_languages,
    homepage,
    created_by,
    networks,
    type,
    seasons,
  } = tvItem;

  const mainImageHref = `${import.meta.env.VITE_IMAGE_API_LINK}/${mainImageSize}/${poster_path}`;

  const bgImageHref = `${import.meta.env.VITE_IMAGE_API_LINK}/${bgImageSize}/${backdrop_path}`;

  const vote = Math.round(vote_average * 10);

  const production = production_companies?.map((compony) => compony.name);

  const createdBy = useMemo(() => {
    return created_by?.map((item) => ({
      name: item.name,
      link: `/person/${item.id}-${item.name.toLowerCase().replace(/ /g, '-')}`,
    }));
  }, [created_by]);

  const date = first_air_date && dateUsual(first_air_date);

  const year = first_air_date && getYear(first_air_date);

  const genresList = genres?.map((genre) => genre.name).join(', ');

  const timing = `${number_of_seasons}${t('FilmPage.season')} ${number_of_episodes}${t('FilmPage.episode')}`;

  const language = spoken_languages?.map((lang) => lang.name).join(', ');

  const network = networks?.map(
    (item) =>
      `${import.meta.env.VITE_IMAGE_API_LINK}/${networkLogoSize}/${item.logo_path}`
  );

  const season: SeasonCardType = useMemo(() => {
    return (
      seasons && {
        image: `${import.meta.env.VITE_IMAGE_API_LINK}/${seasonImageSize}/${seasons.slice(-1)[0].poster_path}`,
        rate: Math.round(seasons.slice(-1)[0].vote_average * 10),
        date: formatDate(seasons.slice(-1)[0].air_date),
        year: getYear(seasons.slice(-1)[0].air_date),
        season: seasons.slice(-1)[0].name,
        overview: seasons.slice(-1)[0].overview,
        episodes: seasons.slice(-1)[0].episode_count,
        variant: SeasonCardVariant.outline,
        link: pathname.replace(
          '/seasons',
          `/season/${seasons.slice(-1)[0].name.split(' ')[1]}`
        ),
      }
    );
  }, [seasons]);

  const keywordsList = keywords?.results?.map((keyword) => {
    return {
      link: `keyword/${keyword.id}-${keyword.name.replace(' ', '-')}/movie`,
      name: keyword.name,
    };
  });

  const review = reviews?.results?.[0] && {
    date: formatDate(reviews.results[0].created_at || ''),
    avatar: reviews.results[0].author_details?.avatar_path
      ? `${import.meta.env.VITE_IMAGE_API_LINK}/${avatarSize}/${reviews.results[0].author_details.avatar_path}`
      : '',
    rate: Math.round(reviews.results[0].author_details?.rating ?? 0),
    content: reviews.results[0].content,
    author: reviews.results[0].author,
  };

  const videoList = videos?.results?.map((video) => video?.key)?.slice(0, 6);

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

  const castList = castCrew?.cast?.slice(0, 9).map((person) => {
    return {
      image: `${import.meta.env.VITE_IMAGE_API_LINK}/${verticalImageSize}/${person.profile_path}`,
      description: person?.roles?.map((role: Role) => {
        return {
          job: role.character,
          episodeAmount:
            role.episode_count > 1
              ? role.episode_count + ' Episode'
              : role.episode_count + ' Episodes',
        };
      }),
      name: person.name,
      variant: CastCrewCardVariant.vertical,
    };
  });

  return (
    !loading && (
      <div className="w-full flex flex-col items-center mb-10">
        <MainInfo
          mainImageHref={mainImageHref}
          bgImageHref={bgImageHref}
          vote={vote}
          overview={overview || ''}
          name={name}
          tagline={tagline || ''}
          date={date}
          year={year}
          genresList={genresList}
          timing={timing}
          production={production}
          createdBy={createdBy}
        />
        <div className="w-full flex lg:flex-row flex-col max-w-[1400px] lg:w-[1400px] justify-center">
          <div className="flex w-full flex-col lg:pr-[30px] lg:p-0 px-2 max-w-[1100px]">
            <div className="w-full py-[30px] md:px-0 px-4">
              <h2 className="font-semibold text-[1.4em] mb-5">
                {t('FilmPage.castTV')}
              </h2>
              <div className="max-w-[1400px]">
                <Cast cast={castList} />
              </div>
              <Link
                to={`${pathname}/cast`}
                className="flex mt-5 text-[1rem] text-black font-semibold"
              >
                {t('FilmPage.castViewMore')}
              </Link>
            </div>

            <div className="w-full py-[30px] md:px-0 px-4">
              <h2 className="font-semibold text-[1.4em] mb-5">
                {t('FilmPage.seasons')}
              </h2>
              <div className="mt-5">
                <SeasonCard {...season} />
              </div>
              <Link
                to={`${pathname}/seasons`}
                className="flex mt-5 text-[1rem] text-black font-semibold"
              >
                {t('FilmPage.seasonsViewAll')}
              </Link>
            </div>

            {review && <Reviews review={review} />}

            <Media
              posters={postersList}
              videos={videoList}
              backdrops={backdropsList}
              postersAmount={postersAmount}
              backdropsAmount={backdropsAmount}
              videoAmount={videoAmount}
            />

            {recommendations && (
              <Recommendations films={recommendations.results} />
            )}
          </div>
          <div className="flex ">
            <SubInfo
              homepage={homepage || ''}
              status={status || ''}
              keywords={keywordsList}
              network={network}
              language={language}
              type={type}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default TV;
