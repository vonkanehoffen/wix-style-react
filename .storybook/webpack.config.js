const merge = require("lodash/merge");
const path = require("path");
const wixStorybookConfig = require("yoshi/config/webpack.config.storybook");
const { StylableWebpackPlugin } = require("@Stylable/webpack-plugin");

module.exports = (config, env, defaultConfig) => {
  defaultConfig.module.rules[0].use[0].loader = require.resolve("babel-loader");

  const newConfig = wixStorybookConfig(defaultConfig);

  // Filter out yoshi's stylable plugin
  newConfig.plugins = newConfig.plugins.filter(plugin => {
    return plugin.constructor.name !== 'StylableWebpackPlugin';
  });

  const stylableWebpackPlugin = new StylableWebpackPlugin({
    filename: '[name].stylable.bundle.css',
    optimize: { classNameOptimizations: false, shortNamespaces: false },
    generate: {
      runtimeStylesheetId: 'namespace',
    },
    legacyRuntime: false,
    unsafeBuildNamespace: true
  });

  newConfig.plugins.push(stylableWebpackPlugin);

  return merge(newConfig, {
    context: path.resolve(__dirname, "..", "src"),
    resolve: {
      alias: {
        "wix-style-react": path.resolve(__dirname, "..", "src")
      }
    },
    module: {
      rules: newConfig.module.rules.concat({
        test: /\.story\.js$/,
        loader: "wix-storybook-utils/loader",
        options: {
          storyConfig: {
            moduleName: "wix-style-react",
            repoBaseURL:
              "https://github.com/wix/wix-style-react/tree/master/src/",
            issueURL: "https://github.com/wix/wix-style-react/issues/new/choose"
          }
        }
      })
    }
  });
};
