// types
import { TAppRouteData, TProtectedRouteProps, TRoutes } from '../types';

const getRoutePath = (
  { name }: TAppRouteData,
  routes: TRoutes,
): TAppRouteData['path'] => routes[name];

export const getRouteProps = (
  routeData: TAppRouteData,
  routes: TRoutes,
): TProtectedRouteProps => ({
  component: routeData.Component,
  exact: true,
  guards: routeData.guards || [],
  name: routeData.name,
  path: getRoutePath(routeData, routes),
});
