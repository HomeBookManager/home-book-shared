import { useState } from 'react';

export type TUseGuardOnce = boolean;

export const useGuardOnce = (
  callback: () => { condition: boolean; done: boolean },
): TUseGuardOnce => {
  const [isWatching, setIsWatching] = useState(true);
  const { condition, done } = callback();

  if (done && isWatching) {
    setIsWatching(false);
  }

  return isWatching || condition;
};
