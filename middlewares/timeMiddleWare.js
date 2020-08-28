const timeMiddleWare = (store) => (next) => (action) => {
  console.log(`⏰`, new Date().getTime());
  console.log('--------');
  next(action);
};
export default timeMiddleWare;
