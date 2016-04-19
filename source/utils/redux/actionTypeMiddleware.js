export default () => next => action => {
  if (typeof(action.type) !== 'undefined') {
    if (action.type === 'BATCHING_REDUCER.BATCH') {
      action.payload.forEach(
        a => {
          console.log(`%c Action Type: ${a.type} `, 'background: #c6285c; color: #fff', a); // eslint-disable-line
        }
      );
    } else {
      console.log(`%c Action Type: ${action.type}, `, 'background: #c6285c; color: #fff', action) // eslint-disable-line
    }
  } else if (typeof(action) === 'function' && action.name) {
    console.log(`%c Thunk Action: ${action.name}`, 'background: #07afd8; color: #fff'); // eslint-disable-line
  }

  return next(action);
};
