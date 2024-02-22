import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';

// components
import Link from './Link';

// mocks
import { RouteName, routes } from '../../../../tests/mocks/routing';

// utils
import { getRouteByName } from '../../utils/getRouteByName';

const history = createMemoryHistory({
  initialEntries: [getRouteByName(RouteName.home, routes)],
});

describe('Link snapshots', () => {
  it('should render as dynamic link', () => {
    // before
    const { asFragment } = render(
      <Router history={history}>
        <Link href="/">Link</Link>
      </Router>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as static link', () => {
    // before
    const { asFragment } = render(
      <Router history={history}>
        <Link href="https://">Link</Link>
      </Router>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without children', () => {
    // before
    const { asFragment } = render(
      <Router history={history}>
        <Link href="https://" />
      </Router>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });

  it('should return with blank text', () => {
    // before
    const { asFragment } = render(
      <Router history={history}>
        <Link target="_blank">Link</Link>
      </Router>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
