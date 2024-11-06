import { configureStore } from '@reduxjs/toolkit';
import trendingItemsReducer from '../../entities/TrendingSection/api/slice';
import latestItemsReducer from '../../entities/LatestSection/api/slice';

export const store = configureStore({
  reducer: {
    trendingItems: trendingItemsReducer,
    latestItems: latestItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
