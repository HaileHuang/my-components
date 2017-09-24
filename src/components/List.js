import React, { Component, PropTypes } from 'react';
import '../style/StretchNav.css';


class List extends Component {

  static displayName = 'List';

  handleClick(item) {
    this.props.handleSelect(item);
  }

  render() {
    const { options, listShow } = this.props;
    return (
      <div>
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
