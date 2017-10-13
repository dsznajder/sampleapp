import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// todosActions
export const addTodo = (text) => ({
  type: "ADD",
  payload: { id: +new Date(), text, completed: false }
});

export const removeTodo = (todo) => ({
  type: "REMOVE",
  payload: todo
});

export const completeTodo = (todo) => ({
  type: "COMPLETE",
  payload: todo,
})

export const load = () => ({
  type: "LOAD"
})

// todosReducer
const initialState = [
  {
    id: 1,
    text: "Todo Preview",
    completed: false,
  }
];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {

  case "LOAD":
    return JSON.parse(localStorage.getItem("store")) || initialState

  case "ADD": {
    const newState = [...state, action.payload]
    localStorage.setItem("store", JSON.stringify(newState))
    return newState;
  }

  case "REMOVE": {
    const newState = state.filter(todo => todo.id !== action.payload.id);
    localStorage.setItem("store", JSON.stringify(newState))
    return newState;
  }

  case "COMPLETE": {
    const newState = state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)
    localStorage.setItem("store", JSON.stringify(newState))
    return newState
  }

  default:
    return state;
  }
};

// redux store
const store = createStore(
  combineReducers({ todos: todosReducer }),
  devToolsEnhancer()
)

export default store
