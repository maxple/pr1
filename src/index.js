import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from './components/flux/Countdown';
import CountdownDispatcher from './components/flux/CountdownDispatcher';
import CountdownActions from './components/flux/CountdownActions';
import CountdownStore from './components/flux/CountdownStore';

const appDispatcher = new CountdownDispatcher();
const actions = CountdownActions(appDispatcher);
const store = new CountdownStore(10, appDispatcher);

const render = count => ReactDOM.render(
    <Countdown count={count} {...actions} />,
    document.getElementById('root')
);

store.on("TICK", () => render(store.count));
store.on("RESET", () => render(store.count));
render(store.count);
