// Middlewares
const checker = (store) => (next) => (action) => {
  if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes("bitcoin")) {
    return alert("Nope, That\'s a bad Idea");
  }
  else if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes("bitcoin")) {
    return alert("Nope, That\'s a bad Idea");
  }
  else {
    return next(action);
  }
}

const logger = (store) => (next) => (action) => {
  const result = next(action);
  console.log(store.getState());
  return result;
}