import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getReviews = createAsyncThunk(
  'movie/getReviews',
  async (
    { path, page }: { path: string; page?: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiClient.get(
        `movie/${path}/reviews?page=${page || 1}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
