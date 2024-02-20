import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';

// components
import App from './App';

// mocks
import { appRoutesData, routes } from '../../tests/mock/routing';

describe('App snapshots', () => {
  it('should render Main', async () => {
    // mock
    const notFoundPage = <>Not Found Page</>;

    // before
    const { asFragment } = render(
      <HelmetProvider>
        <App
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
