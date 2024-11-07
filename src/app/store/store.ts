import { configureStore } from '@reduxjs/toolkit';
import trendingItemsReducer from '@/entities/HomePageSections/TrendingSection/api/slice';
import latestItemsReducer from '@/entities/HomePageSections/LatestSection/api/slice';
import popularItemsReducer from '@/entities/HomePageSections/PopularSection/api/slice';
import topRatedItemsReducer from '@/entities/HomePageSections/TopRatedSection/api/slice';

export const store = configureStore({
  reducer: {
    popularItems: popularItemsReducer,
    trendingItems: trendingItemsReducer,
    latestItems: latestItemsReducer,
    topRatedItems: topRatedItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
