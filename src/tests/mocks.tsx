import i18n from 'i18next';
import timekeeper from 'timekeeper';
import { initReactI18next } from 'react-i18next';

/**
 * Hide dirt errors
 */
console.error = () => {};
console.warn = () => {};

/**
 * Mock Date
 */
timekeeper.freeze(new Date('2020-01-01'));

/**
 * Mock Language
 */
i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources: {
    ['en']: {
      translation: { 'routing.title.home': 'Home' },
    },
  },
});
