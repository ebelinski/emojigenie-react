import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>
          EmojiGenie <span role="img" aria-label="woman genie">🧞‍♀️</span>
        </h1>
      </div>
    );
  }
}
