import { HTMLAttributes } from 'react';

// @home-book
import { TClassNameWithModificator, TObject } from 'home-book-types';

// types
import { IconShape, IconModificatorsKeys } from './enums';

export type TIconBasicProps = HTMLAttributes<SVGSVGElement> & {
  className?: string;
  classNamePath?: string;
  clickable?: boolean;
  disabled?: boolean;
  disabledFocus?: boolean;
  disabledHover?: boolean;
  e2eAttribute?: string;
  e2eValue?: number | string;
  fill?: string;
  forcedHover?: boolean;
  height?: string;
  stroke?: string;
  width?: string;
};

export type TIconModificators = { [key in IconModificatorsKeys]: string };

export type TIconComposedClassNames = TObject<
  Omit<TClassNameWithModificator, 'modificators'> & {
    modificators: TIconModificators;
  }
>;

export type TIconShapes = { [key in IconShape]: string };
