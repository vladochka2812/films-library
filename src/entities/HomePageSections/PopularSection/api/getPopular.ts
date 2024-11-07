import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPopular = createAsyncThunk(
  'popular/getPopular',
  async (path: string, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`${path}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
