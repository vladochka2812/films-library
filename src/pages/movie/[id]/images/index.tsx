import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { useTranslation } from 'react-i18next';
import { getMovie } from '../../api/gets/getMovie';
import { ImagesPageSections } from '@/entities/ImagesPageSections/ImagesPageSections';
import { getImages } from '../../api/gets/getImages';

const ImagesMovie = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { id } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const [type, setType] = useState(t('videosPage.trailers'));

  const dispatch = useDispatch<AppDispatch>();

  const { movieItem, images, loading } = useSelector(
    (state: RootState) => state.movieItem
  );

  const { title, poster_path, release_date } = movieItem;
  useEffect(() => {
    dispatch(getImages({ path }));
    dispatch(getMovie({ path }));
  }, [path, dispatch]);

  const titleInfo = useMemo(() => {
    return {
      title: title,
      image: poster_path,
      link: pathname.replace('/images', ''),
      year: release_date?.split('-')[0],
    };
  }, [title, poster_path, release_date]);

  const posters = images?.posters;
  const backdrops = images?.backdrops;

  const tabMenuInfo = useMemo(() => {
    return {
      title: t('imagesPage.title'),
      items: [t('imagesPage.posters'), t('imagesPage.backdrops')],
      selectedItem: type,
      onSelect: (tab: string) => {
        setType(tab);
      },
      afterContent: [backdrops?.length.toString(), posters?.length.toString()],
    };
  }, [images.backdrops, images.posters]);

  const videoCollections = {
    [t('imagesPage.posters')]: posters,
    [t('imagesPage.backdrops')]: backdrops,
  };

  const selectedVideos = useMemo(() => {
    return videoCollections[type];
  }, [type]);

  return (
    !loading && (
      <ImagesPageSections
        title={titleInfo}
        tabMenu={tabMenuInfo}
        images={selectedVideos || posters}
      />
    )
  );
};

export default ImagesMovie;
