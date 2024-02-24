import { CombinedState, combineReducers, Reducer } from 'redux';

// @home-book
import { TAction } from 'home-book-types';

// others
import { REDUCER_KEY as ROUTER_REDUCER_KEY } from './router/actionsType';

// store
import routerReducer from './router/reducer';

// types
import { TMainState } from '../types/reducers';

export const reducers = { [ROUTER_REDUCER_KEY]: routerReducer };

const createRootReducer = (): Reducer<
  CombinedState<TMainState>,
  TAction<any>
> => combineReducers(reducers);

export default createRootReducer;
