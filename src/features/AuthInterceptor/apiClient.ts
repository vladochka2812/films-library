import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      api_key: import.meta.env.VITE_API_KEY,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
