import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <section className="container footer-in">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="widget">
                                <div className="textwidget">
                                    <div className="vertical-space2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" />
                        <div className="col-md-4" />
                    </div>
                </section>
            </footer>
        );
    }
}

export default Footer;
