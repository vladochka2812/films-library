import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPopular = createAsyncThunk(
  'tv/getPopular',
  async ({ page }: { page: number }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`tv/popular?page=${page}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
