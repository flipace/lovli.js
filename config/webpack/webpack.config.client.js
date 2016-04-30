const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackAnybarPlugin = require('webpack-anybar-plugin').default;

const basePath = path.join(__dirname, '../../source');
const buildPath = path.join(__dirname, '../../.build');
const staticPath = path.join(__dirname, '../../static');

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
    path: buildPath,
    filename: 'client.bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    root: basePath,
    alias: {
      utils: path.join(basePath, '/utils'),
      styles: path.join(basePath, '/client/styles'),
      images: path.join(staticPath, 'images')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|mp3|ogg|wav|ogv|mov|mp4|svg)/,
        loader: 'file-loader?limit=2000',
        include: staticPath
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: basePath
      },
      {
        test : /\.json$/,
        loader : 'json'
      },
      {
        test: /\.(css)$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=lovli_[local]___[hash:base64:5]!postcss-loader',
        include: basePath
      }
    ]
  },
  postcss: function postcssPlugins() {
    return [
      require('autoprefixer'),
      require('css-mqpacker'),
      require('postcss-nested'),
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
      port: 1738
    })
  ]
};
