import { createStore, combineReducers } from 'redux'
import * as actionTypes from './actions/actionTypes'

// initial state dipisah
const initialStateTodos = {
  todos: []
}

const initialStateNotes = {
  notes: []
}

const todoReducer = (state = initialStateTodos, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case actionTypes.DELETE_TODO:
      // menghapus dengan method filter
      let newTodos = state.todos.filter((element, index) => index !== action.payload)
      // return state baru
      return {
        ...state,
        todos: newTodos
      }
    case actionTypes.EDIT_TODO:
      // edit state
    
      // copy state todos 
      let todos = [...state.todos]
      // ganti data todo
      let index = action.payload.index
      let todo = action.payload.todo
      todos[index] = todo
     
      // return state baru
      return {
        ...state,
        todos
      }
    default:
      return state
  }
}

const noteReducer = (state = initialStateNotes, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE: 
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todoReducer: todoReducer,
  noteReducer: noteReducer
})

const store = createStore(rootReducer)

export default store