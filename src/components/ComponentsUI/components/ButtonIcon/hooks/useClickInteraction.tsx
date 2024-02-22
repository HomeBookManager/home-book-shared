import { ButtonHTMLAttributes, MouseEvent } from 'react';

// utils
import { getRandomKey } from '../../../../../utils/getRandomKey';

type TUseClickInteraction = (event: MouseEvent<HTMLButtonElement>) => void;

export const useClickInteraction = (
  disablePulseEffect: boolean,
  onClick: ButtonHTMLAttributes<HTMLElement>['onClick'],
  pulseElements: Array<string>,
  setPulseElements: (pulseElements: Array<string>) => void,
): TUseClickInteraction => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disablePulseEffect) {
      setPulseElements([...pulseElements, getRandomKey(pulseElements)]);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return handleClick;
};
