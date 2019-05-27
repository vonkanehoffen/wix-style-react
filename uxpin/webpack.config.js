const path = require('path');
const webpack = require('webpack');
const StylableWebpackPlugin = require('@stylable/webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './puppeteer.js'),
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve('./dist/testkit'),
    filename: 'puppeteer-testkit-bundle.js',
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
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&camelCase&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new StylableWebpackPlugin()],
  mode: 'development',
  devtool: false, // the default is `eval` in development mode, which may be harder to debug
};
