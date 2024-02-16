import { mapValues } from 'lodash';

// types
import { ButtonColor, ButtonSize, ButtonVariant } from './enums';

export const className = 'Button';

export const getIconModificators = (property: 'fill' | 'stroke') => ({
  ...mapValues(ButtonColor, (color) => ({
    ...mapValues(
      ButtonVariant,
      (variant) =>
        `${className}__icon--apply-${property}--${variant}--${color}`,
    ),
  })),
});

export const classNames = {
  [className]: {
    name: className,
    modificators: {
      fullwidth: `${className}--full-width`,
      forcedHover: {
        ...mapValues(ButtonVariant, (variant) => ({
          ...mapValues(
            ButtonColor,
            (color) => `${className}--${variant}--${color}--forced-hover`,
          ),
        })),
      },
      ...mapValues(ButtonColor, (color) => `${className}--${color}`),
      ...mapValues(ButtonSize, (size) => `${className}--${size}`),
      ...mapValues(ButtonVariant, (variant) => `${className}--${variant}`),
    },
  },
  icon: {
    name: `${className}__icon`,
    modificators: {
      applyFill: `${className}__icon--apply-fill`,
      applyStroke: `${className}__icon--apply-stroke`,
      end: `${className}__icon--end`,
      start: `${className}__icon--start`,
      ...mapValues(ButtonSize, (size) => `${className}__icon--${size}`),
    },
  },
};
