// others
import { REDUCER_KEY as ROUTER_REDUCER_KEY } from '../store/router/actionsType';

// types
import { TRouterState } from '../store/router/types';

export type TMainState = {
  [ROUTER_REDUCER_KEY]: TRouterState;
};
