import React, { Component, PropTypes } from 'react';
import '../style/StretchNav.css';


class Selector extends Component {

  static displayName = 'Selector';

  getChildrens() {
    return React.Children.map(this.props.children, (child) => {
      if (!child) { return; }
      return React.cloneElement(child, {...this.props});
    });
  }
  render() {
    return (
      <div>
      {this.getChildrens()}
      </div>
    )
  }
}

export default (Selector);
