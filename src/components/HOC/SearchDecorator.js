import React, { Component, PropTypes } from 'react';
import '../../style/StretchNav.css';
import Utils from '../Utils';

const searchDecorator = (WrappedComponent) => {
  class SearchDecorator extends Component {
    static displayName = `HOC${Utils.getDisplayName(WrappedComponent)}`;
    constructor(props) {
      super(props);
      this.handleSearch = this.handleSearch.bind(this);
      this.state = {
        keyword: '',
        options: [],
      }
    }

    handleSearch(keyword) {
      this.setState({
        options: this.props.options,
        keyword,
      });
      if(keyword) {
        this.props.onSearch(keyword);
      }
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props}
          keyword={this.state.keyword}
          options={this.state.options}
          onSearch={this.handleSearch}
        />
      )
    }
  }

  return SearchDecorator;
}



export default (searchDecorator);
