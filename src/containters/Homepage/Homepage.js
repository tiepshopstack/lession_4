import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import ContactBox from '../../components/ContactBox/ContactBox';
import Service from '../../components/Service/Service';
import Device from '../../components/Device/Device';
import Information from '../../components/Information/Information';
import OurClients from '../../components/OurClients/OurClients';
import Footer from '../../components/Footer/Footer';


class Homepage extends Component {
  render() {
    return (
      <div className="page-home">
        <Header />
        <Banner />
        <ContactBox />
        <Service />
        <Device/>
        <Information/>
        <OurClients/>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
