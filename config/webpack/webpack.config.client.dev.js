const webpack = require('webpack');
const defaultConfig = require('./webpack.config.client');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const _ = require('lodash');
const devProps = require('./devProps');

const devConfig = _.assign(_.clone(defaultConfig), {
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
    new ExtractTextPlugin('styles.css'),
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

const localCssConfig = devConfig.module.loaders.find(
  l => l.name && l.name === 'local-css-config'
);

delete localCssConfig.name;
localCssConfig.loader = ExtractTextPlugin.extract(
  'style',
  'css?sourceMap&modules&importLoaders=1&localIdentName=lovli_[local]_[hash:base64:5]!postcss'
);

module.exports = devConfig;
