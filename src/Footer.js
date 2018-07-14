import React, { Component } from 'react';
import './Footer.css';
import FooterAbout from './FooterAbout';

export default class Footer extends Component {
  constructor() {
    super()
    this.state = {
      aboutIsHidden: true
    }
  }

  render() {
    return (
      <div className="Footer">
        <button onClick={() => this.setState({aboutIsHidden: !this.state.aboutIsHidden})}>About</button> | 
        Created and maintained by <a href="https://twitter.com/EugeneBelinski">Eugene <span role="img" aria-label="man technologist">👨🏻‍💻</span></a>

        {this.state.aboutIsHidden ? null : <FooterAbout />}
      </div>
    );
  }
}