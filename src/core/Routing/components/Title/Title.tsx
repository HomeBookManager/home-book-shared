import { FC, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

// others
import { APPLICATION_NAME } from '../../constants';

// types
import { TRoutes } from '../../types';

// utils
import { getTitlesTranslationKeys } from './utils';

export type TTileProps = {
  routes: TRoutes;
};

const Title: FC<TTileProps> = ({ routes }) => {
  const titlesTranslationKeys = useMemo(
    () => getTitlesTranslationKeys(routes),
    [],
  );
  const { pathname } = useLocation();
  const { t } = useTranslation();

  if (pathname in titlesTranslationKeys) {
    return (
      <Helmet>
        <title>
          {t(
            titlesTranslationKeys[
              pathname as keyof typeof titlesTranslationKeys
            ],
          )}
          {` - ${APPLICATION_NAME}`}
        </title>
      </Helmet>
    );
  }

  return (
    <Helmet>
      <title>404 - {APPLICATION_NAME}</title>
    </Helmet>
  );
};

export default Title;
