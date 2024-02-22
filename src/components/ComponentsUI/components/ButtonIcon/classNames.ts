import { mapValues } from 'lodash';

// types
import { ButtonSize } from '../Button/enums';

export const className = 'ButtonIcon';

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      forcedHover: `${className}--forced-hover`,
      ...mapValues(ButtonSize, (size) => `${className}--${size}`),
    },
  },
  icon: {
    name: `${className}__icon`,
    modificators: {
      ...mapValues(ButtonSize, (size) => `${className}__icon--${size}`),
    },
  },
  circlePulse: `${className}__circle-pulse`,
};
