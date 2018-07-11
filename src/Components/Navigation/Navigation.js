import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="App-main-navigation">
                <ul>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
