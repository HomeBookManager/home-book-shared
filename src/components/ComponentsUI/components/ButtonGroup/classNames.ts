import { mapValues } from 'lodash';

// types
import { ButtonColor, ButtonVariant } from '../Button/enums';
import { ButtonGroupOrientation } from './enums';

export const className = 'ButtonGroup';

export const classNames = {
  [className]: className,
  button: {
    name: `${className}__button`,
    modificators: {
      forcedHover: `${className}__button--forced-hover`,
      ...mapValues(ButtonColor, (color) => `${className}__button--${color}`),
      ...mapValues(
        ButtonGroupOrientation,
        (orientation) => `${className}__button--${orientation}`,
      ),
      ...mapValues(
        ButtonVariant,
        (variant) => `${className}__button--${variant}`,
      ),
    },
  },
};
