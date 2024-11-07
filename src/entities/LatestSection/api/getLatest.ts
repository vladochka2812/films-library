import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../../features/AuthInterceptor/apiClient';

export const getLatest = createAsyncThunk(
  'latest/geLatest',
  async (path: string, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`/movie/${path}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
