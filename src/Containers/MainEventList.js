import React, {Component} from 'react';
import FeaturedEvents from './FeaturedEvents';
import DefaultEvents from './DefaultEvents';

class MainEventList extends Component {
    render() {
        return (
            <div className="App-MainEventList">
                <h1>Event List Title</h1>
                <FeaturedEvents/>
                <DefaultEvents/>
            </div>
        );
    }
}

export default MainEventList;
