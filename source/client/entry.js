import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root';

// Define the target container for our application
const rootElement = document.getElementById('root');

// Accept HMR
if (module.hot) {
  module.hot.accept();
}

// Render application to target container
ReactDOM.render(
  <AppContainer><Root /></AppContainer>,
  rootElement
);

// react-hot-loader 3 specific - rerender AppContainer
// in case of problems with react-router, check this issue:
// https://github.com/gaearon/react-hot-loader/issues/249
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootEle = require('./containers/Root').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer><RootEle /></AppContainer>,
      rootElement
    );
  });
}
