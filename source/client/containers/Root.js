import React from 'react';
import { Provider } from 'react-redux';
import HorizonConnector from '../components/lib/HorizonConnector';

import routes from '../routes';
import store from '../store';

export default HorizonConnector(() => (
  <Provider store={store}>
    {routes}
  </Provider>
));
