import React, {Component} from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Search from '../Components/Search/Search';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <p>Header here</p>
                <Navigation/>
                <Search/>
            </header>
        );
    }
}

export default Header;