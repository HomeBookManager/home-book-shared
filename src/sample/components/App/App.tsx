/// [imports]
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

// styles
import './app.scss';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '../../../components/ComponentsUI/components/Button/enums';
import ButtonGroup from '../../../components/ComponentsUI/components/ButtonGroup/ButtonGroup';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import { TAppRoutesData, TRoutes } from '../../../core/Routing/types';
import Main from '../../../components/App/App';
import { H1, TYPOGRAPHY_COLORS_MODE } from '../../../components';
import ButtonIcon from '../../../components/ComponentsUI/components/ButtonIcon/ButtonIcon';
import IconRightOutlined from '../../../components/ComponentsUI/components/Icon/components/IconRightOutlined';
import { useDispatch } from 'react-redux';

enum RouteName {
  login = 'login',
  register = 'register',
}

const routes: TRoutes = {
  [RouteName.login]: '/login',
  [RouteName.register]: '/register',
};

const APP_ROUTES_DATA: TAppRoutesData = [
  {
    Component: LoginPage,
    name: RouteName.login,
  },
  {
    Component: RegisterPage,
    name: RouteName.register,
  },
];

const data = {
  router: {
    location: {
      pathname: '/strategy-editor',
      search: '?strategyId=64fb8a41580d9498ac3f8d21',
      hash: '',
      key: 'msmi5g',
      query: {
        strategyId: '64fb8a41580d9498ac3f8d21',
      },
    },
    action: 'PUSH',
  },
};

export const App = () => {
  const { theme, setTheme } = useContext(Context);
  const isDarkMode = theme === Theme.dark;

  return (
    <div className={classNames[className]}>
      <div className={classNames.navigation}>
        <H1 color={TYPOGRAPHY_COLORS_MODE.neutral4}>H1</H1>
        <button
          className={classNames.buttonMode}
          onClick={() => setTheme(isDarkMode ? Theme.light : Theme.dark)}
        >
          Current mode: {theme}
        </button>
        <div style={{ padding: '50px' }}>
          {isDarkMode ? (
            <Icon iconComponent={Icons.IconLeftOutlined} />
          ) : (
            <>
              <Icon iconComponent={Icons.IconRightOutlined} />
            </>
          )}
        </div>

        <div
          style={{ display: 'flex', alignItems: 'center', columnGap: '15px' }}
        >
          <ButtonIcon
            disabled
            size={ButtonSize.small}
            iconComponent={IconRightOutlined}
          />
          <ButtonIcon iconComponent={IconRightOutlined} />
          <ButtonIcon
            size={ButtonSize.large}
            iconComponent={IconRightOutlined}
          />
        </div>
        <div style={{ padding: '50px' }}>
          <Button
            fullWidth
            color={ButtonColor.success}
            endIcon={{
              applyFill: true,
              iconComponent: Icons.IconLeftOutlined,
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

      <Main
        routes={routes}
        notFoundPage={<>Not Found Page</>}
        appRoutesData={APP_ROUTES_DATA}
      />
    </div>
  );
};

export default App;
