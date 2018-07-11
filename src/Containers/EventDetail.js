import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class EventDetail extends Component {
    render() {
        return (
            <div className="EventDetail">
                eventDetail
                <Link to={"/"}>back</Link>
            </div>
        );
    }
}

export default EventDetail;
