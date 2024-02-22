// @home-book
import { TObject } from 'home-book-types';

// types
import { TRoutes } from '../../types';

// utils
import { enumToArray } from '../../../../utils';
import { getRouteByName } from '../../utils/getRouteByName';

export const getTitlesTranslationKeys = (routes: TRoutes): TObject<string> =>
  enumToArray<string>(routes).reduce(
    (obj, key) => ({
      ...obj,
      [getRouteByName(key, routes)]: `routing.title.${key}`,
    }),
    {},
  );
