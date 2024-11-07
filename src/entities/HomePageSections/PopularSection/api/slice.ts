import { createSlice } from '@reduxjs/toolkit';
import { PopularSectionType } from '../model/model';
import { getPopular } from './getPopular';

const initialState = {
  popularItems: {} as PopularSectionType,
  loading: false,
  error: null,
};

const popularSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopular.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopular.fulfilled, (state, action) => {
        state.loading = false;
        state.popularItems = action.payload;
      })
      .addCase(getPopular.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export default popularSlice.reducer;
