// types
import { TAppRoutesData, TRoutes } from '../../core/Routing/types';

export enum RouteName {
  home = 'home',
}

export const routes: TRoutes = {
  home: '/',
};

export const appRoutesData: TAppRoutesData = [
  {
    Component: () => <>Component</>,
    name: RouteName.home,
  },
];
