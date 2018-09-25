import {applyMiddleware, combineReducers, createStore, compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {colors, sort} from './reducers'
import stateData from '../data/initialState'

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result
};

const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result
};

const storeFactory = (initialState = stateData) => {
    return createStore(
        combineReducers({ colors, sort }),
        localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState,
        composeWithDevTools(applyMiddleware(logger, saver)))
};

export default storeFactory