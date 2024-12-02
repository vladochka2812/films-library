import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUpcoming = createAsyncThunk(
  'movies/getUpcoming',
  async ({ page }: { page: number }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`movie/upcoming?page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
