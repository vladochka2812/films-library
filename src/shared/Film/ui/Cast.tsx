import { CastCrewCard } from '@/shared/CastCrewCard/CastCrewCard';
import { CastCrewCardType } from '@/shared/CastCrewCard/model/model';
import { HorizontalScrollWrapper } from '@/shared/HorizontalScrollWrapper/HorizontalScrollWrapper';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { Link, useLocation } from 'react-router-dom';
import { HorizontalScrollWrapperVariant } from '@/shared/HorizontalScrollWrapper/model/model';

export const Cast = ({ cast }: { cast: CastCrewCardType[] }) => {
  const { t } = useTranslation();

  const { pathname } = useLocation();
  return (
    <HorizontalScrollWrapper variant={HorizontalScrollWrapperVariant.simple}>
      <div className="flex items-center gap-5 pb-4">
        {cast?.map((item, index) => <CastCrewCard key={index} {...item} />)}
        <Link to={`${pathname}/cast`} className="ml-4">
          <span className="flex text-nowrap text-[1.3rem] items-center">
            {t('FilmPage.viewMore')}
            <FaLongArrowAltRight className="text-[1.2rem] ml-1" />
          </span>
        </Link>
      </div>
    </HorizontalScrollWrapper>
  );
};
