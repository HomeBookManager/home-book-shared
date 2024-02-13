import {
  CSSProperties,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
} from 'react';

// types
import { IconShape } from './enums';

export type TIconBasicProps = HTMLAttributes<SVGSVGElement> & {
  className?: string;
  clickable?: boolean;
  disabled?: boolean;
  disabledFocus?: boolean;
  disabledHover?: boolean;
  e2eAttribute?: string;
  e2eValue?: number | string;
  fill?: string;
  forcedHover?: boolean;
  height?: string;
  onClick?: (event: MouseEvent) => void;
  onKeyDown?: (event: KeyboardEvent<SVGSVGElement>) => void;
  stroke?: string;
  style?: CSSProperties;
  tabIndex?: number;
  width?: string;
};

export type TIconShapes = { [key in IconShape]: string };
