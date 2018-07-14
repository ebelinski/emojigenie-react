import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { actionTypes } from './redux';
import copy from 'clipboard-copy';
import ReactTooltip from 'react-tooltip';
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
