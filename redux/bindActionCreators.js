function bindActionCreator(actionCreators, dispatch) {
  return function () {
    return dispatch(actionCreators.apply(this, arguments));
  };
}
export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== 'object' || actionCreators == null) {
    throw new Error('actionCreators不是正确的参数类型');
  }
  const keys = Object.keys(actionCreators);
  const boundActionCreators = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const _actionCreator = actionCreators[key];
    if (typeof _actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(_actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
