import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getPopularPeople } from './api/getPopularPeople';
import { AppDispatch, RootState } from '@/app/store/store';
import { PersonCard } from '@/shared/PersonCard/PersonCard';
import { HorizontalScrollWrapper } from '@/shared/HorizontalScrollWrapper/HorizontalScrollWrapper';
import { bgImage } from '../TrendingSection/model/model';

export const PopularPeopleSection = () => {
  const { t } = useTranslation();

  const path = 'person/popular';
  const dispatch = useDispatch<AppDispatch>();

  const { popularPeopleItems, loading } = useSelector(
    (state: RootState) => state.popularPeopleItems
  );

  useEffect(() => {
    dispatch(getPopularPeople({ path }));
  }, [path, dispatch]);

  return (
    <div className="flex flex-col lg:max-w-[1400px] max-w-[100vw] pt-[30px]">
      <h2 className="text-[24px] font-semibold px-5">
        {t('popularPeople.title')}
      </h2>
      <HorizontalScrollWrapper bgImage={bgImage}>
        {!loading &&
          popularPeopleItems.results?.map((person) => (
            <div className="ml-[30px]" key={person.id}>
              <PersonCard person={person} />
            </div>
          ))}
      </HorizontalScrollWrapper>
    </div>
  );
};
