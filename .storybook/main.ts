const path = require('path');
const sassVariables = require('../config/sassVariables');
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
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config) => {
    config.module!.rules!.push({
      test: /\.scss$/i,
      use: [{ loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options: {
          additionalData: async (content) => {
            return sassVariables + content;
          },
        },
      },],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};

export default config;
