import React, { Component, PropTypes } from 'react';
import '../../style/StretchNav.css';
import Utils from '../Utils';


const asyncSelectDecorator = (WrappedComponent) => {
  class AsyncSelectDecorator extends Component {
    static displayName = `HOC${Utils.getDisplayName(WrappedComponent)}`;
    constructor(props) {
      super(props);
      this.handleSearch = this.handleSearch.bind(this);
      this.state = {
        options: [],
      }
    }

    handleSearch(keyword) {
      // This is a Async request
      // const { url, parmas } = this.props;
      // fetch(url, {parmas}).then(data => {
      //   this.setState({
      //     options: data
      //   })
      // })
      let options = [1,2,3,4,5,6,7,8];
      options = options.map((x) => {
        return (x+keyword);
      })
      this.setState({
        options,
      })
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props}
          options={this.state.options}
          onSearch={this.handleSearch}
        />
      )
    }
  }

  return AsyncSelectDecorator;
}



export default (asyncSelectDecorator);
