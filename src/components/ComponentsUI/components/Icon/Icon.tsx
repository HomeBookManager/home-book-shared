import cx from 'classnames';
import { FC, Ref, forwardRef } from 'react';
import { kebabCase } from 'lodash';

// @home-book
import { Theme } from 'home-book-types';

// components
import E2EDataAttribute from '../../../E2EDataAttributes/E2EDataAttribute';
import withRefreshReference from '../../../../shared/WithRefreshReference/withRefreshReference';

// hooks
import { useTheme } from '../../../../hooks';

// styles
import './styles/index.scss';

// types
import { E2EAttribute } from '../../../E2EDataAttributes/enums';
import { TIconBasicProps } from './types';

// utils
import { composeClassNames } from './utils/composeClassNames';

export type TIconProps = TIconBasicProps & {
  fillDark?: string;
  iconComponent: FC<TIconBasicProps>;
  ignoreDefaultStyles?: boolean;
  ref?: Ref<SVGSVGElement>;
  selected?: boolean;
  strokeDark?: string;
};

export const Icon = forwardRef<SVGSVGElement, TIconProps>(
  (
    {
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
      ignoreDefaultStyles = false,
      selected = false,
      stroke = '',
      strokeDark = '',
      tabIndex = -1,
      ...restProps
    },
    ref,
  ) => {
    const componentName = IconComponent.name;

    const withDefaultStyles =
      !ignoreDefaultStyles && !fill && !fillDark && !stroke && !strokeDark;

    const { classNamesWithTheme, theme } = useTheme(
      composeClassNames(componentName),
    );

    return (
      <E2EDataAttribute
        type={e2eAttribute}
        value={e2eValue || kebabCase(componentName)}
      >
        <IconComponent
          className={
            withDefaultStyles
              ? cx(
                  className,
                  classNamesWithTheme[componentName].name,
                  {
                    [classNamesWithTheme[componentName].modificators.clickable]:
                      clickable,
                  },
                  {
                    [classNamesWithTheme[componentName].modificators.disabled]:
                      disabled,
                  },
                  {
                    [classNamesWithTheme[componentName].modificators
                      .disabledHover]: disabledHover,
                  },
                  {
                    [classNamesWithTheme[componentName].modificators
                      .forcedHover]: forcedHover,
                  },
                  {
                    [classNamesWithTheme[componentName].modificators.selected]:
                      selected,
                  },
                )
              : className
          }
          fill={theme === Theme.dark ? fillDark : fill}
          ref={ref}
          stroke={theme === Theme.dark ? strokeDark : stroke}
          {...(disabledFocus ? {} : { tabIndex })}
          {...restProps}
        />
      </E2EDataAttribute>
    );
  },
);

export default withRefreshReference(Icon);
