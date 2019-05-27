const path = require('path');
const webpack = require('webpack');
const StylableWebpackPlugin = require('@stylable/webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './puppeteer.js'),
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve('./dist/testkit'),
    filename: 'puppeteer-testkit-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new StylableWebpackPlugin()],
  mode: 'development',
  devtool: false // the default is `eval` in development mode, which may be harder to debug
};
