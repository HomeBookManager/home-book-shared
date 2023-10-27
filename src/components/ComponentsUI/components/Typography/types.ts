// @home-book
import { COMMON_COLORS, DARK_COLORS, LIGHT_COLORS } from 'home-book-constants';
import { TValueObj, Theme } from 'home-book-types';

// types
import { TTypographyProps } from './Typography';

export type TTypographyColorMode = {
  [Theme.dark]: TValueObj<
    typeof DARK_COLORS & Pick<typeof COMMON_COLORS, 'blue2'>
  >;
  [Theme.light]: TValueObj<
    typeof LIGHT_COLORS & Pick<typeof COMMON_COLORS, 'blue1'>
  >;
};

export type TTypographyColorsMode = {
  link: TTypographyColorMode;
  neutral1: TTypographyColorMode;
  neutral2: TTypographyColorMode;
  neutral3: TTypographyColorMode;
  neutral4: TTypographyColorMode;
  neutral5: TTypographyColorMode;
};

export type TTypographyColor = TTypographyColorMode | string;

export type TOmittedTypographyProps = Omit<TTypographyProps, 'fontType'>;
