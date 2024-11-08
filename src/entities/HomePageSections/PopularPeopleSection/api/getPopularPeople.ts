import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPopularPeople = createAsyncThunk(
  'popularPeople/getPopularPeople',
  async (
    { path, lang }: { path: string; lang: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiClient.get(`${path}?language=${lang}`);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
