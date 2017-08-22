import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// todosActions
export const addTodo = (text) => ({
  type: "ADD",
  payload: { id: +new Date(), text }
});

export const removeTodo = (todo) => ({
  type: "REMOVE",
  payload: todo
});

// todosReducer
const initialState = [
  {id: 1, text: 'TODO'}
];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {

  case "ADD":
    return [...state, action.payload];

  case "REMOVE":
    return state.filter(todo => todo.id !== action.payload.id);

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
