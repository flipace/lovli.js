import React from 'react';
import { Provider } from 'react-redux';
import { Connector as HorizonConnector } from 'horizon-react';

import routes from '../routes';
import store from '../store';

export default () => (
  <HorizonConnector store={store}>
    {routes}
  </HorizonConnector>
);
