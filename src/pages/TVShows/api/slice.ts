import { FilmsResponse } from '@/shared/FilmCard/model/model';
import { createSlice } from '@reduxjs/toolkit';
import { getPopular } from './gets/getPopular';
import { getTopRated } from './gets/getTopRated';
import { getAiringToday } from './gets/getAiringToday';
import { getOnTheAir } from './gets/getOnTheAir';
import { GenreType } from '@/pages/movie/model/model';
import { KeywordsResponse } from '@/pages/Movies/model/model';
import { getFiltered } from './gets/getFiltered';
import { getKeywords } from './gets/getKeywords';
import { getGenres } from './gets/getGenres';

const initialState = {
  popular: {} as FilmsResponse,
  airingToday: {} as FilmsResponse,
  onTheAir: {} as FilmsResponse,
  topRated: {} as FilmsResponse,
  filtered: {} as FilmsResponse,
  genres: {} as { genres: GenreType[] },
  keywords: {} as KeywordsResponse,
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
      })

      .addCase(getFiltered.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFiltered.fulfilled, (state, action) => {
        state.loading = false;
        state.filtered = action.payload;
      })
      .addCase(getFiltered.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      })

      .addCase(getGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      })

      .addCase(getKeywords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getKeywords.fulfilled, (state, action) => {
        state.loading = false;
        state.keywords = action.payload;
      })
      .addCase(getKeywords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export default TVShowsListSlice.reducer;
