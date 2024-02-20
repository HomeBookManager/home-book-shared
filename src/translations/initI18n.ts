import i18n, { i18n as i18nInterface } from 'i18next';
import { initReactI18next } from 'react-i18next';

// @home-book
import { TObject } from 'home-book-types';

// others
import { DEFAULT_LANGUAGE } from './constants';

export const initI18n = async (
  language: string,
  resource: TObject<string>,
): Promise<{ i18n: i18nInterface }> => {
  const commonResource = await import(`./languages/${language}.json`);

  i18n.use(initReactI18next).init({
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    lng: language,
    resources: {
      [language]: {
        translation: {
          ...commonResource,
          ...resource,
        },
      },
    },
  });

  return { i18n };
};
