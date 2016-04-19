import { createConstants } from 'utils';

export default createConstants(
  // app
  'SHOW_LOADING_INDICATOR',
  'HIDE_LOADING_INDICATOR',

  'INCREASE_LOADING_REQUESTS',
  'DECREASE_LOADING_REQUESTS',

  'NOTIFY',

  // meteor
  'SUBSCRIBING',
  'SUBSCRIBED',

  // navigation
  'SET_BREADCRUMBS'
);
