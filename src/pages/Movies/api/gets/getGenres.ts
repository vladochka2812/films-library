import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getGenres = createAsyncThunk(
  'movies/getGenres',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`genre/movie/list`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
