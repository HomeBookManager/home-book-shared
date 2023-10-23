import React, { Children, FC, ReactElement } from 'react';

// types
import { E2EAttribute } from './enums';
import { E2EValue } from './types';

// utils
import { getDataTestAttribute } from './utils';

export type TProps = {
  children: ReactElement<HTMLElement>;
  type?: E2EAttribute | string;
  value?: E2EValue;
};

const E2EDataAttribute: FC<TProps> = ({ children, type = '', value = '' }) => {
  const childrenOnly = Children.only(children);

  if (!type && !value) {
    return childrenOnly;
  }

  return React.cloneElement(childrenOnly, {
    [getDataTestAttribute(type)]: value,
  });
};

export default E2EDataAttribute;
