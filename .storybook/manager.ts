import { addons, types } from '@storybook/addons';
import { ThemeVars, themes } from '@storybook/theming';

// @home-book
import { THEME } from 'home-book-constants';
import { Theme } from 'home-book-types';

// components
import ToggleMode from './addons/ToggleMode/ToggleMode';

// others
import { THEME_STYLES } from './constants';

const getTheme = (): ThemeVars => {
  const theme = localStorage.getItem(THEME) || Theme.light;

  localStorage.setItem(THEME, theme);

  return { ...themes[theme], ...THEME_STYLES[theme] };
};

addons.register('TOGGLE_MODE', () => {
  addons.add('TOOL', {
    type: types.TOOL,
    title: 'Toggle mode',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: ToggleMode,
  });
});

addons.setConfig({
  theme: getTheme(),
});
