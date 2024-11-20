import { AppDispatch, RootState } from '@/app/store/store';
import { useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getCastCrew } from '../../api/gets/getCastCrew';
import {
  CastCrewCardType,
  CastCrewCardVariant,
  femalePlaceHolder,
  horizontalImageSize,
  malePlaceHolder,
} from '@/shared/CastCrewCard/model/model';
import { CastCrewPageSections } from '@/entities/CastCrewPageSections/CastCrewPageSections';
import { getMovie } from '../../api/gets/getMovie';

const CastMovie = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { id } = useParams();

  const path = useMemo(() => {
    return `${id?.split('-')[0]}`;
  }, []);

  const dispatch = useDispatch<AppDispatch>();

  const { castCrew, movieItem } = useSelector(
    (state: RootState) => state.movieItem
  );

  useEffect(() => {
    dispatch(getCastCrew({ path }));
    dispatch(getMovie({ path }));
  }, [path, dispatch]);

  const { title, poster_path, release_date } = movieItem;

  const titleInfo = useMemo(() => {
    return {
      title: title,
      image: poster_path,
      link: pathname.replace('/cast', ''),
      year: release_date?.split('-')[0],
    };
  }, [title, poster_path, release_date]);

  const cast = castCrew?.cast?.map((item) => {
    return {
      name: item.name,
      image: item.profile_path
        ? `${import.meta.env.VITE_IMAGE_API_LINK}/${horizontalImageSize}/${item.profile_path}`
        : item.gender === 1
          ? femalePlaceHolder
          : malePlaceHolder,
      variant: CastCrewCardVariant.horizontal,
      description: [
        {
          job: item.character,
        },
      ],
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
        description: [{ job: item.job }],
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

export default CastMovie;
