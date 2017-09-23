import React, { Component, PropTypes } from 'react';
import '../style/StretchNav.css';


class Selector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expand: true,
      needMore: false,
      activeItem: null,
    };
  }

  render() {
    console.log('a');
    return (
      <div>{'haha'}</div>
    )
  }
}

export default (Selector);
