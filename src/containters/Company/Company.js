import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Company extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <p>Company</p>
        <Footer/>
      </div>
    );
  }
}

export default Company;
