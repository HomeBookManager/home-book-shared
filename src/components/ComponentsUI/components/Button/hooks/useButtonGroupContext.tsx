import { useContext } from 'react';

// core
import { ButtonGroupContext } from '../../ButtonGroup/ButtonGroup';

// types
import { TButtonGroupPickedButtonProps } from '../../ButtonGroup/types';

type TUseButtonGroupContext = {
  classNameButtonGroup: TButtonGroupPickedButtonProps['className'];
  colorButtonGroup: TButtonGroupPickedButtonProps['color'];
  disabled?: TButtonGroupPickedButtonProps['disabled'];
  disabledRippleEffectButtonGroup: TButtonGroupPickedButtonProps['disabledRippleEffect'];
  forcedHoverButtonGroup: TButtonGroupPickedButtonProps['forcedHover'];
  sizeButtonGroup: TButtonGroupPickedButtonProps['size'];
  variantButtonGroup: TButtonGroupPickedButtonProps['variant'];
  type?: TButtonGroupPickedButtonProps['type'];
};

export const useButtonGroupContext = (): TUseButtonGroupContext => {
  const {
    className,
    color,
    disabledRippleEffect,
    forcedHover,
    size,
    variant,
    ...restButtonGroupProps
  } = useContext(ButtonGroupContext) || {};

  return {
    classNameButtonGroup: className,
    colorButtonGroup: color,
    disabledRippleEffectButtonGroup: disabledRippleEffect,
    forcedHoverButtonGroup: forcedHover,
    sizeButtonGroup: size,
    variantButtonGroup: variant,
    ...restButtonGroupProps,
  };
};
