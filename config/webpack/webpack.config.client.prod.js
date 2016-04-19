var webpack = require('webpack');
var config = require('./webpack.config.client');
var _ = require('lodash');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

config.module.loaders[8] = {
  test: /\.(css)$/,
  loader: ExtractTextPlugin.extract('css-loader/locals?modules&importLoaders=1&localIdentName=[hash:base64:6]', 'postcss-loader'),
  include: /app/,
  exclude: /node_modules|vendor|\.global\.css/
};

var config = module.exports = _.assign(_.clone(config), {
  devtool: 'eval',
  plugins: (config.plugins || []).concat([
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true)
  ]),
});
