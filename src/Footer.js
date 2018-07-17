import React, { Component } from 'react';
import './Footer.css';
import FooterAbout from './FooterAbout';
import FooterHelp from './FooterHelp';

export const displayableContent = {
  about: 'about',
  help: 'help'
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
    const { displayedContent } = this.state;
    return (
      <div className="Footer">
        <button onClick={this.displayContent.bind(this, displayableContent.about)}>About</button>
        <span> | </span>
        <button onClick={this.displayContent.bind(this, displayableContent.help)}>Help</button>
        <span> | </span>
        <a href="https://github.com/ebelinski/emojigenie-react">Source</a>
        <span> | </span>
        <a href="https://github.com/ebelinski/emojigenie-react/issues/new">Suggestions</a>
        <span> | </span>
        Created and maintained by <a href="https://twitter.com/EugeneBelinski">Eugene <span role="img" aria-label="man technologist">👨🏻‍💻</span></a>

        {displayedContent === displayableContent.about ? <FooterAbout /> : null}
        {displayedContent === displayableContent.help ? <FooterHelp /> : null}
      </div>
    );
  }
}