import { createContext, FC, ReactNode, useEffect, useState } from 'react';

// @home-book
import { THEME } from 'home-book-constants';
import { Theme } from 'home-book-types';

// types
import { TContext } from './types';

// utils
import { getThemePreferences } from '../../utils/userPreferences';

export type TContextProviderProps = {
  children: ReactNode;
  theme?: Theme;
};

const defaultState = {
  setTheme: (theme: Theme) => localStorage.setItem(THEME, theme),
  theme: getThemePreferences(),
};

export const Context: React.Context<TContext> = createContext(defaultState);

export const ContextProvider: FC<TContextProviderProps> = ({
  children,
  theme: defaultTheme = undefined,
}) => {
  const [theme, setTheme] = useState(defaultTheme || defaultState.theme);

  const setThemeHandler = (theme: Theme) => {
    defaultState.setTheme(theme);
    setTheme(theme);
  };

  useEffect(() => {
    document.body.style.colorScheme = theme;
  }, [theme]);

  return (
    <Context.Provider
      value={{
        setTheme: setThemeHandler,
        theme,
      }}
    >
      {children}
    </Context.Provider>
  );
};
