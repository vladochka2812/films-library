import { createSlice } from '@reduxjs/toolkit';
import { TVShowType } from '../model/model';
import { getTV } from './getTV';

const initialState = {
  tvItem: {} as TVShowType,
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
      });
  },
});

export default tvSlice.reducer;
