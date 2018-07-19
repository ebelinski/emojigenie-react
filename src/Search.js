import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css';
import { actionTypes } from './redux';
import { isMobile } from 'react-device-detect';

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
    const placeholder = isMobile ? "Find your dream emoji..." 
                                 : "Find the emoji of your dreams...";

    return (
      <div className="Search">
        <input 
          placeholder={placeholder}
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
