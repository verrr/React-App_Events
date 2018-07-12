import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EventDetail extends Component {
    state = {
        loadedEvent: null
    };

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        if (!this.state.loadedEvent && this.props.match.params.id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                .then(response => {
                    this.setState({loadedEvent: response.data, image:''});
console.log(response.data)
                });
        }

    }

    render() {
        let event;
        if ( this.props.match.params.id ) {
         event = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if(this.state.loadedEvent){
            event = (
                <section className="EventDetail">
                    <h2 className="article--full__title">{this.state.loadedEvent.title}</h2>
                    <h4>{this.state.location}</h4>
                    <article className="article--full__body">
                        {this.state.loadedEvent.body}
                    </article>
                    <Link to={'/'}>back</Link>
                </section>
            )
        }
        return event;
    }
}

export default EventDetail;
