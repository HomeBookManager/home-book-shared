// @home-book
import { TClassNameWithModificator, TObject } from 'home-book-types';

// hooks
import { TUseThemeProps, useTheme } from '../../../../../hooks';

// others
import { classNames } from '../classNames';

// types
import { IconShape } from '../enums';

// utils
import { applyModificators } from '../utils/applyModificators';

export type TUseClassNames = TUseThemeProps<TObject<TClassNameWithModificator>>;

export const useClassNames = (iconShape: IconShape): TUseClassNames => {
  const composedClassNames = {
    [classNames[iconShape]]: {
      modificators: applyModificators(classNames[iconShape]),
      name: classNames[iconShape],
    },
  };

  return useTheme(composedClassNames);
};
