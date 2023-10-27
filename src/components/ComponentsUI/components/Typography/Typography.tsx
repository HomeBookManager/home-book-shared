import classnames from 'classnames';
import { camelCase, isObject } from 'lodash';
import { createElement, FC, HTMLAttributes, ReactNode } from 'react';

// hooks
import { useTheme } from '../../../../hooks';

// others
import { className as classNameTypography, classNames } from './classNames';
import { TYPOGRAPHY_COLORS_MODE } from './constants';

// styles
import './typography.scss';

// types
import { E2EAttribute } from '../../../E2EDataAttributes/enums';
import { TTypographyColor } from './types';
import {
  TypographyFontStyle,
  TypographyFontWeight,
  TypographyFontType,
} from './enums';

// utils
import { getDataTestAttribute } from '../../../E2EDataAttributes/utils';

export type TTypographyProps = Omit<HTMLAttributes<HTMLElement>, 'color'> & {
  children?: ReactNode;
  color?: TTypographyColor;
  e2eAttribute?: string;
  e2eValue?: number | string;
  fontStyle?: TypographyFontStyle;
  fontType?: TypographyFontType;
  fontWeight?: TypographyFontWeight;
  innerHtml?: string;
  noWrap?: boolean;
  withoutMargin?: boolean;
};

export const Typography: FC<TTypographyProps> = ({
  children,
  className = '',
  color = TYPOGRAPHY_COLORS_MODE.neutral1,
  e2eAttribute = E2EAttribute.text,
  e2eValue = '',
  fontStyle = TypographyFontStyle.normal,
  fontType = TypographyFontType.p,
  fontWeight = TypographyFontWeight.regular,
  innerHtml = '',
  noWrap = false,
  style = {},
  withoutMargin = true,
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
        className,
        classNamesWithTheme[classNameTypography].name,
        classNamesWithTheme[classNameTypography].modificators[
          camelCase(fontWeight) as keyof typeof TypographyFontWeight
        ],
        classNamesWithTheme[classNameTypography].modificators[fontStyle],
        classNamesWithTheme[classNameTypography].modificators[fontType],
        {
          [classNamesWithTheme[classNameTypography].modificators.noWrap]:
            noWrap,
        },
        {
          [classNamesWithTheme[classNameTypography].modificators.withoutMargin]:
            withoutMargin,
        },
      ),
      style: {
        ...style,
        color: isObject(color) ? color[theme] : color,
      },
    },
    children,
  );
};

export default Typography;
