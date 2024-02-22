import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { themes } from '@storybook/theming';

// others
import { THEME_STYLES } from './constants';

// store
import { configureStore } from '../src/store/store';

// styles
import './styles/index.scss';

// utils
import i18n from './i18next.js';

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

export const composed = (Story) => {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Provider store={configureStore()}>
          <Story />
        </Provider>
      </I18nextProvider>
    </Suspense>
  );
};

export const decorators = [composed];

export default preview;
