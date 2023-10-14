// @home-book
import { Theme } from 'home-book-types';

export type TContext = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
