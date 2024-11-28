import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPopular } from '../api/gets/getPopular';
import { ListPageSections } from '@/entities/ListPageSections/ListPageSections';

const Popular = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { popular } = useSelector((state: RootState) => state.moviesList);
  const navigate = useNavigate();
  const location = useLocation();

  const getPageFromUrl = () => {
    const urlParams = new URLSearchParams(location.search);
    const pageParam = urlParams.get('page');
    return pageParam ? parseInt(pageParam) : 1;
  };

  const [page, setPage] = useState(getPageFromUrl());

  useEffect(() => {
    dispatch(getPopular({ page }));
  }, [page, dispatch]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    navigate(`?page=${newPage}`);
  };

  return (
    popular && (
      <ListPageSections
        title={t('movies.popular')}
        items={popular}
        page={page}
        handlePageChange={handlePageChange}
      />
    )
  );
};

export default Popular;
