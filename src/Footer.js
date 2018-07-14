import React, { Component } from 'react';
import './Footer.css';
import FooterAbout from './FooterAbout';

export const displayableContent = {
  about: 'about'
}

export default class Footer extends Component {
  constructor() {
    super()
    this.state = {
      displayedContent: null
    }
  }

  displayContent(content) {
    this.setState({displayedContent: content})
  }

  render() {
    return (
      <div className="Footer">
        <button onClick={this.displayContent.bind(this, displayableContent.about)}>About</button>
        <span> | </span>
        <a href="https://github.com/ebelinski/emojigenie-react/issues/new">Suggestions</a>
        <span> | </span>
        Created and maintained by <a href="https://twitter.com/EugeneBelinski">Eugene <span role="img" aria-label="man technologist">👨🏻‍💻</span></a>

        {this.state.displayedContent == displayableContent.about ? <FooterAbout /> : null}
      </div>
    );
  }
}