import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

// components
import Title from './components/Title/Title';

// others
import { APP_ROUTES_DATA } from './constants/appRoutesData';

// utils
import { renderRoute } from './utils/renderRoute';

const Routing: FC = () => {
  const location = useLocation();

  return (
    <>
      <Title />
      <Switch location={location}>
        {APP_ROUTES_DATA.map(renderRoute)}
        <Route path="*">
          <>Not Found</>
        </Route>
      </Switch>
    </>
  );
};

export default Routing;
