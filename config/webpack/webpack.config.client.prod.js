const webpack = require('webpack');
const config = require('./webpack.config.client');
const _ = require('lodash');

module.exports = _.assign(_.clone(config), {
  devtool: 'eval',
  plugins: (config.plugins || []).concat([
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
  ])
});
