import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { ListPageSections } from '@/entities/ListPageSections/ListPageSections';
import { getNowPlaying } from '../api/gets/getNowPlaying';

const NowPlaying = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { nowPlaying } = useSelector((state: RootState) => state.moviesList);
  const navigate = useNavigate();
  const location = useLocation();

  const getPageFromUrl = () => {
    const urlParams = new URLSearchParams(location.search);
    const pageParam = urlParams.get('page');
    return pageParam ? parseInt(pageParam) : 1;
  };

  const [page, setPage] = useState(getPageFromUrl());

  useEffect(() => {
    dispatch(getNowPlaying({ page }));
  }, [page, dispatch]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    navigate(`?page=${newPage}`);
  };

  return (
    nowPlaying && (
      <ListPageSections
        title={t('movies.nowPlaying')}
        items={nowPlaying}
        page={page}
        handlePageChange={handlePageChange}
      />
    )
  );
};

export default NowPlaying;
