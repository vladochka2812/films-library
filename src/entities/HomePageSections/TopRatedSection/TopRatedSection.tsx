import { AppDispatch, RootState } from '@/app/store/store';
import { FilmCard } from '@/shared/FilmCard/FilmCard';
import { FilmCardVariant } from '@/shared/FilmCard/model/model';
import { HorizontalScrollWrapper } from '@/shared/HorizontalScrollWrapper/HorizontalScrollWrapper';
import { TabMenu } from '@/shared/TabMenu/TabMenu';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopRated } from './api/getTopRated';
import { useTranslation } from 'react-i18next';
import { PathType, useTopRatedTabs } from './model/model';
import { languages } from '@/assets/locales/model/model';

export const TopRatedSection = () => {
  const { t, i18n } = useTranslation();
  const lang = useMemo(
    () => languages[i18n.language as keyof typeof languages],
    [i18n.language]
  );
  const topRatedTabs = useTopRatedTabs();
  const [selectedTab, setSelectedTab] = useState<string>(topRatedTabs[0]);

  const path = useMemo(() => {
    const pathMap = {
      [topRatedTabs[0]]: PathType.movie,
      [topRatedTabs[1]]: PathType.TV,
    };

    return pathMap[selectedTab] || PathType.movie;
  }, [selectedTab, topRatedTabs]);

  const dispatch = useDispatch<AppDispatch>();

  const { topRatedItems, loading } = useSelector(
    (state: RootState) => state.topRatedItems
  );

  useEffect(() => {
    dispatch(getTopRated({ path, lang }));
  }, [path, dispatch]);

  return (
    <div className="flex flex-col lg:max-w-[1400px] max-w-[100vw] pt-[30px]">
      <div className="flex justify-start items-center px-5">
        <h2 className="text-[24px] font-semibold mr-5">
          {t('topRated.title')}
        </h2>
        <TabMenu
          items={topRatedTabs}
          selectedItem={selectedTab}
          onSelect={(tab) => setSelectedTab(tab)}
        />
      </div>
      <HorizontalScrollWrapper>
        {!loading &&
          topRatedItems?.results?.map((item) => (
            <div className="ml-5" key={item.id}>
              <FilmCard film={item} variant={FilmCardVariant.vertical} />
            </div>
          ))}
      </HorizontalScrollWrapper>
    </div>
  );
};
