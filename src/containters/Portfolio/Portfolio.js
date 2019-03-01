import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OurClients from '../../components/OurClients/OurClients';

class Portfolio extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <OurClients/>
        <Footer/>
      </div>
    );
  }
}

export default Portfolio;
