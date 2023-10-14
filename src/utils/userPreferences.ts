// @home-book
import { THEME } from 'home-book-constants';
import { Theme } from 'home-book-types';

export const getThemePreferences = (): Theme => {
  const theme = localStorage.getItem(THEME) as Theme;

  if (theme) {
    return theme;
  }

  return window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.dark
    : Theme.light;
};
