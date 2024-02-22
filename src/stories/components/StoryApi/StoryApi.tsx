import { FC, ReactNode } from 'react';

// components
import StoryComponent from '../StoryComponent/StoryComponent';
import StoryPropsTable, {
  TProps as TPropsStoryPropsTable,
} from '../StoryPropsTable/StoryPropsTable';

// hooks
import { useTheme } from '../../../hooks/useTheme/useTheme';

// others
import { className, classNames } from './classNames';

// styles
import './story-api.scss';

// types
import { TProps as TStoryBlockCodeProps } from '../StoryBlockCode/StoryBlockCode';

type TProps = TStoryBlockCodeProps &
  TPropsStoryPropsTable & {
    children?: ReactNode;
    description?: Array<string>;
    title: string;
  };

const StoryApi: FC<TProps> = ({
  children = null,
  description = [],
  title,
  ...restProps
}) => {
  const { tableBodyData } = restProps;
  const { classNamesWithTheme } = useTheme(classNames);

  return (
    <main className={classNamesWithTheme[className]}>
      <h1 className={classNamesWithTheme.title}>{title}</h1>
      {description.map((description, key) => (
        <p
          className={classNamesWithTheme.description}
          dangerouslySetInnerHTML={{ __html: description }}
          key={key}
        />
      ))}
      <StoryComponent
        className={classNamesWithTheme.storyComponent}
        title="Import"
        {...restProps}
      />
      {children}
      <StoryPropsTable tableBodyData={tableBodyData} />
    </main>
  );
};

export default StoryApi;
