import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';

// Route configuration
export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);
