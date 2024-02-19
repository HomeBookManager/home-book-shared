import { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';

// types
import { TProtectedRouteProps } from '../../types';

const ProtectedRoute: FunctionComponent<TProtectedRouteProps> = ({
  guards = [],
  children,
  ...props
}) => {
  const failedGuard = guards.find(({ guardCheck }) => !guardCheck());
  const wrapperProps = {
    ...props,
    path: `/${props.path}`,
  };

  if (failedGuard) {
    return failedGuard.renderFallback(props);
  }

  return <Route {...wrapperProps}>{children}</Route>;
};

export default ProtectedRoute;
