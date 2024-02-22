// mocks
import { RouteName, routes } from '../../../../tests/mocks/routing';

// utils
import { getRouteByName } from '../getRouteByName';

describe('getRouteByName', () => {
  it('should return correct route', () => {
    // before
    const result = getRouteByName(RouteName.home, routes);

    // result
    expect(result).toBe('/');
  });
});
