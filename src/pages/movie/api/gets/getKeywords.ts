import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getKeywords = createAsyncThunk(
  'movie/getKeywords',
  async ({ path }: { path: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`movie/${path}/keywords`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
