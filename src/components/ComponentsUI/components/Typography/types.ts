// @home-book
import {
  COMMON_COLORS,
  DARK_COLORS,
  FORM_COLORS,
  LIGHT_COLORS,
} from 'home-book-constants';
import { TValueObj, Theme } from 'home-book-types';

// types
import { TTypographyProps } from './Typography';

export type TTypographyColor = TValueObj<
  typeof COMMON_COLORS & typeof FORM_COLORS
>;

export type TTypographyColorMode = {
  [Theme.dark]: TValueObj<typeof DARK_COLORS>;
  [Theme.light]: TValueObj<typeof LIGHT_COLORS>;
};

export type TOmittedTypographyProps = Omit<TTypographyProps, 'fontType'>;
