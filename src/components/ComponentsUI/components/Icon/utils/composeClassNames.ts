import { kebabCase } from 'lodash';

// others
import { classNames } from '../classNames';

// types
import { IconShape, IconModificatorsKeys } from '../enums';
import { TIconComposedClassNames, TIconModificators } from '../types';

// utils
import { enumToArray } from '../../../../../utils/transform/enumToArray';

export const applyModificators = (className: string): TIconModificators =>
  enumToArray(IconModificatorsKeys).reduce(
    (obj, key) => ({
      ...obj,
      [key]: `${className}--${kebabCase(key)}`,
    }),
    {} as TIconModificators,
  );

export const composeClassNames = (
  iconShape: IconShape,
): TIconComposedClassNames => ({
  [classNames[iconShape]]: {
    modificators: applyModificators(classNames[iconShape]),
    name: classNames[iconShape],
  },
});
