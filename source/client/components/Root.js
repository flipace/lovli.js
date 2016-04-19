import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from '../routes';
import store from '../store';

const history = syncHistoryWithStore(browserHistory, store);

export default () => {
  const router = (
    <Router history={history}>
      {routes(React)}
    </Router>
  );

  return (
    <Provider store={store}>
      {router}
    </Provider>
  );
};
