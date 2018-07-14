import React, { Component } from 'react';
import './Footer.css';

export default class FooterAbout extends Component {
  constructor() {
    super()
    this.state = {
      aboutIsHidden: true
    }
  }

  render() {
    return (
      <div className="togglable-content">
        Hello World!
      </div>
    );
  }
}