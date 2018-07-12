import React  from 'react';
import {Link} from 'react-router-dom'
import img from '../../assets/img/baloons.jpg';

const defaultEvent = (props) => {

        return (
            <div className="DefaultEvent">
                <img className="event--caption__small" src={img} alt="Avatar" />
                <div className="event--default--container">
                    <h4 className="event--title">{props.eventProps.title}</h4>
                    <h6 className="event--location">{props.eventProps.location}</h6>
                    <p className="event--description__short">{props.eventProps.body}</p>
                    <Link to="/event">read more...</Link>

                </div>
            </div>
        );

};
//TODO: pass state props to link
export default defaultEvent;
