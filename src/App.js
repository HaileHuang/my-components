import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from './components/Modal';
import StretchNav from './components/StretchNav';
import Selector from './components/Selector';
import selectDecorator from './components/HOC/SelectDecorator';

const EnhanceSlector = selectDecorator(Selector);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {active1: false, active2: false};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <EnhanceSlector />
        
      </div>
    );
  }
}

export default App;
