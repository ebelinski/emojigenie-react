import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Genie.css';
import { actionTypes } from './redux';
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
  filterEmojis: (query) => dispatch ({
    type: actionTypes.QUERY,
    query: query
  })
});

class Genie extends Component {
  handleChange(event) {
    this.props.filterEmojis(event.target.value);
  }

  handleEmojiClick(event) {
    const emoji = event.target.innerText;
    copy(emoji);
    notify.show("Copied " + emoji, 
                "custom",
                2000,
                { background: "#666", text: "#fff" });
  }

  render() {
    const {query, emojis, filteredEmojis} = this.props;

    const emojisToUse = query ? filteredEmojis : emojis;

    var emojiItems = emojisToUse.map((emoji) => {
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
      <div className="Genie">
        <Notifications />
        <div id="input-container">
          <input 
            placeholder="EmojiGenie 🧞‍♀️"
            type="text" 
            ref={(input) => { this.queryInput = input; }}
            value={this.props.query}
            onChange={this.handleChange.bind(this)} />
        </div>
        <div className="emojis">{emojiItems}</div>
        {isMobile ? null : <ReactTooltip />}
      </div>
    );
  }

  componentDidMount() {
    this.queryInput.focus();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genie);
