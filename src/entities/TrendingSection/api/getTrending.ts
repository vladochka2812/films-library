import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../../features/AuthInterceptor/apiClient';

export const getTrending = createAsyncThunk(
  'trending/getTrending',
  async (path: string, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/trending/movie/${path}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
