import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Users from './components/Users';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Users/>
        <Footer/>
      </div>
    );
  }
}

export default App;
