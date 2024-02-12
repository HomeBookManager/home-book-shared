import cx from 'classnames';
import { FC } from 'react';
import { kebabCase } from 'lodash';

// @home-book
import { Theme } from 'home-book-types';

// components
import E2EDataAttribute from '../../../E2EDataAttributes/E2EDataAttribute';

// hooks
import { useClassNames } from './hooks/useClassNames';

// others
import { classNames } from './classNames';

// styles
import './styles/index.scss';

// types
import { E2EAttribute } from '../../../E2EDataAttributes/enums';
import { IconShape } from './enums';
import { TIconBasicProps } from './types';

export type TIconProps = TIconBasicProps & {
  fillDark?: string;
  iconComponent: FC<TIconBasicProps>;
  iconShape: IconShape;
  ignoreDefaultStyles?: boolean;
  selected?: boolean;
  shouldForceClassNames?: boolean;
  strokeDark?: string;
};

export const Icon: FC<TIconProps> = ({
  className = '',
  clickable = false,
  disabled = false,
  disabledFocus = false,
  disabledHover = false,
  e2eAttribute = E2EAttribute.icon,
  e2eValue = '',
  fill = '',
  fillDark = '',
  forcedHover = false,
  iconComponent: IconComponent,
  iconShape,
  ignoreDefaultStyles = true,
  selected = false,
  shouldForceClassNames = false,
  stroke = '',
  strokeDark = '',
  tabIndex = -1,
  ...restProps
}) => {
  const withDefaultStyles =
    ignoreDefaultStyles && !fill && !fillDark && !stroke && !strokeDark;

  const { classNamesWithTheme, forceUpdateClassNames, theme } =
    useClassNames(iconShape);

  if (!classNamesWithTheme[classNames[iconShape]]) {
    if (shouldForceClassNames) {
      forceUpdateClassNames();
    }

    return null;
  }

  return (
    <E2EDataAttribute
      type={e2eAttribute}
      value={e2eValue || kebabCase(iconShape)}
    >
      <IconComponent
        className={
          withDefaultStyles
            ? cx(
                className,
                classNamesWithTheme[classNames[iconShape]].name,
                {
                  [classNamesWithTheme[classNames[iconShape]].modificators
                    .clickable]: clickable,
                },
                {
                  [classNamesWithTheme[classNames[iconShape]].modificators
                    .disabled]: disabled,
                },
                {
                  [classNamesWithTheme[classNames[iconShape]].modificators
                    .disabledHover]: disabledHover,
                },
                {
                  [classNamesWithTheme[classNames[iconShape]].modificators
                    .forcedHover]: forcedHover,
                },
                {
                  [classNamesWithTheme[classNames[iconShape]].modificators
                    .selected]: selected,
                },
              )
            : className
        }
        fill={theme === Theme.dark ? fillDark : fill}
        stroke={theme === Theme.dark ? strokeDark : stroke}
        {...(disabledFocus ? {} : { tabIndex })}
        {...restProps}
      />
    </E2EDataAttribute>
  );
};

export default Icon;
