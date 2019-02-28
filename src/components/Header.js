import logo from './../logo.svg';
import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img alt="logo" className="App-logo" src={logo}/>
            </div>
        );
    }
}

export default Header;
