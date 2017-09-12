import React, { Component, PropTypes } from 'react';
import '../style/Overlay.css';

class Overlay extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
  }

  render() {
    const { active, children, onClick } = this.props;
    const zIndex = this.props.zIndex ? this.props.zIndex : 9999;
    return (
      active ? 
      <div className="hp-backdrop" onClick={onClick} style={{zIndex: zIndex}}>
        { children }
      </div> : <div></div>
    )
  }
}

export default Overlay;