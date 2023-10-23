// others
import { DATA_TEST_PREFIX } from './constants';

// types
import { E2EAttribute } from './enums';

export const getDataTestAttribute = (type?: E2EAttribute | string): string =>
  `${DATA_TEST_PREFIX}-${type}`;
