import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './contactbox.css';

class ContactBox extends PureComponent {
    render() {
        return (
            <div className="contact-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <strong>Kickstart a project with us today</strong>
                            <p>We get your ecommerce channels up and running quickly.</p>
                        </div>
                        <div className="col-lg-4">
                            <Link to="/company" className="button white medium bordered-bot " target="_self">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactBox;
