import { createSlice } from '@reduxjs/toolkit';
import { getLatest } from './getLatest';
import { LatestSectionType } from '../model/model';

const initialState = {
  latestItems: {} as LatestSectionType,
  loading: false,
  error: null,
};

const latestSlice = createSlice({
  name: 'latest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLatest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLatest.fulfilled, (state, action) => {
        state.loading = false;
        state.latestItems = action.payload;
      })
      .addCase(getLatest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export default latestSlice.reducer;
