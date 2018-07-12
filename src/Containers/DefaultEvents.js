import React, {Component} from 'react';
import DefaultEvent from '../Components/Events/DefaultEvent';

class DefaultEvents extends Component {
    render() {
        const eventProps ={
            id:Math.floor(Math.random()*30),
            caption:'',
            captionFull: '',
            title:'Title',
            location:'Location',
            description: 'This event will be awesome...',
            descriptionFull: 'Full Description'
        };

        return (
            <div className="DefaultEvents">
                <h3>All events</h3>
                <DefaultEvent eventProps={eventProps} />
            </div>
        );
    }
}

export default DefaultEvents;
