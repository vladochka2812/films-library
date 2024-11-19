import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getVideos = createAsyncThunk(
  'movie/getVideos',
  async ({ path }: { path: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`movie/${path}/videos`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
