import { AppDispatch, RootState } from '@/app/store/store';
import { useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getCastCrew } from '../../api/gets/getCastCrew';
import { getTV } from '../../api/gets/getTV';
import {
  CastCrewCardType,
  CastCrewCardVariant,
  Job,
  Role,
  femalePlaceHolder,
  horizontalImageSize,
  malePlaceHolder,
} from '@/shared/CastCrewCard/model/model';
import { CastCrewPageSections } from '@/entities/CastCrewPageSections/CastCrewPageSections';

const CastTV = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { id } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const { castCrew, tvItem } = useSelector((state: RootState) => state.tvItem);

  useEffect(() => {
    dispatch(getCastCrew({ path }));
    dispatch(getTV({ path }));
  }, [path, dispatch]);

  const { name, poster_path, first_air_date } = tvItem;
  const titleInfo = useMemo(() => {
    return {
      title: name,
      image: poster_path,
      link: pathname.replace('/cast', ''),
      year: first_air_date?.split('-')[0],
    };
  }, [name, poster_path, first_air_date]);

  const cast = castCrew?.cast?.map((item) => {
    return {
      name: item.name,
      image: item.profile_path
        ? `${import.meta.env.VITE_IMAGE_API_LINK}/${horizontalImageSize}/${item.profile_path}`
        : item.gender === 1
          ? femalePlaceHolder
          : malePlaceHolder,
      variant: CastCrewCardVariant.horizontal,
      description: item.roles.map((jobItem: Role) => ({
        job: jobItem.character,
        episodeAmount:
          jobItem.episode_count > 1
            ? `(${jobItem.episode_count} Episodes)`
            : `(${jobItem.episode_count} Episode)`,
      })),
    };
  });

  const crew = castCrew?.crew?.reduce<Record<string, CastCrewCardType[]>>(
    (acc, item) => {
      const key = item.department;
      if (!acc[key]) {
        acc[key] = [];
      }
      const itemToAdd = {
        name: item.name,
        image: item.profile_path
          ? `${import.meta.env.VITE_IMAGE_API_LINK}/${horizontalImageSize}/${item.profile_path}`
          : item.gender === 1
            ? femalePlaceHolder
            : malePlaceHolder,
        variant: CastCrewCardVariant.horizontal,
        description: item.jobs.map((jobItem: Job) => {
          return {
            job: jobItem.job,
            episodeAmount:
              jobItem.episode_count > 1
                ? `(${jobItem.episode_count} Episodes)`
                : `(${jobItem.episode_count} Episode)`,
          };
        }),
      };
      acc[key].push(itemToAdd);
      return acc;
    },
    {}
  );


  return (
    <CastCrewPageSections
      title={titleInfo}
      cast={cast}
      crew={crew}
      crewAmount={castCrew?.crew?.length}
    />
  );
};

export default CastTV;
