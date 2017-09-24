import React, { Component, PropTypes } from 'react';
import '../../style/StretchNav.css';
import Utils from '../Utils';


const selectDecorator = (WrappedComponent) => {
  class SelectDecorator extends Component {
    static displayName = `HOC${Utils.getDisplayName(WrappedComponent)}`;
    constructor(props) {
      super(props);
      this.handleSelect = this.handleSelect.bind(this);
      this.onClickHeader = this.onClickHeader.bind(this);
      this.state = {
        selectedItem: '',
        searchInputShow: false,
        listShow: false, 
      };
    }

    handleSelect(item) {
      this.setState({
        selectedItem: item,
        searchInputShow: false,
        listShow: false, 
      });
    }

    onClickHeader() {
      this.setState({
        searchInputShow: true,
        listShow: true,
      })
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props}
          selectedItem={this.state.selectedItem}
          handleSelect={this.handleSelect}
          onClickHeader={this.onClickHeader}
          searchInputShow={this.state.searchInputShow}
          listShow={this.state.listShow}
        />
      )
    }
  }

  return SelectDecorator;
}



export default (selectDecorator);
