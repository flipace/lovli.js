const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackAnybarPlugin = require('webpack-anybar-plugin').default;

const basePath = path.join(__dirname, '../../source');
const buildPath = path.join(__dirname, '../../.build');

module.exports = {
  target: 'node',
  context: __dirname,
  cache: true,
  entry: path.join(basePath, '/server/entry.server'),
  output: {
    path: buildPath,
    filename: 'server.bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: basePath,
    alias: {
      utils: path.join(basePath, '/utils')
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: basePath
      },
      {
        test : /\.json$/,
        loader : 'json'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: `${chalk.blue.bold('Building server bundle')} [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      renderThrottle: 100,
      summary: false,
      customSummary: (t) => {
        return console.log(chalk.blue.bold(`Built server in ${t}.`));
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      BUILD_TIME: JSON.stringify((new Date()).getTime())
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new WebpackAnybarPlugin({
      port: 1738
    })
  ],
  externals: [
    {
      winston: 'commonjs winston',
      express: 'commonjs express',
      later: 'commonjs later',
      '@horizon/server': 'commonjs @horizon/server'
    }
  ]
};
