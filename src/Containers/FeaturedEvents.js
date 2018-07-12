import React, {Component} from 'react';
import FeatureEvent from '../Components/Events/FeaturedEvent';
import axios from 'axios';

class FeaturedEvents extends Component {
    state = {
        events: []

    };

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                (response) => {
                    const events = response.data.slice(0, 6);

                    const updatedEvents = events.map(event => {
                        return {
                            ...event,
                            location: 'Denmark'
                        };
                    });
                    this.setState({events: updatedEvents});
                }
            );
    }

    render() {
        const events = this.state.events.map(
            event => {

                return <FeatureEvent key={event.id} eventProps={event} match={this.props.match}/>;

            });

        return (
            <section className="FeaturedEvents">

                {events}
            </section>
        );
    }
}

export default FeaturedEvents;
