import React, {Component} from 'react';
import '../stylesheets/App.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
    }

    render() {
        const { colors } = this.state;
        return (
            <div className="app">
                12345
            </div>
        );
    }
}

export default App;
