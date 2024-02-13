// @home-book
import { TObject } from 'home-book-types';

export const applyModificators = (className: string): TObject<string> => ({
  clickable: `${className}--clickable`,
  disabled: `${className}--disabled`,
  disabledHover: `${className}--disabled-hover`,
  forcedHover: `${className}--forced-hover`,
  selected: `${className}--selected`,
});
