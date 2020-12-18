// Library code
export function createStore(reducer) {
  // The store should have four parts
  // 1. The state
  // 2. a way to get the state
  // 3. a way to listen to changes in state
  // 4. a way to update the state

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}
