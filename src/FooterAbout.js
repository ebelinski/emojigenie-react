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
        <p>EmojiGenie was created in July 2018 by <a href="https://ebelinski.com">me</a> because I got sick of spending so much time finding the right emoji.</p>
      </div>
    );
  }
}