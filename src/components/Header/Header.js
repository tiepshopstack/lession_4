import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from './shopstack-logo.png';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 companyPhone">
                                <p>Call : (+66) 86-613-2807</p>
                            </div>
                            <div className="col-lg-6 social_link">
                                <ul className="nav fa-pull-right">
                                    <li className="nav-item"><a className="nav-link"
                                                                href="https://www.facebook.com/shopstack/"><i
                                        className="fab fa-facebook"/></a></li>
                                    <li className="nav-item"><a className="nav-link"
                                                                href="https://www.linkedin.com/company/shopstack-company/"><i
                                        className="fab fa-linkedin"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 logo">
                                <img src={Logo} alt="logo" className="logo"/>
                            </div>
                            <div className="col-lg-9 menu">
                                <ul id="nav">
                                    <li className="menu-item"><Link to="/" data-description="Home">Home</Link></li>
                                    <li className="menu-item"><Link to="/company" data-description="Company">Company</Link></li>
                                    <li className="menu-item"><Link to="/portfolio" data-description="">Portfolio</Link></li>
                                    <li className="menu-item"><Link to="/contact-us" data-description="connect now">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
