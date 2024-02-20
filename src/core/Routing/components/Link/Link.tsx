import cx from 'classnames';
import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// components
import E2EDataAttribute from '../../../../components/E2EDataAttributes/E2EDataAttribute';

// hooks
import { useTheme } from '../../../../hooks/useTheme/useTheme';

// others
import { className as classNameLink, classNames } from './classNames';

// styles
import './link.scss';

// types
import { E2EAttribute } from '../../../../components/E2EDataAttributes/enums';

export type TProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
  e2eAttribute?: E2EAttribute;
  e2eValue?: number | string;
  forcedHover?: boolean;
  underline?: boolean;
};

const Link: FC<TProps> = ({
  children = null,
  className,
  e2eAttribute = E2EAttribute.link,
  e2eValue = '',
  forcedHover = false,
  href = '',
  target = '_self',
  underline = false,
  ...props
}) => {
  const opensInNewWindow = target === '_blank';
  const { classNamesWithTheme } = useTheme(classNames);

  const commonClassNames = cx(
    className,
    classNamesWithTheme[classNameLink].name,
    {
      [classNamesWithTheme[classNameLink].modificators.forcedHover]:
        forcedHover,
    },
    {
      [classNamesWithTheme[classNameLink].modificators.unerline]: underline,
    },
  );

  const isExternalLink = (href: string): boolean => {
    const externalLinkRegexp = /^https?:\/\//;
    return externalLinkRegexp.test(href);
  };

  if (isExternalLink(href) || opensInNewWindow) {
    return (
      <E2EDataAttribute type={e2eAttribute} value={e2eValue}>
        <a href={href} target={target} className={commonClassNames} {...props}>
          {children}
        </a>
      </E2EDataAttribute>
    );
  }

  return (
    <E2EDataAttribute type={e2eAttribute} value={e2eValue}>
      <RouterLink to={href} className={commonClassNames} {...props}>
        {children}
      </RouterLink>
    </E2EDataAttribute>
  );
};

export default Link;
