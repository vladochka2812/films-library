import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en/en.json';
import ua from './assets/locales/ua/ua.json';

const storedLang = localStorage.getItem('language') || 'EN';

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: en,
    },
    UA: {
      translation: ua,
    },
  },
  lng: storedLang,
  fallbackLng: 'EN',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
