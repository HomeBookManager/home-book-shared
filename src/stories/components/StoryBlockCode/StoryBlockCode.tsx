import cx from 'classnames';
import { FC } from 'react';

// hooks
import { useTheme } from '../../../hooks/useTheme/useTheme';

// others
import { className as StoryBlockCodeClassName, classNames } from './classNames';

// types
import { TStoryBlockCode } from './types';

// utils
import { parseComponentToHTMLContext } from './utils/parseComponentToHTMLContext';
import { parseImportToHTMLContext } from './utils/parseImportToHTMLContext';
import { parseVariableToHTMLContext } from './utils/parseVariableToHTMLContext';

// styles
import './story-block-code.scss';

export type TProps = {
  blockCodeData: TStoryBlockCode;
  className?: string;
};

const StoryBlockCode: FC<TProps> = ({ blockCodeData, className = '' }) => {
  const {
    componentName = '',
    props = [],
    imports,
    variables = [],
  } = blockCodeData;
  const { classNamesWithTheme } = useTheme(classNames);

  return (
    <div
      className={cx(classNamesWithTheme[StoryBlockCodeClassName], className)}
    >
      {imports.map((importObj, key) => (
        <p
          className={classNamesWithTheme.imports}
          dangerouslySetInnerHTML={{
            __html: parseImportToHTMLContext(importObj, classNamesWithTheme),
          }}
          key={key}
        />
      ))}
      {props.length > 0 && <div className={classNamesWithTheme.separator} />}
      {variables.map((variable, key) => (
        <div
          className={classNamesWithTheme.variables}
          dangerouslySetInnerHTML={{
            __html: parseVariableToHTMLContext(classNamesWithTheme, variable),
          }}
          key={key}
        />
      ))}
      {props.map((props, key) => (
        <div
          className={classNamesWithTheme.components}
          dangerouslySetInnerHTML={{
            __html: parseComponentToHTMLContext(
              props,
              componentName,
              classNamesWithTheme,
            ),
          }}
          key={key}
        />
      ))}
    </div>
  );
};

export default StoryBlockCode;
