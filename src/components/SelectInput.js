import React, { Component, PropTypes } from 'react';
import '../style/StretchNav.css';


class SelectInput extends Component {

  static displayName = 'SelectInput';
  
  render() {
    const { selectedItem, onClickHeader, placeholder } = this.props;
    return (
      <div onClick={onClickHeader}>
        <input
          type="text"
          disabled
          value={selectedItem}
          placeholder={placeholder}
        />
      </div>
    )
  }
}

export default (SelectInput);
