import { isObject, mapValues } from 'lodash';
import { useContext, useLayoutEffect, useState } from 'react';

// @home-book
import { Theme, TObject } from 'home-book-types';

// core
import { Context } from '../../core/ContextProvider/ContextProvider';

export type TUseThemeProps<T> = {
  classNamesWithTheme: T;
  forceUpdateClassNames: () => void;
  theme: Theme;
};

export const useTheme = <T,>(classNames: T): TUseThemeProps<T> => {
  const [classNamesWithTheme, setClassNamesWithTheme] = useState(classNames);
  const { theme } = useContext(Context);

  const getClassNameWithTheme = (className: string): string =>
    theme === Theme.dark ? `${className} ${className}--dark` : className;

  const getClassNamesWithTheme = (classNames: T | any): T | any =>
    mapValues(classNames, (className: TObject<string> | string) => {
      if (isObject(className)) {
        return getClassNamesWithTheme(className);
      }

      return getClassNameWithTheme(className);
    });

  const updateClassNames = (): void => {
    const classNamesWithTheme = getClassNamesWithTheme(classNames);

    setClassNamesWithTheme(classNamesWithTheme);
  };

  useLayoutEffect(() => {
    updateClassNames();
  }, [theme]);

  return {
    classNamesWithTheme,
    forceUpdateClassNames: updateClassNames,
    theme,
  };
};
