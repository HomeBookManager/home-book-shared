import cx from 'classnames';
import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from 'react';

// components
import E2EDataAttribute from '../../../E2EDataAttributes/E2EDataAttribute';

// hooks
import { useButtonGroupContext } from './hooks/useButtonGroupContext';
import { useClickInteraction } from './hooks/useClickInteraction';
import { useIcon } from './hooks/useIcon';
import { useRippleEffect } from '../../../../hooks/useRippleEffect/useRippleEffect';

// others
import { className as classNameButton, classNames } from './classNames';

// styles
import './styles/button.scss';

// types
import { ButtonColor, ButtonSize, ButtonVariant } from './enums';
import { E2EAttribute } from '../../../E2EDataAttributes/enums';
import { TButtonIcon } from './types';

export type TButtonProps = Omit<
  ButtonHTMLAttributes<HTMLElement>,
  'disabled'
> & {
  children?: ReactNode;
  className?: string;
  color?: ButtonColor;
  disabled?: boolean;
  disabledRippleEffect?: boolean;
  e2eAttribute?: string;
  e2eValue?: number | string;
  endIcon?: TButtonIcon;
  forcedHover?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  ref?: Ref<HTMLButtonElement>;
  size?: ButtonSize;
  startIcon?: TButtonIcon;
  variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  (
    {
      children,
      className = '',
      color = ButtonColor.primary,
      disabled = false,
      disabledRippleEffect = false,
      endIcon = null,
      e2eAttribute = E2EAttribute.button,
      e2eValue = '',
      forcedHover = false,
      fullWidth = false,
      onClick,
      size = ButtonSize.medium,
      startIcon = null,
      type = 'button',
      variant = ButtonVariant.contained,
      ...restProps
    },
    ref,
  ) => {
    const {
      classNameButtonGroup,
      colorButtonGroup,
      disabledRippleEffectButtonGroup,
      forcedHoverButtonGroup,
      sizeButtonGroup,
      variantButtonGroup,
      ...restButtonGroupProps
    } = useButtonGroupContext();

    const Icon = useIcon(size);

    const { rippleEffect, triggerRippleEffect } = useRippleEffect(
      classNames[classNameButton].name,
    );

    const onClickHandler = useClickInteraction(
      disabledRippleEffect || disabledRippleEffectButtonGroup,
      onClick,
      triggerRippleEffect,
    );

    return (
      <E2EDataAttribute type={e2eAttribute} value={e2eValue}>
        <button
          className={cx(
            className,
            classNameButtonGroup,
            classNames[classNameButton].name,
            { [classNames[classNameButton].modificators.fullwidth]: fullWidth },
            {
              [classNames[classNameButton].modificators.forcedHover]:
                forcedHover || forcedHoverButtonGroup,
            },
            classNames[classNameButton].modificators[colorButtonGroup || color],
            classNames[classNameButton].modificators[sizeButtonGroup || size],
            classNames[classNameButton].modificators[
              variantButtonGroup || variant
            ],
          )}
          disabled={disabled}
          onClick={onClickHandler}
          ref={ref}
          type={type}
          {...restButtonGroupProps}
          {...restProps}
        >
          {startIcon && <Icon placement="start" src={startIcon} />}
          {children}
          {endIcon && <Icon placement="end" src={endIcon} />}
          {rippleEffect}
        </button>
      </E2EDataAttribute>
    );
  },
);

export default Button;
