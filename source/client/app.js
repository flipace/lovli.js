import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReloadContainer } from 'react-hot-loader';

import Root from './components/Root';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <HotReloadContainer component={Root} />,
  rootElement
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    ReactDOM.render(
      <HotReloadContainer component={require('./components/Root').default} />,
      rootElement
    );
  });
}
