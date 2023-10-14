import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

// others
import { THEME_STYLES } from './constants';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: 'dark',
      dark: { ...themes.dark, ...THEME_STYLES.dark },
      light: { ...themes.normal, ...THEME_STYLES.light },
    },
  },
};

export default preview;
