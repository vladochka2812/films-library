import { useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/app/store/store';
import { useParams } from 'react-router-dom';
import {
  bgImageSize,
  networkLogoSize,
  mainImageSize,
  seasonImageSize,
  episodeImageSize,
  EpisodeType,
} from './model/model';
import { MainInfo } from '@/shared/Film/ui/MainInfo';
import { SubInfo } from '@/shared/Film/ui/SubInfo';
import { getTV } from './api/getTV';
import { Season } from '@/shared/Film/ui/Season';
import { Episode } from '@/shared/Film/ui/Episode';

const TV = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const { tvItem, loading } = useSelector((state: RootState) => state.tvItem);

  useEffect(() => {
    dispatch(getTV({ path }));
  }, [path, dispatch]);

  const {
    backdrop_path,
    poster_path,
    vote_average,
    overview,
    tagline,
    original_name,
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
    next_episode_to_air,
    last_episode_to_air,
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

  const { date, year } = useMemo(() => {
    if (first_air_date) {
      const [year, month, day] = first_air_date?.split('-');
      const date = `${day}/${month}/${year}`;
      return { date, year };
    }
    return { date: '', year: '' };
  }, [first_air_date]);

  const formatDate = ({ dateStr }: { dateStr: string }) => {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const year = date.getFullYear();
    return { formattedDate, year };
  };

  const genresList = genres?.map((genre) => genre.name).join(', ');

  const timing = `${number_of_seasons}${t('FilmPage.season')} ${number_of_episodes}${t('FilmPage.episode')}`;

  const language = spoken_languages?.map((lang) => lang.name).join(', ');

  const network = networks?.map(
    (item) =>
      `${import.meta.env.VITE_IMAGE_API_LINK}/${networkLogoSize}/${item.logo_path}`
  );

  const seasonsList = useMemo(() => {
    return seasons?.map((season) => {
      const { formattedDate, year } = formatDate({ dateStr: season.air_date });
      return {
        image: `${import.meta.env.VITE_IMAGE_API_LINK}/${seasonImageSize}/${season.poster_path}`,
        rate: Math.round(season.vote_average * 10),
        date: formattedDate,
        year: year,
        season: season.name,
        overview: season.overview,
        episodes: season.episode_count,
      };
    });
  }, [seasons]);
  const hour = 60;
  const getEpisode = (episode: EpisodeType) => {
    return {
      image: `${import.meta.env.VITE_IMAGE_API_LINK}/${episodeImageSize}/${episode.still_path}`,
      rate: Math.round(episode.vote_average * 10),
      runtime:
        episode.runtime > hour
          ? Math.trunc(episode.runtime / hour) +
            t('FilmPage.hours') +
            (episode.runtime % hour) +
            t('FilmPage.min')
          : (episode.runtime % hour) + t('FilmPage.min'),
      date: formatDate({ dateStr: episode.air_date }).formattedDate,
      episodeName: episode.name,
      episodeNumber: episode.episode_number,
      overview: episode.overview,
    };
  };
  const lastEpisode = last_episode_to_air && getEpisode(last_episode_to_air);

  const nextEpisode = next_episode_to_air && getEpisode(next_episode_to_air);

  return (
    !loading && (
      <div className="flex flex-col items-center mb-10">
        <MainInfo
          mainImageHref={mainImageHref}
          bgImageHref={bgImageHref}
          vote={vote}
          overview={overview || ''}
          name={original_name}
          tagline={tagline || ''}
          date={date}
          year={year}
          genresList={genresList}
          timing={timing}
          production={production}
          createdBy={createdBy}
        />
        <SubInfo
          homepage={homepage || ''}
          status={status || ''}
          network={network}
          language={language}
          type={type}
        />
        <div className="py-[30px] md:px-0 px-4">
          <h2 className="font-semibold text-[1.4em] mb-5">
            {t('FilmPage.seasons')}
          </h2>
          {seasonsList?.map((season, index) => (
            <div className="mt-5" key={index}>
              <Season
                image={season.image}
                rate={season.rate}
                episodes={season.episodes}
                season={season.season}
                overview={season.overview}
                date={season.date}
                year={season.year}
              />
            </div>
          ))}
        </div>

        <div className="py-[30px] md:px-0 px-4">
          <h2 className="font-semibold text-[1.4em] mb-5">
            {t('FilmPage.episodes')}
          </h2>
          {lastEpisode && (
            <div>
              <h3 className="font-semibold text-[1.1em] mb-2">
                {t('FilmPage.last')}
              </h3>
              <Episode
                image={lastEpisode.image}
                rate={lastEpisode.rate}
                date={lastEpisode.date}
                overview={lastEpisode.overview}
                episodeNumber={lastEpisode.episodeNumber}
                episodeName={lastEpisode.episodeName}
                runtime={lastEpisode.runtime}
              />
            </div>
          )}
          {nextEpisode && (
            <div className="mt-4">
              <h3 className="font-semibold text-[1.1em] mb-2">
                {t('FilmPage.next')}
              </h3>
              <Episode
                image={nextEpisode.image}
                rate={nextEpisode.rate}
                date={nextEpisode.date}
                overview={nextEpisode.overview}
                episodeNumber={nextEpisode.episodeNumber}
                episodeName={nextEpisode.episodeName}
                runtime={nextEpisode.runtime}
              />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default TV;
