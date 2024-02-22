import { kebabCase } from 'lodash';

// types
import { IconModificatorsKeys } from '../enums';
import { TIconComposedClassNames, TIconModificators } from '../types';

// utils
import { enumToArray } from '../../../../../utils/transform/enumToArray';

export const applyModificators = (className: string): TIconModificators =>
  enumToArray<string>(IconModificatorsKeys).reduce(
    (obj, key) => ({
      ...obj,
      [key]: `${className}--${kebabCase(key)}`,
    }),
    {} as TIconModificators,
  );

export const composeClassNames = (
  componentName: string,
): TIconComposedClassNames => ({
  [componentName]: {
    modificators: applyModificators(componentName),
    name: componentName,
  },
});
