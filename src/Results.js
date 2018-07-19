import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Results.css';
import copy from 'clipboard-copy';
import ReactTooltip from 'react-tooltip';
import Notifications, {notify} from 'react-notify-toast';
import { isMobile } from 'react-device-detect';

const mapStateToProps = state => ({
  emojis: state.emojis,
  query: state.query,
  filteredEmojis: state.filteredEmojis
});

const mapDispatchToProps = dispatch => ({
});

class Results extends Component {
  handleEmojiClick(event) {
    const emoji = event.target.innerText;
    copy(emoji);
    notify.show("Copied " + emoji, 
                "custom",
                2000,
                { background: "#666", text: "#fff" });
  }

  render() {
    const {query, filteredEmojis} = this.props;

    var emojiItems = filteredEmojis.map((emoji) => {
      var dataTip = emoji.name;
      if (emoji.name.includes("⊛")) {
        dataTip += " — This is a new emoji that your browser may not be able to display!";
      }

      return (<div className="emoji-container"><span 
        data-tip={dataTip}
        role="img"
        key={emoji.name}
        aria-label={emoji.name}
        className="emoji"
        onClick={this.handleEmojiClick.bind(this)}>
        {emoji.char}
      </span></div>)
    });

    if (emojiItems.length === 0) {
      emojiItems = (<div className="no-results">No emojis found.</div>);
    }

    return (
      <div className="Results">
        <Notifications />
        <div className="emojis">{emojiItems}</div>
        {isMobile ? null : <ReactTooltip />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
