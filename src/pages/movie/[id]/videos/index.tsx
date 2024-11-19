import { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { getVideos } from '../../api/gets/getVideos';
import { VideosPageSections } from '@/entities/VideosPageSections/VideosPageSections';
import { useTranslation } from 'react-i18next';
import { getMovie } from '../../api/gets/getMovie';
import { VideoTypes } from '@/entities/VideosPageSections/model/model';

const VideosMovie = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { id } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const [type, setType] = useState(t('videosPage.trailers'));

  const dispatch = useDispatch<AppDispatch>();

  const { videos, movieItem, loading } = useSelector(
    (state: RootState) => state.movieItem
  );

  const { title, poster_path, release_date } = movieItem;
  useEffect(() => {
    dispatch(getVideos({ path }));
    dispatch(getMovie({ path }));
  }, [path, dispatch]);

  const titleInfo = useMemo(() => {
    return {
      title: title,
      image: poster_path,
      link: pathname.replace('/videos', ''),
      year: release_date?.split('-')[0],
    };
  }, [title, poster_path, release_date]);

  const trailers = videos?.results?.filter(
    (video) => video.type === VideoTypes.trailer
  );

  const teasers = videos?.results?.filter(
    (video) => video.type === VideoTypes.teaser
  );
  const clips = videos?.results?.filter(
    (video) => video.type === VideoTypes.clip
  );
  const behindTheScenes = videos?.results?.filter(
    (video) => video.type === VideoTypes.behindTheScene
  );
  const bloopers = videos?.results?.filter(
    (video) => video.type === VideoTypes.blooper
  );
  const featurettes = videos?.results?.filter(
    (video) => video.type === VideoTypes.featurette
  );

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

export default VideosMovie;
