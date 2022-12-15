import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import { createStore } from './miniReduxStoreExample'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'
import { loggerMiddleware } from './exampleAddons/loggerMiddleware'
import { delayedMessageMiddleware } from './exampleAddons/delayedMessageMiddleware'

const composedEnhancer = composeWithDevTools(
  //EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(
    print1,
    print2,
    print3,
    loggerMiddleware,
    delayedMessageMiddleware
  ),
  // other store enhancers if any
)

const store = createStore(rootReducer, composedEnhancer)

export default store
