import { FC, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

// components
import Title from './components/Title/Title';

// types
import { TAppRoutesData, TRoutes } from './types';

// utils
import { renderRoute } from './utils/renderRoute';

export type TRoutingProps = {
  appRoutesData: TAppRoutesData;
  notFoundPage: ReactElement;
  routes: TRoutes;
};

const Routing: FC<TRoutingProps> = ({
  appRoutesData,
  notFoundPage,
  routes,
}) => {
  const location = useLocation();

  return (
    <>
      <Title routes={routes} />
      <Switch location={location}>
        {appRoutesData.map((route) => renderRoute(route, routes))}
        <Route path="*">{notFoundPage}</Route>
      </Switch>
    </>
  );
};

export default Routing;
