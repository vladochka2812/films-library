import { AppDispatch, RootState } from '@/app/store/store';
import { getSeasonInfo } from '@/pages/tv/api/gets/getSeasonInfo';
import { getYear } from '@/shared/Date/Date';
import { PageTitle } from '@/shared/PageTitle/PageTitle';
import { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

const Season = () => {
  const { pathname } = useLocation();

  const { id, seasonNumber } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const { season } = useSelector((state: RootState) => state.tvItem);

  console.log(season);

  const { name, poster_path, air_date } = season;

  useEffect(() => {
    dispatch(getSeasonInfo({ path, seasonNumber: seasonNumber || '1' }));
  }, [path, dispatch]);

  const titleInfo = useMemo(() => {
    return {
      title: name,
      image: poster_path,
      link: pathname.replace(`/season/${seasonNumber}`, '/seasons'),
      year: getYear(air_date),
    };
  }, [name, poster_path, air_date]);
  console.log(titleInfo.link);
  return (
    <div className="w-full">
      <PageTitle {...titleInfo} />
    </div>
  );
};

export default Season;
