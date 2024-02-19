import { useContext } from 'react';

// @home-book
import { Theme } from 'home-book-types';

// components
import Button from '../../../components/ComponentsUI/components/Button/Button';
import Icon from '../../../components/ComponentsUI/components/Icon/Icon';
import Icons from '../../../components/ComponentsUI/components/Icon/components';

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
  ButtonSize,
  ButtonVariant,
} from '../../../components/ComponentsUI/components/Button/enums';
import ButtonGroup from '../../../components/ComponentsUI/components/ButtonGroup/ButtonGroup';
import { BrowserRouter, Link } from 'react-router-dom';
import Routing from '../../../core/Routing/Routing';
import AppHelmet from '../../../components/AppHelmet/AppHelmet';

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
              iconComponent={Icons.IconLeftOutlined}
              iconShape={IconShape.leftOutlined}
            />
          ) : (
            <>
              <Icon
                iconComponent={Icons.IconRightOutlined}
                iconShape={IconShape.rightOutlined}
              />
            </>
          )}
        </div>

        <div style={{ padding: '50px' }}>
          <Button
            fullWidth
            color={ButtonColor.success}
            endIcon={{
              applyFill: true,
              iconComponent: Icons.IconLeftOutlined,
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
              iconComponent: Icons.IconLeftOutlined,
              iconShape: IconShape.downOutlined,
            }}
            size={ButtonSize.large}
          >
            Button
          </Button>
          <br />
          <Button color={ButtonColor.success} variant={ButtonVariant.outlined}>
            Button
          </Button>
        </div>
        <div style={{ padding: '50px' }}>
          <ButtonGroup>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </ButtonGroup>
        </div>
      </div>

      <BrowserRouter>
        <AppHelmet />
        <Routing />
      </BrowserRouter>
    </div>
  );
};

export default App;
