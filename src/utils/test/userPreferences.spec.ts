// @home-book
import { THEME } from 'home-book-constants';
import { Theme } from 'home-book-types';

// mocks
import { mockMatchMedia } from './mock/mockMatchMedia';

// utils
import { getThemePreferences } from '../userPreferences';

describe('getThemePreferences', () => {
  it('Should return light theme from system preferences', () => {
    // before
    mockMatchMedia(false);

    // result
    expect(getThemePreferences()).toEqual(Theme.light);
  });

  it('Should return dark theme from system preferences', () => {
    // before
    mockMatchMedia(true);

    expect(getThemePreferences()).toEqual(Theme.dark);
  });

  it('Should return light theme from localStorage when dark is set in system preferences', () => {
    // mock
    localStorage.setItem(THEME, Theme.light);

    // before
    mockMatchMedia(true);

    // result
    expect(getThemePreferences()).toEqual(Theme.light);
  });

  it('Should return dark theme from localStorage when light is set in system preferences', () => {
    // mock
    localStorage.setItem(THEME, Theme.dark);

    // before
    mockMatchMedia(false);

    // result
    expect(getThemePreferences()).toEqual(Theme.dark);
  });
});
