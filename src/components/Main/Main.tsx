import { BrowserRouter as Router } from 'react-router-dom';
import { FC } from 'react';

// components
import AppHelmet from '../AppHelmet/AppHelmet';

// core
import Routing, { TRoutingProps } from '../../core/Routing/Routing';

export type TMainProps = TRoutingProps;

export const Main: FC<TMainProps> = (props) => {
  return (
    <Router>
      <AppHelmet />
      <Routing {...props} />
    </Router>
  );
};

export default Main;
