export const delayedMessageMiddleware = storeAPI => next => action => {
    if (action.type === 'todos/todoAdded') {
        setTimeout(() => {
          console.log('Added a new todo:', action.payload)
        }, 1000)
    }
    return next(action)
}