import { act, renderHook } from '@testing-library/react';
import { MouseEvent } from 'react';

// hooks
import { useRippleEffect } from './useRippleEffect';

// tests
import { sleep } from '../../tests/testHelpers';

describe('useRippleEffect', () => {
  it('should return empty state', () => {
    // before
    const { result } = renderHook(() => useRippleEffect('effect'));

    // result
    expect(result.current.rippleEffect).toBe(null);
  });

  it('should trigger effect', () => {
    // before
    const { result } = renderHook(() => useRippleEffect('effect'));

    // action
    act(() => {
      result.current.triggerRippleEffect({
        currentTarget: { getBoundingClientRect: () => ({ left: 0, top: 0 }) },
      } as MouseEvent<HTMLElement>);
    });

    // result
    expect(result.current.rippleEffect).not.toBe(null);
  });

  it('should finish ripple effect after some time', async () => {
    // before
    const { result } = renderHook(() => useRippleEffect('effect'));

    // action
    act(() => {
      result.current.triggerRippleEffect({
        currentTarget: { getBoundingClientRect: () => ({ left: 0, top: 0 }) },
      } as MouseEvent<HTMLElement>);
    });

    // wait
    await sleep(1000);

    // result
    expect(result.current.rippleEffect).toBe(null);
  });
});
