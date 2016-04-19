'use strict';
const path = require('path');

module.exports = {
  webpack: path.join(__dirname, 'webpack'),
  source: path.join(__dirname, '../source')
};

module.exports.assets = path.join(module.exports.webpack, 'assets');
