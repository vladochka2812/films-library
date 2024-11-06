import { configureStore } from '@reduxjs/toolkit';
import trendingItemsReducer from '../../entities/TrendingSection/api/slice';

export const store = configureStore({
  reducer: {
    trendingItems: trendingItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
