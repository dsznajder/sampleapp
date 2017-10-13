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

// todosReducer
const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {

  case "ADD":
    return [...state, action.payload];

  case "REMOVE":
    return state.filter(todo => todo.id !== action.payload.id);

  case "COMPLETE":
    return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo )

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
