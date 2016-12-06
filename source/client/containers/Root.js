import React from 'react';
import { Connector as HorizonConnector } from 'horizon-react';

import routes from '../routes';
import horizon from '../db';

export default () => (
  <HorizonConnector horizon={horizon}>
    {routes}
  </HorizonConnector>
);
