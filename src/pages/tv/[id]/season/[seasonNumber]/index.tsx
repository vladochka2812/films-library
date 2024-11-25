import { AppDispatch, RootState } from '@/app/store/store';
import { getSeasonInfo } from '@/pages/tv/api/gets/getSeasonInfo';
import { formatDate, getYear } from '@/shared/Date/Date';
import {
  episodeImagePlaceholder,
  episodeImageSize,
  imageFromEpisodeSize,
} from '@/shared/EpisodeCard/model/model';
import { PageTitle } from '@/shared/PageTitle/PageTitle';
import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EpisodeCard } from '@/shared/EpisodeCard/EpisodeCard';
import { getTV } from '@/pages/tv/api/gets/getTV';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import {
  CastCrewCardVariant,
  femalePlaceHolder,
  horizontalImageSize,
  malePlaceHolder,
} from '@/shared/CastCrewCard/model/model';
import { getEpisodeInfo } from '@/pages/tv/api/gets/getEpisodeInfo';
import { ImageType } from '@/shared/ImageCard/model/model';
import { routes } from '@/app/routes/routes';
import { normalizeTitle } from '@/shared/FilmCard/model/model';

const Season = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const { id, seasonNumber = '1' } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const { season, tvItem } = useSelector((state: RootState) => state.tvItem);

  const getEpisode = async (episodeNumber: number): Promise<string[]> => {
    try {
      const response = await dispatch(
        getEpisodeInfo({
          path,
          seasonNumber: seasonNumber || '1',
          episodeNumber: episodeNumber,
        })
      ).unwrap();
      const images =
        response?.stills?.map(
          (image: ImageType) =>
            `${import.meta.env.VITE_IMAGE_API_LINK}/${imageFromEpisodeSize}/${image.file_path}`
        ) || [];
      return images;
    } catch (error) {
      console.error('Error fetching episode data:', error);
      return [];
    }
  };

  useEffect(() => {
    dispatch(getSeasonInfo({ path, seasonNumber: seasonNumber || '1' }));
    dispatch(getTV({ path }));
  }, [path, dispatch, seasonNumber]);

  const seasonsAmount = tvItem?.seasons?.length;

  const { next, prev } = useMemo(() => {
    return {
      next:
        pathname.split('/').slice(0, -1).join('/') + '/' + (+seasonNumber + 1),
      prev:
        pathname.split('/').slice(0, -1).join('/') + '/' + (+seasonNumber - 1),
    };
  }, [pathname]);

  const SeasonsLink = (
    <div className="flex justify-between max-w-[1400px] lg:w-[1400px] py-2.5 px-12">
      <div className="flex w-full justify-start">
        {+seasonNumber - 1 > 0 && (
          <Link
            className="flex items-center gap-2 text-nowrap text-black hover:text-black/70"
            to={prev}
          >
            <FaArrowLeftLong /> Season {+seasonNumber - 1}
          </Link>
        )}
      </div>
      <div className="flex w-full justify-end">
        {+seasonNumber + 1 <= seasonsAmount && (
          <Link
            className="flex items-center gap-2 text-nowrap text-black hover:text-black/70"
            to={next}
          >
            Season {+seasonNumber + 1}
            <FaArrowRightLong />
          </Link>
        )}
      </div>
    </div>
  );

  const { name, poster_path, air_date, episodes } = season;

  const titleInfo = useMemo(() => {
    return {
      title: name,
      image: poster_path,
      link: pathname.replace(`/season/${seasonNumber}`, '/seasons'),
      year: getYear(air_date),
    };
  }, [name, poster_path, air_date]);

  const episodesList = episodes?.map((episode) => {
    return {
      image: episode.still_path
        ? `${import.meta.env.VITE_IMAGE_API_LINK}/${episodeImageSize}/${episode.still_path}`
        : episodeImagePlaceholder,
      episodeName: episode.name,
      episodeNumber: episode.episode_number,
      rate: Math.round(episode.vote_average * 10),
      date: formatDate(episode.air_date),
      runtime:
        Math.trunc(episode.runtime / 60) === 0
          ? (episode.runtime % 60) + t('FilmPage.min')
          : Math.trunc(episode.runtime / 60) +
            t('FilmPage.hours') +
            (episode.runtime % 60) +
            t('FilmPage.min'),
      overview: episode.overview,
      crew: episode?.crew?.reduce<Record<string, string[]>>((acc, item) => {
        const key = item.job;
        if (!acc[key]) {
          acc[key] = [];
        }
        const itemToAdd = item.name;
        acc[key].push(itemToAdd);
        return acc;
      }, {}),
      cast: episode.guest_stars.map((item) => {
        return {
          name: item.name,
          image: item.profile_path
            ? `${import.meta.env.VITE_IMAGE_API_LINK}/${horizontalImageSize}/${item.profile_path}`
            : item.gender === 1
              ? femalePlaceHolder
              : malePlaceHolder,
          variant: CastCrewCardVariant.horizontal,
          description: [{ job: item.character }],
          link: `${routes.person}/${item.id}-${item.name?.toLowerCase().replace(normalizeTitle, '-')}`,
        };
      }),
    };
  });
  return (
    <div className="w-full flex flex-col items-center">
      <PageTitle {...titleInfo} />
      <div className="w-full flex justify-center border-b">{SeasonsLink}</div>

      <div className="max-w-[1400px] px-10 py-[30px]">
        <h3 className="flex text-[1.3rem] text-black font-semibold mb-2">
          {t('FilmPage.episodes')}
          <span className="text-black/70 ml-2">{episodes?.length}</span>
        </h3>

        <div className="flex flex-col gap-5">
          {!!episodesList?.length &&
            episodesList.map((episode, index) => (
              <EpisodeCard key={index} triggerFunc={getEpisode} {...episode} />
            ))}
        </div>
      </div>
      <div className="w-full flex justify-center mb-2">{SeasonsLink}</div>
    </div>
  );
};

export default Season;
