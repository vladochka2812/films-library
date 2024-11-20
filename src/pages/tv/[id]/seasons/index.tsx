import { useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { formatDate, getYear } from '@/shared/Date/Date';
import { getTV } from '../../api/gets/getTV';
import { SeasonsPageSections } from '@/entities/SeasonsPageSections/SeasonsPageSections';

import { seasonImageSize } from '../../model/model';

const SeasonsTV = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const { tvItem } = useSelector((state: RootState) => state.tvItem);

  const { name, poster_path, first_air_date, seasons } = tvItem;
  useEffect(() => {
    dispatch(getTV({ path }));
  }, [path, dispatch]);

  const titleInfo = useMemo(() => {
    return {
      title: name,
      image: poster_path,
      link: pathname.replace('/seasons', ''),
      year: first_air_date?.split('-')[0],
    };
  }, [name, poster_path, first_air_date]);

  const seasonsList = useMemo(() => {
    return seasons?.map((season) => ({
      image: `${import.meta.env.VITE_IMAGE_API_LINK}/${seasonImageSize}/${season.poster_path}`,
      rate: Math.round(season.vote_average * 10),
      date: formatDate(season.air_date),
      year: getYear(season.air_date),
      season: season.name,
      overview: season.overview,
      episodes: season.episode_count,
      link: pathname.replace(
        '/seasons',
        `/season/${season.name.split(' ')[1]}`
      ),
    }));
  }, [seasons]);

  return <SeasonsPageSections title={titleInfo} seasons={seasonsList} />;
};

export default SeasonsTV;
