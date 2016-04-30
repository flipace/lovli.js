const webpack = require('webpack');
const defaultConfig = require('./webpack.config.client');
const _ = require('lodash');
const devProps = require('./devProps');

module.exports = _.assign(_.clone(defaultConfig), {
  devtool: 'source-map',
  entry: _.assign(_.clone(defaultConfig.entry), {
    app: _.union(
      [
        'react-hot-loader/patch',
        `webpack-dev-server/client?${devProps.baseUrl}`,
        'webpack/hot/only-dev-server'
      ],
      defaultConfig.entry.app
    )
  }),
  output: _.assign(_.cloneDeep(defaultConfig.output), {
    publicPath: `http://127.0.0.1:${devProps.webpackPort}/static/`,
    pathinfo: true,
    crossOriginLoading: 'anonymous'
  }),
  plugins: (defaultConfig.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]),
  devServer: {
    publicPath: `${devProps.baseUrl}/static`,
    host: devProps.host,
    hot: true,
    historyApiFallback: true,
    contentBase: devProps.contentBase,
    port: devProps.webpackPort,
    stats: {
      colors: true,
      chunkModules: false,
      modules: false
    }
  }
});
