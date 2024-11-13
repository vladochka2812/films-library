import { createSlice } from '@reduxjs/toolkit';
import { getMovie } from './getMovie';
import { MovieType } from '../model/model';

const initialState = {
  movieItem: {} as MovieType,
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
      });
  },
});

export default movieSlice.reducer;
