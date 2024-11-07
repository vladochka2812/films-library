import { createSlice } from '@reduxjs/toolkit';
import { getTrending } from './getTrending';
import { TrendingSectionType } from '../model/model';

const initialState = {
  trendingItems: {} as TrendingSectionType,
  loading: false,
  error: null,
};

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrending.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrending.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingItems = action.payload;
      })
      .addCase(getTrending.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export default trendingSlice.reducer;
