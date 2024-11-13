import { languages } from '@/assets/locales/model/model';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const lang =
      languages[localStorage.getItem('language') as keyof typeof languages];
      
    config.params = {
      ...config.params,
      api_key: import.meta.env.VITE_API_KEY,
      language: lang,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
