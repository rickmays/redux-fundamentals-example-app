const initialState = {
  status: 'All',
  colors: [],
}

// Use the initalState as a default value
export default function filtersReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'filters/statusFilterChanged': {
      return {
        // Again, one less level of nesting to copy
        ...state,
        // And replace the status field with the new value
        status: action.payload,
      }
    }

    default:
      // if This reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}
