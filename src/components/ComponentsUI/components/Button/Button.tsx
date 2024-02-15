import cx from 'classnames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

// components
import E2EDataAttribute from '../../../E2EDataAttributes/E2EDataAttribute';

// hooks
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

export type TButtonProps = ButtonHTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  className?: string;
  color?: ButtonColor;
  disableRippleEffect?: boolean;
  endIcon?: TButtonIcon;
  e2eAttribute?: string;
  e2eValue?: number | string;
  forcedHover?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  size?: ButtonSize;
  startIcon?: TButtonIcon;
  variant?: ButtonVariant;
};

export const Button: FC<TButtonProps> = ({
  children,
  className = '',
  color = ButtonColor.primary,
  disableRippleEffect = false,
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
}) => {
  const Icon = useIcon(color, size, variant);

  const { rippleEffect, triggerRippleEffect } = useRippleEffect(
    classNames[classNameButton].modificators[color][variant],
  );

  const onClickHandler = useClickInteraction(
    disableRippleEffect,
    onClick,
    triggerRippleEffect,
  );

  return (
    <E2EDataAttribute type={e2eAttribute} value={e2eValue}>
      <button
        className={cx(
          classNames[classNameButton].name,
          { [classNames[classNameButton].modificators.fullwidth]: fullWidth },
          {
            [classNames[classNameButton].modificators.forcedHover[variant][
              color
            ]]: forcedHover,
          },
          classNames[classNameButton].modificators[size],
          classNames[classNameButton].modificators[variant],
          classNames[classNameButton].modificators[color][variant],
          className,
        )}
        onClick={onClickHandler}
        type={type}
        {...restProps}
      >
        {startIcon && <Icon placement="start" src={startIcon} />}
        {children}
        {endIcon && <Icon placement="end" src={endIcon} />}
        {rippleEffect}
      </button>
    </E2EDataAttribute>
  );
};

export default Button;
