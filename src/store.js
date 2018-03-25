import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

// todosActions
export const addTodo = text => ({
  type: 'ADD',
  payload: { id: +new Date(), text },
})

export const removeTodo = todo => ({
  type: 'REMOVE',
  payload: todo,
})

// todosReducer
const initialState = []

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD':
      return [...state, payload]

    case 'REMOVE':
      return state.filter(todo => todo.id !== payload.id)

    default:
      return state
  }
}

// redux store
const store = createStore(combineReducers({ todos: todosReducer }), devToolsEnhancer())

export default store
