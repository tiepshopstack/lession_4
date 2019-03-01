import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class ContactUs extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <p>Contact us</p>
        <Footer/>
      </div>
    );
  }
}

export default ContactUs;
