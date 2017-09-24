import React, { Component, PropTypes } from 'react';
import '../style/SearchSelect.css';


class SelectInput extends Component {

  static displayName = 'SelectInput';
  
  render() {
    const { selectedItem, onClickHeader, placeholder } = this.props;
    return (
      <div onClick={onClickHeader} className="select-input">
        <input
          type="text"
          disabled
          value={selectedItem}
          placeholder={placeholder}
        />
        <div className="triangle-down"></div>
      </div>
    )
  }
}

export default (SelectInput);
