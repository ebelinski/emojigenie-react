import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { actionTypes } from './redux';

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

class App extends Component {
  handleChange(event) {
    this.props.filterEmojis(event.target.value);
  }

  render() {
    const {query, emojis, filteredEmojis} = this.props;

    const emojisToUse = query ? filteredEmojis : emojis;

    const emojiItems = emojisToUse.map((emoji) => 
      <span 
        role="img"
        aria-label={emoji.name}
        className="emoji">
        {emoji.char}
      </span>
    );

    return (
      <div className="content">
        <h1>EmojiGenie <span role="img" aria-label="woman genie">🧞‍♀️</span></h1>
        <div>
          <input 
            type="text" 
            ref={(input) => { this.queryInput = input; }}
            value={this.props.query}
            onChange={this.handleChange.bind(this)} />
        </div>
        <div className="emojis">{emojiItems}</div>
      </div>
    );
  }

  componentDidMount() {
    this.queryInput.focus();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
