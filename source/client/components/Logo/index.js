import React from 'react';

import glob from 'styles/app';
import local from './styles';

export default () => (
  <a href="https://github.com/flipace/lovli.js" target="_blank">
    <h1 className={`${local.logo} ${glob.center}`}>lovli.js</h1>
  </a>
);
