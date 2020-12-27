import API from 'goals-todos-api'

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

//  creators
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function handleAddTodo(name, reset) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        reset();
      })
      .catch(() => alert("An error occured, Try Again!"));
  };
}

export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));

    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo));
      alert("Oops Some error Occured!");
    });
  };
}

export function handleToggleTodo(id) {
  return (dispatch) => {
    dispatch(toggleTodo(id));

    return API.saveTodoToggle(id).catch(() => {
      dispatch(toggleTodo(id));
      alert("Oops Some error Occured!");
    });
  };
}
