import { createStore } from "./libraryCode";
import { rootReducer } from "./reducers";
import { addTodoAction } from "./actionCreators";

// App code
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log("New state: ", store.getState());
});

store.dispatch(
  addTodoAction({
    id: 0,
    name: "Learn Redux",
    complete: false,
  })
);
