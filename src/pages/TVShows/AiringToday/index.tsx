import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { ListPageSections } from '@/entities/ListPageSections/ListPageSections';
import { getAiringToday } from '../api/gets/getAiringToday';

const AiringToday = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { airingToday } = useSelector((state: RootState) => state.tvList);
  const navigate = useNavigate();
  const location = useLocation();

  const getPageFromUrl = () => {
    const urlParams = new URLSearchParams(location.search);
    const pageParam = urlParams.get('page');
    return pageParam ? parseInt(pageParam) : 1;
  };

  const [page, setPage] = useState(getPageFromUrl());

  useEffect(() => {
    dispatch(getAiringToday({ page }));
  }, [page, dispatch]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    navigate(`?page=${newPage}`);
  };

  return (
    airingToday && (
      <ListPageSections
        title={t('tv.airingToday')}
        items={airingToday}
        page={page}
        handlePageChange={handlePageChange}
      />
    )
  );
};

export default AiringToday;
