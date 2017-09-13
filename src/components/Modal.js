import React, { Component, PropTypes } from 'react';
import Overlay from './Overlay';
import '../style/Modal.css';


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
    const { active, children, onOverlayClick } = this.props;
    return (
      this.props.active ?
      <Overlay
        active={active}
        onClick={onOverlayClick}
      >
        <div className="hp-modal" onClick={this.stopBubble}>
          {children}
        </div>
      </Overlay> : null
    )
  }
}

export default (Modal);
