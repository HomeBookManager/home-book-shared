import { useContext } from 'react';

// @home-book
import { Theme } from 'home-book-types';

// components
import Button from '../../../components/ComponentsUI/components/Button/Button';
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
import {
  ButtonColor,
  ButtonVariant,
} from '../../../components/ComponentsUI/components/Button/enums';

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
              iconComponent={IconLeftOutlined}
              iconShape={IconShape.leftOutlined}
            />
          ) : (
            <>
              <Icon
                iconComponent={IconRightOutlined}
                iconShape={IconShape.rightOutlined}
              />
            </>
          )}
        </div>

        <div style={{ padding: '50px' }}>
          <Button
            color={ButtonColor.success}
            endIcon={{
              applyFill: true,
              iconComponent: IconLeftOutlined,
              iconShape: IconShape.downOutlined,
            }}
          >
            Button
          </Button>
          <br />
          <Button
            color={ButtonColor.success}
            variant={ButtonVariant.outlined}
            endIcon={{
              applyFill: true,
              iconComponent: IconLeftOutlined,
              iconShape: IconShape.downOutlined,
            }}
          >
            Button
          </Button>
          <br />
          <Button color={ButtonColor.success} variant={ButtonVariant.outlined}>
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
