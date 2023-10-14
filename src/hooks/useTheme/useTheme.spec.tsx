import { renderHook } from '@testing-library/react';
import { useContext } from 'react';

// @home-book
import { Theme } from 'home-book-types';

// hooks
import { useTheme } from './useTheme';

// mocks
import { classNames, classNamesWithTheme } from './mock/classNames';

jest.mock('react', () => ({
  ...(jest.requireActual('react') as Object),
  useContext: jest.fn(),
}));

describe('useTheme', () => {
  it(`should not append dark theme modificator for every className`, () => {
    // mock
    (useContext as jest.Mock).mockImplementation(() => ({
      theme: Theme.light,
    }));

    // before
    const { result } = renderHook(() => useTheme(classNames));

    // action
    result.current.forceUpdateClassNames();

    // result
    expect(result.current.classNamesWithTheme).toEqual(classNames);
  });

  it(`should append dark theme modificator for every className`, () => {
    // mock
    (useContext as jest.Mock).mockImplementation(() => ({
      theme: Theme.dark,
    }));

    // before
    const { result } = renderHook(() => useTheme(classNames));

    // action
    result.current.forceUpdateClassNames();

    // result
    expect(result.current.classNamesWithTheme).toEqual(classNamesWithTheme);
  });
});
