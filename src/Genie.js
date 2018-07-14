import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Genie.css';
import { actionTypes } from './redux';
import copy from 'clipboard-copy';
import ReactTooltip from 'react-tooltip';

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
    copy(event.target.innerText);
  }

  render() {
    const {query, emojis, filteredEmojis} = this.props;

    const emojisToUse = query ? filteredEmojis : emojis;

    const emojiItems = emojisToUse.map((emoji) =>
      <span 
        data-tip={emoji.name}
        role="img"
        aria-label={emoji.name}
        className="emoji"
        onClick={this.handleEmojiClick.bind(this)}>
        {emoji.char}
      </span>
    );

    return (
      <div className="Genie">
        <div>
          <input 
            type="text" 
            ref={(input) => { this.queryInput = input; }}
            value={this.props.query}
            onChange={this.handleChange.bind(this)} />
        </div>
      <div className="emojis">{emojiItems}</div>
      <ReactTooltip />
      </div>
    );
  }

  componentDidMount() {
    this.queryInput.focus();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genie);