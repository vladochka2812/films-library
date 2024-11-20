import { createSlice } from '@reduxjs/toolkit';
import { getMovie } from './gets/getMovie';
import {
  CastCrewType,
  ImagesType,
  KeywordsType,
  MovieType,
  ReviewsType,
  VideosType,
} from '../model/model';
import { getImages } from './gets/getImages';
import { FilmsResponse } from '@/shared/FilmCard/model/model';
import { getRecommendations } from './gets/getRecommendations';
import { getReviews } from './gets/getReviews';
import { getVideos } from './gets/getVideos';
import { getKeywords } from './gets/getKeywords';
import { getCastCrew } from './gets/getCastCrew';

const initialState = {
  movieItem: {} as MovieType,
  images: {} as ImagesType,
  keywords: {} as KeywordsType,
  recommendations: {} as FilmsResponse,
  reviews: {} as ReviewsType,
  videos: {} as VideosType,
  castCrew: {} as CastCrewType,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movieItem = action.payload;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      })

      .addCase(getImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })

      .addCase(getKeywords.fulfilled, (state, action) => {
        state.loading = false;
        state.keywords = action.payload;
      })

      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendations = action.payload;
      })

      .addCase(getReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })

      .addCase(getVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })

      .addCase(getCastCrew.fulfilled, (state, action) => {
        state.loading = false;
        state.castCrew = action.payload;
      });
  },
});

export default movieSlice.reducer;
