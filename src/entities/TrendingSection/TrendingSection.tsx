import { useCallback, useEffect, useMemo, useState } from 'react';
import { TabMenu } from '../../shared/TabMenu/TabMenu';
import { TrendingDate, TrendingSectionType } from './model/model';
import { apiClient } from '../../features/AuthInterceptor/apiClient';
import { FilmCard } from '../../shared/FilmCard/FilmCard';

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
      <div className="overflow-x-auto scrollbar-hide py-5 transition duration-500 linear relative">
        <div
          style={{
            backgroundImage: `url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)`,
          }}
          className="bg-fixed bg-contain bg-no-repeat bg-center w-full"
        >
          <div className="relative overflow-x-auto scrollbar-hide py-5 flex before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[60px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[60px] after:bg-gradient-to-l after:from-white after:to-transparent">
            {data &&
              data.results.map((item) => (
                <div className="ml-5" key={item.id}>
                  <FilmCard film={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
