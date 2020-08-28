export default function createStore(reducer, initState, rewriteMiddleware) {
  if (rewriteMiddleware) {
    //高阶函数+科里化体现
    return rewriteMiddleware(createStore)(reducer, initState);
  }
  let state = initState;
  let listeners = [];
  function subscribe(listener) {
    listeners.push(listener);
  }
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }
  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    //初始化状态
    dispatch({ type: Symbol('replace') });
  }
  //初始化状态
  dispatch({ type: Symbol('init') });
  return {
    subscribe,
    getState,
    dispatch,
    replaceReducer,
  };
}
