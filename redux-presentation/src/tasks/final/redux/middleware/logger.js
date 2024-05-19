const logger = store => next => action => {
  console.warn("Dispatching", action);
  const result = next(action);
  console.warn("Next state", store.getState());
  return result;
};

export default logger;
