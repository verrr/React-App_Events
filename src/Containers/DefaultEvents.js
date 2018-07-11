import React, {Component} from 'react';
import DefaultEvent from '../Components/Events/DefaultEvent';

class DefaultEvents extends Component {
    render() {
        return (
            <div className="DefaultEvents">
                <h3>All events</h3>
                <DefaultEvent/>
            </div>
        );
    }
}

export default DefaultEvents;
