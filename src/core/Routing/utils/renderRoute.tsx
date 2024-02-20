// components
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

// types
import { TAppRouteData, TRoutes } from '../types';

// utils
import { getRouteProps } from './getRouteProps';

export const renderRoute = (
  routeDataArg: TAppRouteData | TAppRouteData['name'],
  routes: TRoutes,
): JSX.Element => {
  const routeData: TAppRouteData =
    typeof routeDataArg === 'string' ? { name: routeDataArg } : routeDataArg;

  const routeProps = getRouteProps(routeData, routes);

  return <ProtectedRoute {...routeProps} key={routeData.name} />;
};
