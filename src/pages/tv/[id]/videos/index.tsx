import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { getVideos } from '../../api/gets/getVideos';
import { VideosPageSections } from '@/entities/VideosPageSections/VideosPageSections';
import { useTranslation } from 'react-i18next';
import { VideoTypes } from '@/entities/VideosPageSections/model/model';
import { formatDate } from '@/shared/Date/Date';
import { getTV } from '../../api/gets/getTV';

const VideosTV = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { id } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const [type, setType] = useState(t('videosPage.trailers'));

  const dispatch = useDispatch<AppDispatch>();

  const { videos, tvItem } = useSelector((state: RootState) => state.tvItem);

  const { name, poster_path, first_air_date } = tvItem;

  useEffect(() => {
    dispatch(getVideos({ path }));
    dispatch(getTV({ path }));
  }, [path, dispatch]);

  const videosList = videos?.results?.map((video) => ({
    image: `${import.meta.env.VITE_YOUTUBE_PHOTO_LINK}/${video.key}/${import.meta.env.VITE_YOUTUBE_PHOTO_NAME}`,
    link: `${import.meta.env.VITE_YOUTUBE_VIDEO}/${video.key}`,
    date: formatDate(video.published_at),
    type: video.type,
    name: video.name,
  }));

  const getFilteredVideos = (type: VideoTypes) => {
    return videosList?.filter((video) => video.type === type);
  };

  const titleInfo = useMemo(() => {
    return {
      title: name,
      image: poster_path,
      link: pathname.replace('/videos', ''),
      year: first_air_date?.split('-')[0],
    };
  }, [name, poster_path, first_air_date]);

  const trailers = getFilteredVideos(VideoTypes.trailer);
  const teasers = getFilteredVideos(VideoTypes.teaser);
  const clips = getFilteredVideos(VideoTypes.clip);
  const behindTheScenes = getFilteredVideos(VideoTypes.behindTheScene);
  const bloopers = getFilteredVideos(VideoTypes.blooper);
  const featurettes = getFilteredVideos(VideoTypes.featurette);

  const tabMenuInfo = useMemo(() => {
    return {
      title: t('videosPage.title'),
      items: [
        t('videosPage.trailers'),
        t('videosPage.teasers'),
        t('videosPage.clips'),
        t('videosPage.behindTheScenes'),
        t('videosPage.bloopers'),
        t('videosPage.featurettes'),
      ],
      selectedItem: type,
      onSelect: (tab: string) => {
        setType(tab);
      },
      afterContent: [
        trailers?.length.toString(),
        teasers?.length.toString(),
        clips?.length.toString(),
        behindTheScenes?.length.toString(),
        bloopers?.length.toString(),
        featurettes?.length.toString(),
      ],
    };
  }, [videos.results]);

  const videoCollections = {
    [t('videosPage.trailers')]: trailers,
    [t('videosPage.teasers')]: teasers,
    [t('videosPage.clips')]: clips,
    [t('videosPage.behindTheScenes')]: behindTheScenes,
    [t('videosPage.bloopers')]: bloopers,
    [t('videosPage.featurettes')]: featurettes,
  };

  const selectedVideos = useMemo(() => {
    return videoCollections[type];
  }, [type]);

  return (
    <VideosPageSections
      title={titleInfo}
      tabMenu={tabMenuInfo}
      videos={selectedVideos || trailers}
    />
  );
};

export default VideosTV;
