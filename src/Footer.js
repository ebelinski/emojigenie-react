import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        Created and maintained by <a href="https://twitter.com/EugeneBelinski">Eugene <span role="img" aria-label="man technologist">👨🏻‍💻</span></a>.
      </div>
    );
  }
}