import React, {Component} from 'react';
import FeaturedEvents from './FeaturedEvents';
import DefaultEvents from './DefaultEvents';

class MainEventList extends Component {
    render() {
        return (
            <div className="App-MainEventList">
                <h1 style={{marginBottom: '30px'}}>Join our events</h1>
                <h3>Featured Events</h3>
                <FeaturedEvents/>
                <h3>All events</h3>
                <DefaultEvents/>
            </div>
        );
    }
}

export default MainEventList;
