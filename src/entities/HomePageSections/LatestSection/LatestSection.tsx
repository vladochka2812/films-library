import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { AppDispatch, RootState } from '@/app/store/store';
import { FilmCard } from '@/shared/FilmCard/FilmCard';
import { FilmCardVariant } from '@/shared/FilmCard/model/model';
import { HorizontalScrollWrapper } from '@/shared/HorizontalScrollWrapper/HorizontalScrollWrapper';
import { HorizontalScrollWrapperVariant } from '@/shared/HorizontalScrollWrapper/model/model';
import { TabMenu } from '@/shared/TabMenu/TabMenu';
import { TabMenuVariant } from '@/shared/TabMenu/model/model';
import { getLatest } from './api/getLatest';
import { useTranslation } from 'react-i18next';
import { PathType, useLatestTabs } from './model/model';
import { languages } from '@/assets/locales/model/model';

export const LatestSection = () => {
  const latestTabs = useLatestTabs();
  const [selectedTab, setSelectedTab] = useState<string>(latestTabs[0]);
  const [currentImage, setCurrentImage] = useState('');
  const [currenScroll, setCurrentScroll] = useState<number>(0);
  const { t } = useTranslation();

  const path = useMemo(() => {
    const pathMap = {
      [latestTabs[0]]: PathType.nowPlaying,
      [latestTabs[1]]: PathType.popular,
      [latestTabs[2]]: PathType.topRated,
      [latestTabs[3]]: PathType.upcoming,
    };

    return pathMap[selectedTab] || PathType.nowPlaying;
  }, [selectedTab, latestTabs]);

  const dispatch = useDispatch<AppDispatch>();

  const { latestItems, loading } = useSelector(
    (state: RootState) => state.latestItems
  );

  useEffect(() => {
    dispatch(getLatest({ path }));
  }, [path, dispatch]);

  return (
    <div
      className={classNames(
        'overflow-x-auto scrollbar-hide transition duration-500 linear relative overflow-y-hidden w-full text-white flex flex-col lg:max-w-[1400px] max-w-[100vw]',
        {
          'after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[60px] after:bg-gradient-to-l after:from-white after:to-transparent':
            currenScroll === 0,
        }
      )}
      style={currentImage ? { backgroundImage: `url(${currentImage})` } : {}}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-darkBlue via-darkBlue to-darkBlue opacity-75 pointer-events-none" />

      <div className="relative z-10 flex justify-start items-center px-10 pt-[30px]">
        <h2 className="text-[24px] font-semibold mr-5">
          {t('latestDate.Latest')}
        </h2>

        <TabMenu
          variant={TabMenuVariant.green}
          items={latestTabs}
          selectedItem={selectedTab}
          onSelect={(tab) => setSelectedTab(tab)}
        />
      </div>
      <HorizontalScrollWrapper
        variant={HorizontalScrollWrapperVariant.shadow}
        setCurrentScroll={setCurrentScroll}
      >
        <div className="flex pl-5 py-6">
          {!loading &&
            latestItems?.results?.map((item) => (
              <div className="ml-5" key={item.id}>
                <FilmCard
                  film={item}
                  variant={FilmCardVariant.horizontal}
                  setCurrentImage={setCurrentImage}
                />
              </div>
            ))}
        </div>
      </HorizontalScrollWrapper>
    </div>
  );
};
