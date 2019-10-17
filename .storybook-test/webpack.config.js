const merge = require('lodash/merge');
const path = require('path');
const wixStorybookConfig = require('yoshi/config/webpack.config.storybook');

const silentLogging = config => {
  const { plugins } = config;

  const progressPluginIndex = plugins.findIndex(
    plugin => plugin.constructor.name === 'ProgressPlugin',
  );
  config.plugins[progressPluginIndex].handler = () => ({});
};

module.exports = (config, env, defaultConfig) => {
  silentLogging(defaultConfig);

  defaultConfig.module.rules[0].use[0].loader = require.resolve('babel-loader');

  const newConfig = wixStorybookConfig(defaultConfig);

  return merge(newConfig, {
    context: path.resolve(__dirname, '..', 'src'),
    resolve: {
      alias: {
        'wix-style-react': path.resolve(__dirname, '..', 'src'),
      },
    },
  });
};
