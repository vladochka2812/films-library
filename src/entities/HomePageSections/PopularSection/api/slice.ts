import { createSlice } from '@reduxjs/toolkit';
import { getPopular } from './getPopular';
import { FilmsResponse } from '@/shared/FilmCard/model/model';

const initialState = {
  popularItems: {} as FilmsResponse,
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
