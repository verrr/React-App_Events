import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class DefaultEvent extends Component {
    render() {
        return (
            <div className="DefaultEvent">
                <img src="img_avatar.png" alt="Avatar" />
                <div className="event--default--container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <Link to="/event">Read more</Link>

                </div>
            </div>
        );
    }
}
//TODO: pass state props to link
export default DefaultEvent;
