// @home-book
import { TObject } from 'home-book-types';

// types
import { RouteName } from '../../constants/routes';

// utils
import { enumToArray } from '../../../../utils';
import { getRouteByName } from '../../utils/getRouteByName';

export const getTitlesTranslationKeys = (): TObject<string> =>
  enumToArray(RouteName).reduce(
    (obj, key) => ({
      ...obj,
      [getRouteByName(RouteName[key])]: `routing.title.${key}`,
    }),
    {},
  );
