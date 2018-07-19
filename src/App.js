import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Results />
        <Footer />
      </div>
    );
  }
}
