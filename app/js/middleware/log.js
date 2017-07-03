const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
  console.log(`Action: ${action.type}`);

  next(action);
};

module.exports = logMiddleware;