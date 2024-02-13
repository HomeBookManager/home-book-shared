import { useContext } from 'react';

// @home-book
import { Theme } from 'home-book-types';

// components
import Icon from '../../../components/ComponentsUI/components/Icon/Icon';
import {
  IconLeftOutlined,
  IconRightOutlined,
} from '../../../components/ComponentsUI/components/Icon/components';

// core
import { Context } from '../../../core';

// others
import { className, classNames } from './classNames';

// types
import { IconShape } from '../../../components/ComponentsUI/components/Icon/enums';

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
        <div style={{ padding: '50px' }}>
          {isDarkMode ? (
            <Icon
              disabledHover
              iconComponent={IconLeftOutlined}
              iconShape={IconShape.leftOutlined}
            />
          ) : (
            <>
              <Icon
                disabledHover
                iconComponent={IconRightOutlined}
                iconShape={IconShape.rightOutlined}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
