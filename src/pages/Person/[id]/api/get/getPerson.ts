import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPerson = createAsyncThunk(
  'person/getPerson',
  async ({ path }: { path: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(`person/${path}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
