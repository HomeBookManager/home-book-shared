// types
import { TButtonProps } from '../Button/Button';

export type TButtonGroupPickedButtonProps = Pick<
  TButtonProps,
  | 'className'
  | 'color'
  | 'disabled'
  | 'disabledRippleEffect'
  | 'e2eAttribute'
  | 'e2eValue'
  | 'forcedHover'
  | 'size'
  | 'style'
  | 'type'
  | 'variant'
>;

export type TButtonGroupContext = TButtonGroupPickedButtonProps | undefined;
