import { languages } from '@/assets/locales/model/model';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const excludedPaths = ['/images', '/videos', '/reviews'];

apiClient.interceptors.request.use(
  (config) => {
    const lang =
      languages[localStorage.getItem('language') as keyof typeof languages];
    const shouldExcludeLanguage = excludedPaths.some((path) =>
      config.url?.includes(path)
    );

    config.params = {
      ...config.params,
      api_key: import.meta.env.VITE_API_KEY,
      ...(shouldExcludeLanguage ? {} : { language: lang }),
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
