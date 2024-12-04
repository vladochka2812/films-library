import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFiltered = createAsyncThunk(
  'tv/getFiltered',
  async (
    {
      page,
      sortBy,
      startDate,
      endDate,
      genres,
      keywords,
      voteCountGte,
      voteCountLte,
      voteAverageGte,
      voteAverageLte,
      runtimeGte,
      runtimeLte,
    }: {
      page: number;
      sortBy?: string;
      startDate?: string;
      endDate?: string;
      genres?: number[];
      keywords?: number[];
      voteCountGte?: number;
      voteCountLte?: number;
      voteAverageGte?: number;
      voteAverageLte?: number;
      runtimeGte?: number;
      runtimeLte?: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const params = new URLSearchParams();

      params.append('page', page.toString());
      if (sortBy) params.append('sort_by', sortBy);
      if (startDate) params.append('first_air_date.gte', startDate);
      if (endDate) params.append('first_air_date.lte', endDate);
      if (genres) params.append('with_genres', genres.join(','));
      if (keywords) params.append('with_keywords', keywords.join(','));
      if (voteCountGte)
        params.append('vote_count.gte', voteCountGte.toString());
      if (voteCountLte)
        params.append('vote_count.lte', voteCountLte.toString());
      if (voteAverageGte)
        params.append('vote_average.gte', voteAverageGte.toString());
      if (voteAverageLte)
        params.append('vote_average.lte', voteAverageLte.toString());
      if (runtimeGte) params.append('with_runtime.gte', runtimeGte.toString());
      if (runtimeLte) params.append('with_runtime.lte', runtimeLte.toString());

      const response = await apiClient.get(`discover/tv?${params.toString()}`);

      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
