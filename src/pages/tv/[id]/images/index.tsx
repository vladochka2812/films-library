import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { useTranslation } from 'react-i18next';
import { ImagesPageSections } from '@/entities/ImagesPageSections/ImagesPageSections';
import { getImages } from '../../api/gets/getImages';
import {
  ImageCardVariant,
  backdropImageSize,
  originalImageSize,
  posterImageSize,
} from '@/shared/ImageCard/model/model';
import { getTV } from '../../api/gets/getTV';

const ImagesTV = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { id } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const [type, setType] = useState(t('videosPage.trailers'));

  const dispatch = useDispatch<AppDispatch>();

  const { tvItem, images, loading } = useSelector(
    (state: RootState) => state.tvItem
  );

  const { name, poster_path, first_air_date } = tvItem;

  useEffect(() => {
    dispatch(getImages({ path }));
    dispatch(getTV({ path }));
  }, [path, dispatch]);

  const titleInfo = useMemo(() => {
    return {
      title: name,
      image: poster_path,
      link: pathname.replace('/images', ''),
      year: first_air_date?.split('-')[0],
    };
  }, [name, poster_path, first_air_date]);

  const posters = images?.posters?.map((poster) => ({
    height: poster.height,
    width: poster.width,
    type: ImageCardVariant.poster,
    imageHref: `${import.meta.env.VITE_IMAGE_API_LINK}/${posterImageSize}/${poster.file_path}`,
    originalImageHref: `${import.meta.env.VITE_IMAGE_API_LINK}/${originalImageSize}/${poster.file_path}`,
  }));

  const backdrops = images?.backdrops?.map((backdrop) => ({
    height: backdrop.height,
    width: backdrop.width,
    type: ImageCardVariant.backdrop,
    imageHref: `${import.meta.env.VITE_IMAGE_API_LINK}/${backdropImageSize}/${backdrop.file_path}`,
    originalImageHref: `${import.meta.env.VITE_IMAGE_API_LINK}/${originalImageSize}/${backdrop.file_path}`,
  }));

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

  const imageCollections = {
    [t('imagesPage.posters')]: posters,
    [t('imagesPage.backdrops')]: backdrops,
  };

  const selectedImages = useMemo(() => {
    return imageCollections[type];
  }, [type]);

  return (
    !loading && (
      <ImagesPageSections
        title={titleInfo}
        tabMenu={tabMenuInfo}
        images={selectedImages || posters}
      />
    )
  );
};

export default ImagesTV;
