import { createSlice } from '@reduxjs/toolkit';

import { CreditsType, PersonType, SocialType } from '../../model/model';
import { getPerson } from './get/getPerson';
import { getSocial } from './get/getSocial';
import { getCredits } from './get/getCredits';

const initialState = {
  person: {} as PersonType,
  social: {} as SocialType,
  credits: {} as CreditsType,
  loading: false,
  error: null,
};

const personSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPerson.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getPerson.fulfilled, (state, action) => {
        state.loading = false;
        state.person = action.payload;
      })

      .addCase(getPerson.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      })

      .addCase(getSocial.fulfilled, (state, action) => {
        state.loading = false;
        state.social = action.payload;
      })

      .addCase(getCredits.fulfilled, (state, action) => {
        state.loading = false;
        state.credits = action.payload;
      });

    // .addCase(getImages.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.images = action.payload;
    // })

    // .addCase(getKeywords.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.keywords = action.payload;
    // })

    // .addCase(getRecommendations.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.recommendations = action.payload;
    // })

    // .addCase(getReviews.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.reviews = action.payload;
    // })

    // .addCase(getVideos.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.videos = action.payload;
    // })

    // .addCase(getCastCrew.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.castCrew = action.payload;
    // })

    // .addCase(getSeasonInfo.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.season = action.payload;
    // })

    // .addCase(getEpisodeInfo.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.episodeInfo = action.payload;
    // });
  },
});

export default personSlice.reducer;
