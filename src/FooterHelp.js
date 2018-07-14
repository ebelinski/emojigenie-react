import React, { Component } from 'react';
import './Footer.css';

export default class FooterHelp extends Component {
  constructor() {
    super()
    this.state = {
      aboutIsHidden: true
    }
  }

  render() {
    return (
      <div className="togglable-content">
        <p>Halp!</p>
      </div>
    );
  }
}