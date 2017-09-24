import React, { Component, PropTypes } from 'react';
import '../style/StretchNav.css';


class SearchInput extends Component {

  static displayName = 'SearchInput';
  
  handleChange(e) {
    let value = e.target.value;
    this.props.onSearch(value);
  }

  render() {
    const { keyword, onSearch, searchInputShow } = this.props;
    return (
      <div className="search-input">
      {
        searchInputShow ?
        <input
          type="text"
          autoFocus
          value={keyword}
          onChange={this.handleChange.bind(this)}
        /> : null
      }
      </div>
    )
  }
}

export default (SearchInput);
