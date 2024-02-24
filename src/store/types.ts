import { EmptyObject, Store } from 'redux';

// @home-book
import { TAction } from 'home-book-types';

// types
import { TMainState } from '../types/reducers';

export type TStore = Store<EmptyObject & TMainState, TAction<any>> & {
  dispatch: unknown;
};
