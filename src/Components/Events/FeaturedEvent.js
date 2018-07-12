import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'


const featureEvent = (props) => {
        return (
            <section className="FeatureEvent">
                <img className="event--caption__small" src={props.caption} alt="Avatar" />
                <article className="event--default--container">
                    <h4 className="event--title">{props.eventProps.title}</h4>
                    <h6 className="event--location">{props.eventProps.location}</h6>
                    <p className="event--description__short">{ props.eventProps.body}</p>
                    <Link to={"/event/" + props.eventProps.id}>read more...</Link>

                </article>
            </section>

        );

};

export default withRouter(featureEvent);
