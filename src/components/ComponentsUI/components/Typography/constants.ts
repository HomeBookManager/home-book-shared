// @home-book
import { COMMON_COLORS, DARK_COLORS, LIGHT_COLORS } from 'home-book-constants';
import { Theme } from 'home-book-types';

// types
import { TTypographyColorsMode } from './types';

export const TYPOGRAPHY_COLORS_MODE: TTypographyColorsMode = {
  link: {
    [Theme.dark]: COMMON_COLORS.blue2,
    [Theme.light]: COMMON_COLORS.blue1,
  },
  neutral1: {
    [Theme.dark]: DARK_COLORS.neutral1,
    [Theme.light]: LIGHT_COLORS.neutral1,
  },
  neutral2: {
    [Theme.dark]: DARK_COLORS.neutral2,
    [Theme.light]: LIGHT_COLORS.neutral2,
  },
  neutral3: {
    [Theme.dark]: DARK_COLORS.neutral3,
    [Theme.light]: LIGHT_COLORS.neutral3,
  },
  neutral4: {
    [Theme.dark]: DARK_COLORS.neutral4,
    [Theme.light]: LIGHT_COLORS.neutral4,
  },
  neutral5: {
    [Theme.dark]: DARK_COLORS.neutral5,
    [Theme.light]: LIGHT_COLORS.neutral5,
  },
} as const;
