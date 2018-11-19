import { applyMiddleware, combineReducers, createStore } from 'redux'
import { colors, sort } from './reducers'
import stateData from '../../data/initialState'

let console = window.console

const logger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const saver = store => next => action => {
  let result = next(action)
  localStorage['redux-store'] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (initState = stateData) => {
  const rs = localStorage['redux-store']
  return applyMiddleware(logger, saver)(createStore)(
    combineReducers({ colors, sort }),
    rs ? JSON.parse(rs) || initState : initState)
}

export default storeFactory