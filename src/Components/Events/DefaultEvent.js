import React, {Component} from 'react';

class DefaultEvent extends Component {
    render() {
        return (
            <div className="DefaultEvent">
                <img src="img_avatar.png" alt="Avatar" />
                <div className="event--default--container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <a href="#">Read more</a>
                </div>
            </div>
        );
    }
}

export default DefaultEvent;
