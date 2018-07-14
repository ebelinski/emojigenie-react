import React, { Component } from 'react';
import './App.css';
import Genie from './Genie';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Genie />
        <Footer />
      </div>
    );
  }
}
