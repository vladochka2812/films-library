import { apiClient } from '@/features/AuthInterceptor/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFiltered = createAsyncThunk(
  'movies/getFiltered',
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
      let link = `discover/movie?page=${page}`;
      link += sortBy && `&sort_by=${sortBy}`;
      link += startDate ? `&release_date.gte=${startDate}` : '';
      link += endDate ? `&release_date.lte=${endDate}` : '';
      link += genres ? `&with_genres=${genres}` : '';

      link += voteCountGte ? `&vote_count.gte=${voteCountGte}` : '';
      link += voteCountLte ? `&vote_count.lte=${voteCountLte}` : '';

      link += voteAverageGte ? `&vote_average.gte=${voteAverageGte}` : '';
      link += voteAverageLte ? `&vote_average.lte=${voteAverageLte}` : '';

      link += runtimeGte ? `&with_runtime.gte=${runtimeGte}` : '';
      link += runtimeLte ? `&with_runtime.lte=${runtimeLte}` : '';

      link += keywords ? `&with_keywords=${keywords}` : '';

      const response = await apiClient.get(link);

      return response.data;
    } catch (error) {
      return rejectWithValue((error as string) || 'Something went wrong');
    }
  }
);
