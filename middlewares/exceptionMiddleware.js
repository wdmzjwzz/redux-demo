const exceptionMiddleware = (store) => (next) => (action) => {
  try {
    console.log('✔出错中间件');
    next(action);
  } catch (err) {
    console.log('错误报告', err);
  }
};
export default exceptionMiddleware;
