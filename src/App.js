import React, {Component} from 'react';
import Header from './Containers/Header';
import MainEventList from './Containers/MainEventList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <MainEventList/>
            </div>
        );
    }
}

export default App;
