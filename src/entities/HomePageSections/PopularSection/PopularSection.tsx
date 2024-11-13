import { AppDispatch, RootState } from '@/app/store/store';
import { FilmCard } from '@/shared/FilmCard/FilmCard';
import { FilmCardVariant } from '@/shared/FilmCard/model/model';
import { HorizontalScrollWrapper } from '@/shared/HorizontalScrollWrapper/HorizontalScrollWrapper';
import { TabMenu } from '@/shared/TabMenu/TabMenu';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPopular } from './api/getPopular';
import { PathType, usePopularTabs } from './model/model';
import { useTranslation } from 'react-i18next';

export const PopularSection = () => {
  const { t } = useTranslation();

  const popularTabs = usePopularTabs();
  const [selectedTab, setSelectedTab] = useState<string>(popularTabs[0]);

  const path = useMemo(() => {
    const pathMap = {
      [popularTabs[0]]: PathType.streaming,
      [popularTabs[1]]: PathType.onTV,
    };

    return pathMap[selectedTab] || PathType.streaming;
  }, [selectedTab, popularTabs]);

  const dispatch = useDispatch<AppDispatch>();
  const { popularItems, loading } = useSelector(
    (state: RootState) => state.popularItems
  );

  useEffect(() => {
    dispatch(getPopular({ path }));
  }, [path, dispatch]);

  return (
    <div className="flex flex-col lg:max-w-[1400px] max-w-[100vw] pt-[30px]">
      <div className="flex justify-start items-center px-5">
        <h2 className="text-[24px] font-semibold mr-5">
          {t('popularSection.title')}
        </h2>
        <TabMenu
          items={popularTabs}
          selectedItem={selectedTab}
          onSelect={setSelectedTab}
        />
      </div>
      <HorizontalScrollWrapper>
        {!loading &&
          popularItems?.results?.map((item) => (
            <div className="ml-5" key={item.id}>
              <FilmCard film={item} variant={FilmCardVariant.vertical} />
            </div>
          ))}
      </HorizontalScrollWrapper>
    </div>
  );
};
