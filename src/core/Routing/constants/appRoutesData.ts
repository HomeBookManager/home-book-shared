// components
import LoginPage from '../../../sample/components/LoginPage/LoginPage';
import RegisterPage from '../../../sample/components/RegisterPage/RegisterPage';

// types
import { RouteName } from './routes';
import { TAppRoutesData } from '../types';

export const APP_ROUTES_DATA: TAppRoutesData = [
  {
    Component: LoginPage,
    name: RouteName.login,
  },
  {
    Component: RegisterPage,
    name: RouteName.register,
  },
];
