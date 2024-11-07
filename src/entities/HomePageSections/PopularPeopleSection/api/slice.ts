import { createSlice } from '@reduxjs/toolkit';
import { PersonsResponse } from '@/shared/PersonCard/model/model';
import { getPopularPeople } from './getPopularPeople';

const initialState = {
  popularPeopleItems: {} as PersonsResponse,
  loading: false,
  error: null,
};

const popularSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopularPeople.fulfilled, (state, action) => {
        state.loading = false;
        state.popularPeopleItems = action.payload;
      })
      .addCase(getPopularPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as null;
      });
  },
});

export default popularSlice.reducer;
