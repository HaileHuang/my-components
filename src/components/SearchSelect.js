import React, { Component, PropTypes } from 'react';
import recompact from 'recompact'
import List from './List';
import SearchInput from './SearchInput';
import SelectInput from './SelectInput';
import Selector from './Selector';
import selectDecorator from './HOC/SelectDecorator';
import searchDecorator from './HOC/SearchDecorator';
import asyncSelectDecorator from './HOC/AsyncSelectDecorator';

const Enhance = recompact.compose(asyncSelectDecorator, searchDecorator, selectDecorator)(Selector);


class SearchSelect extends Component {

  static displayName = 'SearchSelect';

  render() {
    return (
      <Enhance {...this.props}>
        <SelectInput />
        <SearchInput />
        <List />
      </Enhance>
    )
  }
}

export default (SearchSelect);
