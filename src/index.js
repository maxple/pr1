import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/clock';

ReactDOM.render(<App onClose={() => ReactDOM.unmountComponentAtNode(document.getElementById('root'))}/>, document.getElementById('root'));
