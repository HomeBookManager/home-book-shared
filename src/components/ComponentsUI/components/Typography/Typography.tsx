import classnames from 'classnames';
import { camelCase, isObject } from 'lodash';
import {
  createElement,
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  Ref,
} from 'react';

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
  align?: CSSProperties['textAlign'];
  children?: ReactNode;
  color?: TTypographyColor;
  e2eAttribute?: string;
  e2eValue?: number | string;
  fontStyle?: TypographyFontStyle;
  fontType?: TypographyFontType;
  fontWeight?: TypographyFontWeight;
  innerHtml?: string;
  noWrap?: boolean;
  ref?: Ref<HTMLElement>;
  withoutMargin?: boolean;
};

export const Typography = forwardRef<HTMLElement, TTypographyProps>(
  (
    {
      align: textAlign = 'inherit',
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
    },
    ref,
  ) => {
    const { classNamesWithTheme, theme } = useTheme(classNames);

    if (!children && !innerHtml) {
      return null;
    }

    return createElement(
      fontType,
      {
        ...restProps,
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
            [classNamesWithTheme[classNameTypography].modificators
              .withoutMargin]: withoutMargin,
          },
        ),
        [getDataTestAttribute(e2eAttribute)]: e2eValue,
        ...(innerHtml
          ? { dangerouslySetInnerHTML: { __html: innerHtml } }
          : {}),
        ref,
        style: {
          ...style,
          color: isObject(color) ? color[theme] : color,
          textAlign,
        },
      },
      children,
    );
  },
);

export default Typography;
