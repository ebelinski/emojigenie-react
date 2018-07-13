import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = state => ({
  emojis: state.emojis
});

const mapDispatchToProps = dispatch => ({
});

class App extends Component {

  render() {
    const {emojis} = this.props;

    const emojiItems = emojis.map((emoji) => <span>{emoji.emoji}</span>);

    return (
      <div className="content">
        {emojiItems}
      </div>
    );
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
(App);
