import React, {Component} from 'react';
import FeatureEvent from '../Components/Events/FeaturedEvent';

class FeaturedEvents extends Component {
    render() {
        return (
            <div className="FeaturedEvents">
                <h3>Featured events</h3>
                <FeatureEvent/>
            </div>
        );
    }
}

export default FeaturedEvents;
