import React from 'react';
import { Connector as HorizonConnector } from 'horizon-react';

import routes from '../routes';
import store from '../store';
import horizon from '../db';

export default () => (
  <HorizonConnector horizon={horizon} store={store}>
    {routes}
  </HorizonConnector>
);
