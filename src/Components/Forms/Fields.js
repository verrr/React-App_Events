import React, {Component} from 'react';

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case('input'):
            inputElement = <input className="inputElement" {...props}/>;
            break;
        case('textarea'):
            inputElement = <textarea className="inputElement" {...props}/>;
            break;
        default:
            inputElement = <input className="inputElement" {...props}/>;

        }

    return (

        <div>
            <label className="inputLabel">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;
