import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';

// components
import ProtectedRoute from './ProtectedRoute';

// others
import { TAppRouteData } from '../../types';

const routeData: TAppRouteData = {
  Component: () => <div>Component</div>,
  guards: [
    {
      guardCheck: () => true,
      renderFallback: () => <Redirect exact from={'/'} to={'/error'} />,
      translationKey: '',
    },
  ],
  name: '/',
};

describe('ProtectedRoute snapshots', () => {
  it('should allow user on route', () => {
    // before
    const { Component, guards, name } = routeData;

    const { asFragment } = render(
      <Router>
        <ProtectedRoute component={Component} guards={guards} name={name} />
      </Router>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should allow rdner without guards', () => {
    // before
    const { Component, name } = routeData;

    const { asFragment } = render(
      <Router>
        <ProtectedRoute component={Component} name={name} />
      </Router>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not allow user on route', () => {
    // before
    const { Component, guards, name } = routeData;

    const { asFragment } = render(
      <Router>
        <ProtectedRoute
          component={Component}
          guards={[{ ...guards![0], guardCheck: () => false }]}
          name={name}
        />
      </Router>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
