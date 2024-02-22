import { CombinedState, combineReducers, Reducer } from 'redux';

// @home-book
import { TAction } from 'home-book-types';

// types
import { TComponentsUIMainState } from '../types/reducers';

export const componentsUIReducers = {};

const createRootReducer = (): Reducer<
  CombinedState<TComponentsUIMainState>,
  TAction<any>
> => combineReducers(componentsUIReducers);

export default createRootReducer;
