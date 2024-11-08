import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'ua',
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: (lng: string) => `/api/translate?lang=${lng}`,
  },
});

export default i18n;
