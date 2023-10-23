// others
import { DATA_TEST_PREFIX } from '../constants';

// types
import { E2EAttribute } from '../enums';

// utils
import { getDataTestAttribute } from '../utils';

describe('getDataTestAttribute', () => {
  it('should return composed attribute', () => {
    // before
    const result = getDataTestAttribute(E2EAttribute.test);

    // result
    expect(result).toBe(`${DATA_TEST_PREFIX}-${E2EAttribute.test}`);
  });
});
