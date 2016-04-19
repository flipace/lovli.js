import types from './actionTypes';

/**
 * Increase the number of active loading/async requests
 */
const increaseLoadingRequests = () => ({ type: types.INCREASE_LOADING_REQUESTS });

/**
 * Decrease the number of active loading/async requests
 */
const decreaseLoadingRequests = () => ({ type: types.DECREASE_LOADING_REQUESTS });

/**
 * Asynchronously call a meteor method
 * @param {function} fnName The name of the meteor method which should be called
 * @param {mixed} ...args Additional arguments which should be passed
 */
function callMeteor(fnName, ...args) {
  return function doCallMeteor() {
    return Meteor.promise(fnName, ...args);
  };
}


function removeLoader(router, replaceState) {
  window.store.dispatch({ type: types.HIDE_LOADING_INDICATOR });
}

module.exports = {
  // "App" ActionCreators
  showLoadingIndicator: () => ({ type: types.SHOW_LOADING_INDICATOR }),
  hideLoadingIndicator: () => ({ type: types.HIDE_LOADING_INDICATOR }),

  increaseLoadingRequests,
  decreaseLoadingRequests,

  removeLoader,

  callMeteor,

  // "Navigation" ActionCreators
  setBreadcrumbs: (breadcrumbs) => ({ type: types.SET_BREADCRUMBS, breadcrumbs })
};
