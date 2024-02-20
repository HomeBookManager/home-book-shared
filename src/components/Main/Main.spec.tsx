import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';

// components
import Main from './Main';

// mocks
import { appRoutesData, routes } from '../../tests/mock/routing';

describe('Main snapshots', () => {
  it('should render Main', async () => {
    // mock
    const notFoundPage = <>Not Found Page</>;

    // before
    const { asFragment } = render(
      <HelmetProvider>
        <Main
          appRoutesData={appRoutesData}
          notFoundPage={notFoundPage}
          routes={routes}
        />
      </HelmetProvider>,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
