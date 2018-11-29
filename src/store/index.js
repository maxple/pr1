import { applyMiddleware, combineReducers, createStore } from 'redux'
import { colors } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const clientLogger = store => next => action => {
  console.groupCollapsed('dispatching client action', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const serverLogger = store => next => action => {
  console.log('\ndispatching server action\n')
  console.log(action)
  console.log('\n')
  return next(action)
}

const storeFactory = (server = false, initialState = {}) => createStore(
  combineReducers({ colors }),
  initialState,
  composeWithDevTools(applyMiddleware(...[server ? serverLogger : clientLogger, thunk])))

export default storeFactory
