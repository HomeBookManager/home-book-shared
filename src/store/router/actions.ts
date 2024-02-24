// others
import { HISTORY_CHANGED, REDIRECT_TO } from './actionsType';

// types
import {
  THistoryChangedAction,
  THistoryChangedActionPayload,
  TRedirectToAction,
} from './types';

export const historyChanged = (
  action: THistoryChangedActionPayload['action'],
  location: THistoryChangedActionPayload['location'],
): THistoryChangedAction => ({
  payload: { action, location },
  type: HISTORY_CHANGED,
});

export const redirectTo = (
  redirectTo: TRedirectToAction['payload'],
): TRedirectToAction => ({
  payload: redirectTo,
  type: REDIRECT_TO,
});
