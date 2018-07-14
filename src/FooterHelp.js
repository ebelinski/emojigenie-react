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
        
        <p class="question">I found a problem not listed here.</p>

        <p>Feel free to <a href="https://github.com/ebelinski/emojigenie-react/issues/new">open an issue</a> in the GitHub repository! Please include what your operating system is, your browser, and how the problem can be replicated.</p>
      </div>
    );
  }
}