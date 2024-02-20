import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

// components
import Component from './mock/Component';

// core
import { renderRoute } from '../renderRoute';

// mocks
import { RouteName, routes } from '../../../../tests/mock/routing';

// types
import { TAppRouteData } from '../../types';

describe('renderRoute snaphots', () => {
  it('should render renderRoute', () => {
    // mock
    const routeData: TAppRouteData = {
      Component: Component,
      name: RouteName.home,
    };

    // before
    const { asFragment } = render(
      <Router>{renderRoute(routeData, routes)}</Router>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render when routeDataArg is string', () => {
    // mock
    const routeData: TAppRouteData['name'] = RouteName.home;

    // before
    const { asFragment } = render(
      <Router>{renderRoute(routeData, routes)}</Router>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
