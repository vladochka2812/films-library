import { FilmsResponse } from '@/shared/FilmCard/model/model';
import { createSlice } from '@reduxjs/toolkit';
import { getPopular } from './gets/getPopular';
import { getNowPlaying } from './gets/getNowPlaying';
import { getTopRated } from './gets/getTopRated';
import { getUpcoming } from './gets/getUpcoming';

const initialState = {
  popular: {} as FilmsResponse,
  nowPlaying: {} as FilmsResponse,
  upcoming: {} as FilmsResponse,
  topRated: {} as FilmsResponse,
  loading: false,
  error: null,
};

const moviesListSlice = createSlice({
  name: 'film',
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
        state.popular = action.payload;
      })
      .addCase(getPopular.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      })

      .addCase(getNowPlaying.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNowPlaying.fulfilled, (state, action) => {
        state.loading = false;
        state.nowPlaying = action.payload;
      })
      .addCase(getNowPlaying.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      })

      .addCase(getTopRated.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.loading = false;
        state.topRated = action.payload;
      })
      .addCase(getTopRated.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      })

      .addCase(getUpcoming.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUpcoming.fulfilled, (state, action) => {
        state.loading = false;
        state.upcoming = action.payload;
      })
      .addCase(getUpcoming.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export default moviesListSlice.reducer;
