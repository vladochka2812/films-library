import { configureStore } from '@reduxjs/toolkit';
import trendingItemsReducer from '@/entities/HomePageSections/TrendingSection/api/slice';
import latestItemsReducer from '@/entities/HomePageSections/LatestSection/api/slice';
import popularItemsReducer from '@/entities/HomePageSections/PopularSection/api/slice';
import topRatedItemsReducer from '@/entities/HomePageSections/TopRatedSection/api/slice';
import popularPeopleItemsReducer from '@/entities/HomePageSections/PopularPeopleSection/api/slice';
import movieItemReducer from '@/pages/movie/api/slice';
import tvItemReducer from '@/pages/tv/api/slice';
import personItemReducer from '@/pages/Person/[id]/api/slice';

export const store = configureStore({
  reducer: {
    popularItems: popularItemsReducer,
    trendingItems: trendingItemsReducer,
    latestItems: latestItemsReducer,
    topRatedItems: topRatedItemsReducer,
    popularPeopleItems: popularPeopleItemsReducer,
    movieItem: movieItemReducer,
    tvItem: tvItemReducer,
    personInfo: personItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
