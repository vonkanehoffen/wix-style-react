const path = require('path');
require('webpack');
const StylableWebpackPlugin = require('@stylable/webpack-plugin');
const { getStyleLoaders } = require('yoshi/config/webpack.config');

const styleLoaders = getStyleLoaders({
  embedCss: true,
  isDebug: true,
  separateCss: false,
  hmr: false,
  tpaStyle: false,
});

module.exports = {
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve('./dist/testkit'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      ...styleLoaders,
    ],
  },
  plugins: [new StylableWebpackPlugin()],
  mode: 'development',
  devtool: false, // the default is `eval` in development mode, which may be harder to debug
};
