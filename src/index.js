import React from 'react';
import {render} from 'react-dom';
import PopUpButton from './components/hoc/PopUpButton';

render(<PopUpButton hide={true}
                    txt="toggle popup">
        <h1>Hidden Content</h1>
        <p>This content will start off hidden</p>
    </PopUpButton>,
    document.getElementById('root')
);
