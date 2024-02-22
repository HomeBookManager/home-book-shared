// mocks
import { RouteName, routes } from '../../../../../tests/mocks/routing';

// utils
import { getRouteByName } from '../../../utils/getRouteByName';
import { getTitlesTranslationKeys } from '../utils';

describe('getTitlesTranslationKeys', () => {
  it('should return object with keys', () => {
    // before
    const homeRouteKey = getRouteByName(RouteName.home, routes);
    const result = getTitlesTranslationKeys(routes);

    // result
    expect(result[homeRouteKey]).toBe(`routing.title.${RouteName.home}`);
  });
});
