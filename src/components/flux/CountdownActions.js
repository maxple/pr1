import React from 'react'
import actionTypes from './CountdownActionTypes';
import dispatcher from './CountdownDispatcher';

const CountdownActions = {
    tick(count) {
        dispatcher.dispatch({
            type: actionTypes.TICK,
            count
        })
    },
    reset(count) {
        dispatcher.dispatch({
            type: actionTypes.RESET,
            count
        })
    }
};

export default CountdownActions;
