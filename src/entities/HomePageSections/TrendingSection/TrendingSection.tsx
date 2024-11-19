import { AppDispatch, RootState } from '@/app/store/store';
import { FilmCard } from '@/shared/FilmCard/FilmCard';
import { FilmCardVariant } from '@/shared/FilmCard/model/model';
import { HorizontalScrollWrapper } from '@/shared/HorizontalScrollWrapper/HorizontalScrollWrapper';
import { TabMenu } from '@/shared/TabMenu/TabMenu';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrending } from './api/getTrending';
import { PathType, bgImage, useTrendingTabs } from './model/model';
import { useTranslation } from 'react-i18next';

export const TrendingSection = () => {
  const trendingTabs = useTrendingTabs();
  const [selectedTab, setSelectedTab] = useState<string>(trendingTabs[0]);

  const { t } = useTranslation();

  const path = useMemo(() => {
    const pathMap = {
      [trendingTabs[0]]: PathType.week,
      [trendingTabs[1]]: PathType.day,
    };

    return pathMap[selectedTab] || PathType.week;
  }, [selectedTab, trendingTabs]);

  const dispatch = useDispatch<AppDispatch>();

  const { trendingItems, loading } = useSelector(
    (state: RootState) => state.trendingItems
  );

  useEffect(() => {
    dispatch(getTrending({ path }));
  }, [path, dispatch]);

  return (
    <div className="flex flex-col lg:max-w-[1400px] max-w-[100vw] pt-[30px]">
      <div className="flex justify-start items-center px-5">
        <h2 className="text-[24px] font-semibold mr-5">
          {t('trending.title')}
        </h2>
        <TabMenu
          items={trendingTabs}
          selectedItem={selectedTab}
          onSelect={(tab) => setSelectedTab(tab)}
        />
      </div>
      <HorizontalScrollWrapper bgImage={bgImage}>
        {!loading &&
          trendingItems?.results?.map((item) => (
            <div className="ml-5" key={item.id}>
              <FilmCard film={item} variant={FilmCardVariant.vertical} />
            </div>
          ))}
      </HorizontalScrollWrapper>
    </div>
  );
};
