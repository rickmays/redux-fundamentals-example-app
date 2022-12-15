import { combineReducers } from 'redux'
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

// New way with combineReducers
const rootReducer = combineReducers({
  // Define a top-level state field named 'todos', handled by 'todosReducer'
  todos: todosReducer,
  // Define a top-level state field named 'filters', handled by 'filtersReducer'
  filters: filtersReducer,
})

export default rootReducer

// Old way before redux - combineReducers
// export default function rootReducer(state = {}, action) {
//   // Always return a new object for the root state
//   return {
//     // The value of 'state.todos' is whatever the todos reducer returns
//     todos: todosReducer(state.todos, action),
//     // For both reducers, we only pass in their slice of the state
//     filters: filtersReducer(state.filters, action),
//   }
// }
