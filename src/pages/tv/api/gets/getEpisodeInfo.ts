import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getEpisodeInfo = createAsyncThunk(
  'tv/getEpisodeInfo',
  async (
    {
      path,
      seasonNumber,
      episodeNumber,
    }: { path: string; seasonNumber: string; episodeNumber: number },
    { rejectWithValue }
  ) => {
    try {
      const images = await apiClient.get(
        `tv/${path}/season/${seasonNumber}/episode/${episodeNumber}/images`
      );
      return images.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
