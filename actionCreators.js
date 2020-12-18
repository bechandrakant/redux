import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  ADD_GOAL,
  REMOVE_GOAL,
} from "./actionTypes";

// action creators
export function addTodoAction (todo) {
  return {
    type: ADD_TODO, todo,
  }
};

export function removeTodoAction (id) {
  return {
    type: REMOVE_TODO, id,
  }
};

export function toggleTodoAction (id) {
  return {
    type: TOGGLE_TODO, id,
  }
};

export function addGoalAction (goal) {
  return {
    type: ADD_GOAL, goal,
  }
};

export function removeGoalAction (id) {
  return {
    type: REMOVE_GOAL, id,
  }
};