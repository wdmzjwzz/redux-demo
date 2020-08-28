export default function combineReducers(reducers) {
  const reducersKeys = Object.keys(reducers);
  return function combinaction(state = {}, action) {
    const nextState = {};
    for (let i = 0; i < reducersKeys.length; i++) {
      const key = reducersKeys[i];
      const reducer = reducers[key];
      console.log('---state', state);
      console.log('---action', action);
      /*取到之前的key对应着的state */
      const preStateForKey = state[key];
      /**执行对应的reduer */
      const nextStateForKey = reducer(preStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    return nextState;
  };
}
