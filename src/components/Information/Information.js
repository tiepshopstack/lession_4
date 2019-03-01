import React, { PureComponent } from 'react';
import './information.css';

class Information extends PureComponent {
    render() {
        return (
            <div className="information-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="f-counter max-counter counted">
                                <i className="far fa-flag" />
                                <span className="max-count">20</span>
                                <span className="suf-counter">+</span>
                                <h5>Key Brands &amp; Clients</h5></div>
                        </div>
                        <div className="col-lg-3">
                            <div className="f-counter max-counter counted">
                                <i className="far fa-flag" />
                                <span className="max-count">20</span>
                                <span className="suf-counter">+</span>
                                <h5>Key Brands &amp; Clients</h5></div>
                        </div>
                        <div className="col-lg-3">
                            <div className="f-counter max-counter counted">
                                <i className="far fa-flag" />
                                <span className="max-count">20</span>
                                <span className="suf-counter">+</span>
                                <h5>Key Brands &amp; Clients</h5></div>
                        </div>
                        <div className="col-lg-3">
                            <div className="f-counter max-counter counted">
                                <i className="far fa-flag" />
                                <span className="max-count">20</span>
                                <span className="suf-counter">+</span>
                                <h5>Key Brands &amp; Clients</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;
