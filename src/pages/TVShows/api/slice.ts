import { FilmsResponse } from '@/shared/FilmCard/model/model';
import { createSlice } from '@reduxjs/toolkit';
import { getPopular } from './gets/getPopular';
import { getTopRated } from './gets/getTopRated';
import { getAiringToday } from './gets/getAiringToday';
import { getOnTheAir } from './gets/getOnTheAir';

const initialState = {
  popular: {} as FilmsResponse,
  airingToday: {} as FilmsResponse,
  onTheAir: {} as FilmsResponse,
  topRated: {} as FilmsResponse,
  loading: false,
  error: null,
};

const TVShowsListSlice = createSlice({
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

      .addCase(getAiringToday.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAiringToday.fulfilled, (state, action) => {
        state.loading = false;
        state.airingToday = action.payload;
      })
      .addCase(getAiringToday.rejected, (state, action) => {
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

      .addCase(getOnTheAir.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOnTheAir.fulfilled, (state, action) => {
        state.loading = false;
        state.onTheAir = action.payload;
      })
      .addCase(getOnTheAir.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export default TVShowsListSlice.reducer;
