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

    const emojiItems = emojisToUse.map((emoji) => <div className="emoji">{emoji.emoji}</div>);

    return (
      <div className="content">
        <div>
          <input 
            type="text" 
            value={this.props.query}
            onChange={this.handleChange.bind(this)} />
          </div>
        {emojiItems}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
