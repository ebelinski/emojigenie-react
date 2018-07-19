import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Genie from './Genie';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Genie />
        <Footer />
      </div>
    );
  }
}
