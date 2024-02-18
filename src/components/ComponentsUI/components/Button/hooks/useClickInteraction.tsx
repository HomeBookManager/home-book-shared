import { MouseEvent } from 'react';

type TUseClickInteraction = (event: MouseEvent<HTMLButtonElement>) => void;

export const useClickInteraction = (
  disabledRippleEffect: boolean,
  onClick: (() => void) | null,
  triggerRippleEffect: (event: MouseEvent<HTMLElement>) => void,
): TUseClickInteraction => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disabledRippleEffect) {
      triggerRippleEffect(event);
    }

    if (onClick) {
      onClick();
    }
  };

  return handleClick;
};
