import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav className="App-main-navigation">
                <ul>
                    <li><Link to="/login">Log in</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
