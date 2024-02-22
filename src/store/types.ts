import { EmptyObject, Store } from 'redux';

// @home-book
import { TAction } from 'home-book-types';

// types
import { TComponentsUIMainState } from '../types/reducers';

export type TStore = Store<
  EmptyObject & TComponentsUIMainState,
  TAction<any>
> & {
  dispatch: unknown;
};
