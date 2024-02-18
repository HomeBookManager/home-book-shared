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
  e2eAttribute?: TButtonGroupPickedButtonProps['e2eAttribute'];
  e2eValue?: TButtonGroupPickedButtonProps['e2eValue'];
  forcedHoverButtonGroup: TButtonGroupPickedButtonProps['forcedHover'];
  sizeButtonGroup: TButtonGroupPickedButtonProps['size'];
  variantButtonGroup: TButtonGroupPickedButtonProps['variant'];
  style?: TButtonGroupPickedButtonProps['style'];
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
