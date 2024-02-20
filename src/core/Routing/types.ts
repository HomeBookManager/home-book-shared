import { TObject } from 'home-book-types';
import {
  ComponentClass,
  ComponentType,
  FunctionComponent,
  LazyExoticComponent,
  ReactElement,
} from 'react';
import { RouteProps } from 'react-router';

export type TProtectedRouteProps = {
  guards?: Array<TGuard>;
  name: string;
} & RouteProps;

export type TGuard = {
  guardCheck: () => boolean;
  renderFallback: (
    routeProps: TProtectedRouteProps,
  ) => JSX.Element | ReactElement;
  translationKey: string;
};

export type TComponent =
  | ComponentType<{}>
  | LazyExoticComponent<FunctionComponent>
  | LazyExoticComponent<ComponentClass<{}, unknown>>
  | undefined;

export type TAppRouteData = {
  Component?: TComponent;
  guards?: Array<TGuard>;
  name: string;
  path?: string;
};

export type TAppRoutesData = Array<TAppRouteData | TAppRouteData['name']>;

export type TRoutes = TObject<string>;
