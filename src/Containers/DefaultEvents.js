import React, {Component} from 'react';
import DefaultEvent from '../Components/Events/DefaultEvent';
import axios from 'axios/index';
import img from '../assets/img/baloons.jpg'

class DefaultEvents extends Component {
    state = {
        events: []

    };

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                (response) => {
                    const events = response.data.slice(0, 15);

                    const updatedEvents = events.map(event => {
                        return {
                            ...event,
                            location: 'Denmark'
                        };
                    });
                    this.setState({events: updatedEvents, img: img});
                }
            );
    }

    render() {
        const events = this.state.events.map(
            event => {

                return <DefaultEvent key={event.id}
                                     eventProps={event}
                                     match={this.props.match}/>;

            });

        return (
            <section className="DefaultEvents">
                {events}
            </section>
        );
    }
}

export default DefaultEvents;
