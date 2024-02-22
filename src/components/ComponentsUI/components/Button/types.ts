// types
import { TIconProps } from '../Icon/Icon';

export type TButtonIcon =
  | (Pick<TIconProps, 'iconComponent'> & {
      applyFill?: boolean;
      applyStroke?: boolean;
    })
  | null;

export type TButtonIconArgs = {
  placement: 'start' | 'end';
  src: TButtonIcon;
};
