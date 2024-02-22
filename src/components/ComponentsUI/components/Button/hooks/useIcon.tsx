import cx from 'classnames';
import { useCallback } from 'react';

// components
import Icon from '../../Icon/Icon';

// others
import { classNames } from '../classNames';

// types
import { ButtonSize } from '../enums';
import { TButtonIconArgs } from '../types';

export type TUseIcon = (data: TButtonIconArgs) => JSX.Element;

export const useIcon = (size: ButtonSize): TUseIcon =>
  useCallback(
    ({
      placement,
      src: { iconComponent, applyFill, applyStroke },
    }: TButtonIconArgs): JSX.Element => (
      <Icon
        className={cx(
          classNames.icon.name,
          {
            [classNames.icon.modificators.applyFill]: applyFill,
          },
          {
            [classNames.icon.modificators.applyStroke]: applyStroke,
          },
          classNames.icon.modificators[placement],
          classNames.icon.modificators[size],
        )}
        iconComponent={iconComponent}
        ignoreDefaultStyles
      />
    ),
    [],
  );
