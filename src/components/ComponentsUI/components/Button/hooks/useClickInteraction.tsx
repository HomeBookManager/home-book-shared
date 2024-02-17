import { MouseEvent } from 'react';

type TUseClickInteraction = (event: MouseEvent<HTMLButtonElement>) => void;

export const useClickInteraction = (
  disableRippleEffect: boolean,
  onClick: (() => void) | null,
  triggerRippleEffect: (event: MouseEvent<HTMLElement>) => void,
): TUseClickInteraction => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disableRippleEffect) {
      triggerRippleEffect(event);
    }

    if (onClick) {
      onClick();
    }
  };

  return handleClick;
};
