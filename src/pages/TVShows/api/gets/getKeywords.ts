import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getKeywords = createAsyncThunk(
  'tv/getKeywords',
  async ({ query }: { query: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`search/keyword?query=${query}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
