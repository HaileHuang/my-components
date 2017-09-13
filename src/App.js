import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from './components/Modal'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {active1: false, active2: false};
  }

  handleOpen1 = () => {
    this.setState({active1: true});
  }

  handleClose1 = () => {
    this.setState({active1: false});
  }

  handleOpen2 = () => {
    this.setState({active2: true});
  }

  handleClose2 = () => {
    this.setState({active2: false});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this.handleOpen1}>this is 1</button>
        <Modal
          active={this.state.active1}
          onOverlayClick={this.handleClose1}
        >
          <div style={{height: 200, width: 200}}>
            <p>this is 1 Modal</p>
            <button onClick={this.handleOpen2}>this is 2</button>
          </div>
        </Modal>

        <Modal
          active={this.state.active2}
          onOverlayClick={this.handleClose2}
        >
          <div style={{height: 100, width: 100}}>
            <p>this is 2 Modal</p>
          </div>
        </Modal>

      </div>
    );
  }
}

export default App;
