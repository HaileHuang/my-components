import React, { Component, PropTypes } from 'react';
import '../style/SearchSelect.css';


class List extends Component {

  static displayName = 'List';

  handleClick(item) {
    this.props.handleSelect(item);
  }

  render() {
    const { options, listShow } = this.props;
    return (
      <div className="list-options">
      {
        listShow ? 
        <ul>
        {
          options.map((item, key) => {
            return <li key={key} onClick={this.handleClick.bind(this, item)}>{item}</li>
          })
        }
        </ul> : null
      }
       
      </div>
    )
  }
}

export default (List);
