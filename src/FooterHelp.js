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
        
        <p className="question">I can't see some of these emojis!</p>

        <p>The way emojis are displayed is heavily dependent on your operating system. I designed EmojiGenie work fairly well on macOS. Other operating systems may not have as many emojis.</p>
        
        <p className="question">I expected a certain emoji to show up when I searched for it, but it didn't.</p>

        <p>Please let me know what you searched and which emoji you expected, and I can add it! Contact me on <a href="https://twitter.com/EugeneBelinski">Twitter</a> or via another method on <a href="https://ebelinski.com/">my website</a>. Or if you are familiar with GitHub, submit a pull request to the <a href="https://github.com/ebelinski/emojigenie-react">repo</a>!</p>
        
        <p className="question">I found a problem not listed here.</p>

        <p>Feel free to <a href="https://github.com/ebelinski/emojigenie-react/issues/new">open an issue</a> in the GitHub repository! Please include your operating system, your browser, and how the problem can be replicated.</p>
      </div>
    );
  }
}