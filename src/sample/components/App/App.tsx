import { useContext } from 'react';

// @home-book
import { Theme } from 'home-book-types';

// core
import { Context } from '../../../core';

// otehrs
import { className, classNames } from './classNames';

// styles
import './app.scss';

export const App = () => {
  const { theme, setTheme } = useContext(Context);
  const isDarkMode = theme === Theme.dark;

  return (
    <div className={classNames[className]}>
      <div className={classNames.navigation}>
        <button
          className={classNames.buttonMode}
          onClick={() => setTheme(isDarkMode ? Theme.light : Theme.dark)}
        >
          Current mode: {theme}
        </button>
      </div>
    </div>
  );
};

export default App;
