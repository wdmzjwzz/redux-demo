import {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} from './redux/index.js';
import counter from './reducers/counter.js';
import info from './reducers/info.js';
import timeMiddleWare from './middlewares/timeMiddleWare.js';
import loggerMiddleware from './middlewares/loggerMiddleware.js';
import exceptionMiddleware from './middlewares/exceptionMiddleware.js';

const reducer = combineReducers({
  counter,
});
// const next = store.dispatch;
// const time = timeMiddleWare(store);
// const logger = loggerMiddleware(store);
// const exception = exceptionMiddleware(store);
// store.dispatch = exception(time(logger(next)));
const rewriteMiddleware = applyMiddleware(
  exceptionMiddleware,
  timeMiddleWare,
  loggerMiddleware
);
let store = createStore(reducer, {}, rewriteMiddleware);
import { increment, setName } from './action.js';
const nextReducer = combineReducers({
  counter,
  info,
});
store.replaceReducer(nextReducer);
// let state = store.getState();
// console.table(state);
//const unsubscribe = store.subscribe(() => {
store.subscribe(() => {
  let state = store.getState();
  console.log(`🍌${state.counter.count}`);
});
// unsubscribe();
const actions = bindActionCreators({ setName, increment }, store.dispatch);
// store.dispatch({
//   type: 'INCREMENT',
// });
actions.increment();
actions.setName('京程一灯🏮');
// store.dispatch({
//   type: 'SET_NAME',
//   name: '京程一灯②号',
// });
