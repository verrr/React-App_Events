import React, {Component} from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Search from '../Components/Search/Search';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Link to="/" className='App-title'>Event app prototype</Link>
                <Navigation/>
                <Search/>
            </header>
        );
    }
}

export default Header;
