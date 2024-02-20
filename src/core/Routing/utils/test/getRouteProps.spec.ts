// mocks
import { RouteName, routes } from '../../../../tests/mock/routing';

// types
import { TAppRouteData, TComponent } from '../../types';

// utils
import { getRouteProps } from '../getRouteProps';

const routeData: TAppRouteData = {
  Component: null as unknown as TComponent,
  name: RouteName.home,
};

describe('getRouteProps', () => {
  it('should return correct route props', () => {
    // before
    const result = getRouteProps(routeData, routes);

    // result
    expect(result).toStrictEqual({
      component: null,
      exact: true,
      guards: [],
      name: 'home',
      path: '/',
    });
  });
});
