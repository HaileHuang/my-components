import React, { Component, PropTypes } from 'react';
import Overlay from './Overlay';
import '../style/Overlay.css';


class Modal extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    onOverlayClick: PropTypes.func,
  }
  stopBubble = (e) => {
    e.stopPropagation();
  }
  render() {
    return (
      this.props.active ?
      <Overlay
        active={this.props.active}
        onClick={this.props.onOverlayClick}
      >
        <div className="hp-modal" onClick={this.stopBubble}>
          {this.props.children}
        </div>
      </Overlay> : <div></div>
    )
  }
}

export default (Modal);
