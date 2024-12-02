import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTopRated = createAsyncThunk(
  'tv/getTopRated',
  async ({ page }: { page: number }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`tv/top_rated?page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
