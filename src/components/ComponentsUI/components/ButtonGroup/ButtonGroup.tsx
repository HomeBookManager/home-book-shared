import cx from 'classnames';
import {
  HTMLAttributes,
  ReactElement,
  Ref,
  createContext,
  forwardRef,
} from 'react';

// components
import E2EDataAttribute from '../../../E2EDataAttributes/E2EDataAttribute';

// others
import { className as classNameButtonGroup, classNames } from './classNames';

// styles
import './styles/button-group.scss';

// types
import { ButtonColor, ButtonSize, ButtonVariant } from '../Button/enums';
import { ButtonGroupOrientation } from './enums';
import { E2EAttribute } from '../../../E2EDataAttributes/enums';
import { TButtonGroupContext, TButtonGroupPickedButtonProps } from './types';
import { TButtonProps } from '../Button/Button';

// utils
import { composeButtonClassNames } from './utils';

export const ButtonGroupContext = createContext<TButtonGroupContext>(undefined);

export type TButtonGroupProps = HTMLAttributes<HTMLDivElement> &
  TButtonGroupPickedButtonProps & {
    children: ReactElement<TButtonProps> | Array<ReactElement<TButtonProps>>;
    className?: string;
    classNameButton?: string;
    orientation?: ButtonGroupOrientation;
    ref?: Ref<HTMLDivElement>;
  };

export const ButtonGroup = forwardRef<HTMLDivElement, TButtonGroupProps>(
  (
    {
      children,
      className = '',
      classNameButton = '',
      color = ButtonColor.primary,
      disabled = false,
      disabledRippleEffect = false,
      e2eAttribute = E2EAttribute.buttonGroup,
      e2eValue = '',
      forcedHover = false,
      orientation = ButtonGroupOrientation.horizontal,
      size = ButtonSize.medium,
      style = {},
      type = 'button',
      variant = ButtonVariant.contained,
      ...restProps
    },
    ref,
  ) => {
    const buttonClassNames = composeButtonClassNames(
      classNameButton,
      color,
      forcedHover,
      orientation,
      variant,
    );

    return (
      <E2EDataAttribute type={e2eAttribute} value={e2eValue}>
        <div
          className={cx(
            className,
            classNames[classNameButtonGroup].name,
            classNames[classNameButtonGroup].modificators[orientation],
          )}
          ref={ref}
          style={style}
          {...restProps}
        >
          <ButtonGroupContext.Provider
            value={{
              className: buttonClassNames,
              color,
              disabled,
              disabledRippleEffect,
              forcedHover,
              size,
              type,
              variant,
            }}
          >
            {children}
          </ButtonGroupContext.Provider>
        </div>
      </E2EDataAttribute>
    );
  },
);

export default ButtonGroup;
