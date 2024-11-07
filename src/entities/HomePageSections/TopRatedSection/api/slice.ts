import { createSlice } from '@reduxjs/toolkit';
import { getTopRated } from './getTopRated';
import { FilmsResponse } from '@/shared/FilmCard/model/model';

const initialState = {
  topRatedItems: {} as FilmsResponse,
  loading: false,
  error: null,
};

const topRatedSlice = createSlice({
  name: 'topRated',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopRated.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.loading = false;
        state.topRatedItems = action.payload;
      })
      .addCase(getTopRated.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export default topRatedSlice.reducer;
