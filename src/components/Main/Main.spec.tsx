import { render } from '@testing-library/react';

// components
import Main from './Main';

// mocks
import { appRoutesData, routes } from '../../tests/mock/routing';

jest.mock('../AppHelmet/AppHelmet', () => () => 'AppHelmet');
jest.mock('../../core/Routing/Routing', () => () => 'Routing');

describe('Main snapshots', () => {
  it('should render Main', async () => {
    // mock
    const notFoundPage = <>Not Found Page</>;

    // before
    const { asFragment } = render(
      <Main
        appRoutesData={appRoutesData}
        notFoundPage={notFoundPage}
        routes={routes}
      />,
    );

    // result
    expect(asFragment()).toMatchSnapshot();
  });
});
