import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSeasonInfo = createAsyncThunk(
  'tv/getSeasonInfo',
  async (
    { path, seasonNumber }: { path: string; seasonNumber: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiClient.get(`tv/${path}/season/${seasonNumber}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
