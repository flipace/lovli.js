const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackAnybarPlugin = require('webpack-anybar-plugin').default;

const basePath = path.join(__dirname, '../../source');

module.exports = {
  target: 'web',
  context: __dirname,
  cache: true,
  entry: {
    app: [
      path.join(basePath, '/client/entry')
    ]
  },
  output: {
    path: path.join(__dirname, '../.build'),
    filename: 'client.bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    root: basePath
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: /source\//
      },
      {
        test : /\.json$/,
        loader : 'json'
      }
    ]
  },
  postcss: function postcssPlugins() {
    return [
      require('autoprefixer'),
      require('css-mqpacker'),
      require('postcss-discard-comments')({
        removeAll: true
      })
    ];
  },
  browser: {
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
    fs: 'empty'
  },
  node: {
    net: 'empty',
    tls: 'empty',
    fs: 'empty'
  },
  plugins: [
    new ProgressBarPlugin({
      format: `${chalk.blue.bold('Building client bundle')} [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      renderThrottle: 100,
      summary: false,
      customSummary: (t) => {
        return console.log(chalk.blue.bold(`Built client in ${t}.`));
      }
    }),
    new webpack.DefinePlugin({
      BUILD_TIME: JSON.stringify((new Date()).getTime())
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new WebpackAnybarPlugin({
      port: 1738,
      text: 'GD - Client'
    })
  ]
};
