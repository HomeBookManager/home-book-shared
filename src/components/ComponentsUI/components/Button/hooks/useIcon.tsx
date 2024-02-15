import cx from 'classnames';
import { useCallback } from 'react';

// components
import Icon from '../../Icon/Icon';

// others
import { classNames } from '../classNames';

// types
import { ButtonColor, ButtonSize, ButtonVariant } from '../enums';
import { TButtonIconArgs } from '../types';

export type TUseIcon = (data: TButtonIconArgs) => JSX.Element;

export const useIcon = (
  color: ButtonColor,
  size: ButtonSize,
  variant: ButtonVariant,
): TUseIcon =>
  useCallback(
    ({
      placement,
      src: { iconComponent, iconShape, applyFill, applyStroke },
    }: TButtonIconArgs): JSX.Element => (
      <Icon
        className={cx(
          classNames.icon.name,
          {
            [classNames.icon.modificators.applyFill[color][variant]]: applyFill,
          },
          {
            [classNames.icon.modificators.applyStroke[color][variant]]:
              applyStroke,
          },
          classNames.icon.modificators[placement],
          classNames.icon.modificators[size],
        )}
        iconComponent={iconComponent}
        iconShape={iconShape}
        ignoreDefaultStyles
      />
    ),
    [],
  );
