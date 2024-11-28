import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCredits = createAsyncThunk(
  'person/getCredits',
  async ({ path }: { path: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`person/${path}/combined_credits`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
