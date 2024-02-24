import { get as getFp } from 'lodash/fp';
import { Selector, createSelector } from 'reselect';

// others
import { REDUCER_KEY } from './actionsType';

// types
import { TMainState } from '../../types/reducers';
import { TRedirectTo, TRouterState } from './types';

export const routerStateSelector: Selector<TMainState, TRouterState> =
  getFp(REDUCER_KEY);

export const redirectToSelector: Selector<TMainState, TRedirectTo> =
  createSelector(routerStateSelector, getFp('redirectTo'));
