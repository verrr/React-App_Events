import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Header from './Containers/Header';
import MainEventList from './Containers/MainEventList';
import EventDetail from './Containers/EventDetail';
import ContactData from './Containers/ContactData';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">

                    <Route path="/" exact component={Header}/>
                    <Route path="/" exact component={MainEventList}/>
                    <Route path="/events" exact component={MainEventList}/>

                    <Route path="/event/:id" exact component={Header}/>
                    <Route path="/event/:id" exact component={EventDetail}/>
                    <Route path="/login" exact component={Header}/>
                    <Route path="/signup" exact component={Header}/>
                    <Route path="/signup" exact component={ContactData}/>




                </div>
            </BrowserRouter>
        );
    }
}

export default App;
