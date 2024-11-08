import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTopRated = createAsyncThunk(
  'topRated/getTopRated',
  async (path: string, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`${path}/top_rated`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
