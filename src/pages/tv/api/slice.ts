import { createSlice } from '@reduxjs/toolkit';
import {
  CastCrewType,
  ImagesType,
  KeywordsType,
  ReviewsType,
  TVShowType,
  VideosType,
} from '../model/model';
import { getImages } from './gets/getImages';
import { FilmsResponse } from '@/shared/FilmCard/model/model';
import { getRecommendations } from './gets/getRecommendations';
import { getReviews } from './gets/getReviews';
import { getVideos } from './gets/getVideos';
import { getKeywords } from './gets/getKeywords';
import { getTV } from './gets/getTV';
import { getCastCrew } from './gets/getCastCrew';
import { SeasonType } from '@/shared/SeasonCard/model/model';
import { getSeasonInfo } from './gets/getSeasonInfo';

const initialState = {
  tvItem: {} as TVShowType,
  images: {} as ImagesType,
  keywords: {} as KeywordsType,
  recommendations: {} as FilmsResponse,
  reviews: {} as ReviewsType,
  videos: {} as VideosType,
  castCrew: {} as CastCrewType,
  season: {} as SeasonType,
  loading: false,
  error: null,
};

const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTV.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getTV.fulfilled, (state, action) => {
        state.loading = false;
        state.tvItem = action.payload;
      })

      .addCase(getTV.rejected, (state, action) => {
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
      })

      .addCase(getSeasonInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.season = action.payload;
      });
  },
});

export default tvSlice.reducer;
