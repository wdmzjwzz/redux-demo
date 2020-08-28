let initState = {
  count: 0,
};
export default function reducer(state, action) {
  if (!state) {
    state = initState;
  }
  switch (action.type) {
    case 'INCREMENT':
      console.log('reducer执行');
      // redux不可变状态 reducer出来的
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECERMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}
