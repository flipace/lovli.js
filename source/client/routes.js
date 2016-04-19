import { IndexRoute, Route } from 'react-router';

import createApp from './components/App';

export default React => (
  <Route path="/">
    <IndexRoute component={createApp} />
  </Route>
);
