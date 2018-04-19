export function createStore(reducer, initialState) {
  let state = initialState;
  let callbacks = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    callbacks.forEach(item=> {
      item();
    });
  };

  const subscribe = callback => {
    callbacks.push(callback);

    return () => callbacks.filter(item => item !== callback);
  };

  dispatch({});

  return { getState, dispatch, subscribe };
}