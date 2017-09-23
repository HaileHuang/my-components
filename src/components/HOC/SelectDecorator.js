import React, { Component, PropTypes } from 'react';
import '../../style/StretchNav.css';


const selectDecorator = (WrappedComponent) => {
  class SelectDecorator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        expand: true,
        needMore: false,
        activeItem: null,
      };
    }

    render() {
      console.log('b');
      return (
        <div>
        <h1>hehe</h1>
        <WrappedComponent 
          {...this.props}
        />
        </div>
      )
    }
  }

  return SelectDecorator;
}



export default (selectDecorator);
