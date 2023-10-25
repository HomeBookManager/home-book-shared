const path = require('path');
import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-designs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/addon-mdx-gfm',
  ],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config) => {
    config.module!.rules!.push({
      test: /\.scss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};

export default config;
