import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { actionTypes } from './redux';

const mapStateToProps = state => ({
  emojis: state.emojis,
  query: state.query
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
    const {emojis} = this.props;

    const emojiItems = emojis.map((emoji) => <span>{emoji.emoji}</span>);

    return (
      <div className="content">
        <input 
          type="text" 
          value={this.props.query}
          onChange={this.handleChange.bind(this)} />
        <p>{emojiItems}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
