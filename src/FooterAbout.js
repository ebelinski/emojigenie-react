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
        <h2>About</h2>

        <p>EmojiGenie was created in July 2018 by <a href="https://ebelinski.com">me</a> because I like emojis, but I always had trouble finding the right one on my computer. It was launched on the greatest and most important holiday ever envisioned by humanity, World Emoji Day.</p>
      </div>
    );
  }
}