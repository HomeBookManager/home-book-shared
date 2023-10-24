import classnames from 'classnames';
import { camelCase } from 'lodash';
import { createElement, FC, HTMLAttributes, ReactNode } from 'react';

// hooks
import { useTheme } from '../../../../hooks';

// others
import { className as classNameTypography, classNames } from './classNames';
import { DEFAULT_COLOR_MODE } from './constants';

// styles
import './typography.scss';

// types
import { TTypographyColor, TTypographyColorMode } from './types';
import { E2EAttribute } from '../../../E2EDataAttributes/enums';
import {
  TypographyFontStyle,
  TypographyFontWeight,
  TypographyFontType,
} from './enums';

// utils
import { getDataTestAttribute } from '../../../E2EDataAttributes/utils';

export type TTypographyProps = {
  children?: ReactNode;
  color?: TTypographyColor;
  colorMode?: TTypographyColorMode;
  e2eAttribute?: string;
  e2eValue?: number | string;
  fontStyle?: TypographyFontStyle;
  fontType?: TypographyFontType;
  fontWeight?: TypographyFontWeight;
  innerHtml?: string;
  withoutMargin?: boolean;
} & HTMLAttributes<HTMLElement>;

export const Typography: FC<TTypographyProps> = ({
  children,
  className = '',
  color = '',
  colorMode = DEFAULT_COLOR_MODE,
  e2eAttribute = E2EAttribute.text,
  e2eValue = '',
  fontStyle = TypographyFontStyle.normal,
  fontType = TypographyFontType.p,
  fontWeight = TypographyFontWeight.regular,
  innerHtml = '',
  withoutMargin = true,
  style = {},
  ...restProps
}) => {
  const { classNamesWithTheme, theme } = useTheme(classNames);

  if (!children && !innerHtml) {
    return null;
  }

  return createElement(
    fontType,
    {
      ...restProps,
      ...(innerHtml ? { dangerouslySetInnerHTML: { __html: innerHtml } } : {}),
      [getDataTestAttribute(e2eAttribute)]: e2eValue,
      className: classnames(
        classNamesWithTheme[classNameTypography].name,
        className,
        classNamesWithTheme[classNameTypography].modificators[
          camelCase(fontWeight) as keyof typeof TypographyFontWeight
        ],
        classNamesWithTheme[classNameTypography].modificators[fontStyle],
        classNamesWithTheme[classNameTypography].modificators[fontType],
        {
          [classNamesWithTheme[classNameTypography].modificators.withoutMargin]:
            withoutMargin,
        },
      ),
      style: {
        ...style,
        color: color || colorMode[theme],
      },
    },
    children,
  );
};

export default Typography;
