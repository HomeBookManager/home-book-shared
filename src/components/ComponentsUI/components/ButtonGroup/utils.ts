import cx from 'classnames';

// others
import { classNames } from './classNames';

// types
import { ButtonColor, ButtonVariant } from '../Button/enums';
import { ButtonGroupOrientation } from './enums';

export const composeButtonClassNames = (
  classNameButton: string,
  color: ButtonColor,
  forcedHover: boolean,
  orientation: ButtonGroupOrientation,
  variant: ButtonVariant,
): string =>
  cx(
    classNameButton,
    classNames.button.name,
    classNames.button.modificators[color],
    {
      [classNames.button.modificators.forcedHover]: forcedHover,
    },
    classNames.button.modificators[orientation],
    classNames.button.modificators[variant],
  );
