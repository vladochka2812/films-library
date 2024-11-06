import { useCallback, useEffect, useMemo, useState } from 'react';
import { TabMenu } from '../../shared/TabMenu/TabMenu';
import { TrendingDate, TrendingSectionType } from './model/model';
import { apiClient } from '../../features/AuthInterceptor/apiClient';
import { FilmCard } from '../../shared/FilmCard/FilmCard';
import { HorizontalScrollWrapper } from '../../shared/HorizontalScrollWrapper/HorizontalScrollWrapper';

export const TrendingSection = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TrendingDate[0]);
  const [data, setData] = useState<TrendingSectionType>();

  const path = useMemo(() => {
    return selectedTab === TrendingDate[0] ? 'day' : 'week';
  }, [selectedTab]);

  const fetchTrending = useCallback(async () => {
    try {
      const response = await apiClient.get(`/trending/movie/${path}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, [path]);

  useEffect(() => {
    fetchTrending();
  }, [path]);

  return (
    <div className="flex flex-col md:max-w-[1400px] max-w-[100vw] md:pt-0 pt-[30px]">
      <div className="flex justify-start items-center md:px-20 px-5">
        <h2 className="text-[24px] font-semibold mr-5">Trending</h2>
        <TabMenu
          items={TrendingDate}
          selectedItem={selectedTab}
          onSelect={(tab) => setSelectedTab(tab)}
        />
      </div>
      <HorizontalScrollWrapper bgImage="https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg">
        {data &&
          data.results.map((item) => (
            <div className="ml-5" key={item.id}>
              <FilmCard film={item} />
            </div>
          ))}
      </HorizontalScrollWrapper>
    </div>
  );
};
