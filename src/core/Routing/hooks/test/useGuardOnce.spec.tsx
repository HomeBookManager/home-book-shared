import { renderHook } from '@testing-library/react';

// hooks
import { useGuardOnce } from '../useGuardOnce';

describe('useGuardOnce', () => {
  it('should return true when guard is watching', () => {
    // before
    const { result } = renderHook(() =>
      useGuardOnce(() => ({ condition: false, done: false }))
    );

    // result
    expect(result.current).toEqual(true);
  });

  it('should return result when guard is not watching', () => {
    // before
    const { result } = renderHook(() =>
      useGuardOnce(() => ({ condition: false, done: true }))
    );

    // result
    expect(result.current).toEqual(false);
  });
});
