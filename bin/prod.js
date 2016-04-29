#! /usr/bin/env node
'use strict';
require('shelljs/global');

const path = require('path');
const dirs = require('../config/dirs');
const webpack = require('webpack');

const clientConfig = require(path.join(dirs.webpack, 'webpack.config.client.prod.js'));
const serverConfig = require(path.join(dirs.webpack, 'webpack.config.server.js'));

function compileClient() {
  const clientCompiler = webpack(clientConfig);
  const serverCompiler = webpack(serverConfig);

  // generate bundle
  clientCompiler.run((err) => {
    if (err) {
      console.log(err); // eslint-disable-line
    } else {
      serverCompiler.run((errServer) => {
        if (errServer) {
          console.log(errServer); // eslint-disable-line
        }
      });
    }
  });
}

compileClient();
