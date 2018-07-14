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
        <h2>Help</h2>
        
        <p class="question">I can't see some of these emojis!</p>

        <p>The way emojis are displayed is heavily dependent on your operating system. I designed EmojiGenie work fairly well on macOS. Other operating systems may not have as many emojis.</p>
      </div>
    );
  }
}