import cx from 'classnames';
import { camelCase } from 'lodash';
import { FC, ReactNode, useEffect } from 'react';

// @home-book
import { DARK_COLORS } from 'home-book-constants';
import { Theme } from 'home-book-types';

// components
import StoryBlockCode, {
  TProps as TStoryBlockCodeProps,
} from '../StoryBlockCode/StoryBlockCode';

// hooks
import { useTheme } from '../../../hooks/useTheme/useTheme';

// others
import { className as classNameStoryComponent, classNames } from './classNames';

// styles
import './story-component.scss';

// types
import { ContentAlignItems, ContentDisplay, ContentGridFlow } from './enums';

type TProps = TStoryBlockCodeProps & {
  applyMaxWidth?: boolean;
  children?: ReactNode;
  className?: string;
  contentAlignItems?: ContentAlignItems;
  contentDisplay?: ContentDisplay;
  contentGridFlow?: ContentGridFlow;
  description?: Array<string>;
  flex?: boolean;
  title: string;
};
const StoryComponent: FC<TProps> = ({
  applyMaxWidth = true,
  children,
  className = '',
  contentAlignItems = ContentAlignItems.center,
  contentDisplay = ContentDisplay.grid,
  contentGridFlow = ContentGridFlow.column,
  description = [],
  title,
  ...restProps
}) => {
  const { classNamesWithTheme, theme } = useTheme(classNames);

  useEffect(() => {
    if (theme === Theme.dark) {
      document.body.style.backgroundColor = DARK_COLORS.neutral4;
    }

    document.body.style.colorScheme = theme;
  }, [theme]);

  return (
    <section
      className={cx(
        className,
        classNamesWithTheme[classNameStoryComponent].name,
        {
          [classNamesWithTheme[classNameStoryComponent].modificators.maxWidth]:
            applyMaxWidth,
        },
      )}
    >
      <h2 className={classNamesWithTheme.title}>{title}</h2>
      {description.map((description, key) => (
        <p
          className={classNamesWithTheme.description}
          dangerouslySetInnerHTML={{ __html: description }}
          key={key}
        />
      ))}
      {children && (
        <section
          className={cx(
            classNamesWithTheme.content.name,
            classNamesWithTheme.content.modificators[contentAlignItems],
            classNamesWithTheme.content.modificators[contentDisplay],
            classNamesWithTheme.content.modificators[
              camelCase(contentGridFlow) as keyof typeof ContentGridFlow
            ],
          )}
        >
          {children}
        </section>
      )}
      <StoryBlockCode
        className={classNamesWithTheme.storyBlockCode}
        {...restProps}
      />
    </section>
  );
};

export default StoryComponent;
