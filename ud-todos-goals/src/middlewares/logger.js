const logger = (store) => (next) => (action) => {
  const result = next(action);
  console.log(store.getState());
  return result;
}

export default logger