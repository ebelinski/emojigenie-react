import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';
import { actionTypes } from './redux';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  filterEmojis: (query) => dispatch ({
    type: actionTypes.QUERY,
    query: query
  })
});

class Search extends Component {
  handleChange(event) {
    this.props.filterEmojis(event.target.value);
  }

  render() {
    return (
      <div class="Search">
        <input 
          placeholder="Find the emoji of your dreams..."
          type="text" 
          ref={(input) => { this.queryInput = input; }}
          value={this.props.query}
          onChange={this.handleChange.bind(this)} />
      </div>
    );
  }

  componentDidMount() {
    this.queryInput.focus();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
