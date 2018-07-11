import React, {Component} from 'react';

class FeatureEvent extends Component {
    render() {
        return (
            <div className="FeatureEvent">
                <img src="img_avatar.png" alt="Avatar" />
                    <div className="event--featured--container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                        <a href="#">Read more</a>

                    </div>
            </div>

        );
    }
}

export default FeatureEvent;
