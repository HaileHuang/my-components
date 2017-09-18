import React, { Component, PropTypes } from 'react';
import '../style/StretchNav.css';


class StretchNav extends Component {

  constructor(props) {
    super(props);
    this.handleMore = this.handleMore.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      expand: true,
      needMore: false,
      activeItem: null,
    };
  }

  static propTypes = {
    lists: PropTypes.array,
    onClick: PropTypes.func,
  }

  componentDidMount() {
    console.log(this.refs.nav.clientHeight);
    if (!this.state.needMore && this.refs.nav.clientHeight > 30) {
      this.setState({needMore: true});
    }
  }

  componentDidUpdate() {
    console.log(this.refs.nav.clientHeight);
    if (!this.state.needMore && this.refs.nav.clientHeight > 30) {
      this.setState({needMore: true});
    }
  }

  handleMore() {
    this.setState({
      expand: !this.state.expand,
    })
  }

  handleClick(i, e) {
    this.setState({
      activeItem: i,
    })
  }

  render() {
    const { lists } = this.props;
    return (
      <div className="nav-warp">
        <ul className={this.state.expand ? "nav-lists clearfix" : "nav-lists nav-list-shrink"} ref="nav">
        {
          lists.map((list, i) => {
            return <li key={i} className={this.state.activeItem === i ? "active" : ""} onClick={this.handleClick.bind(this, i)}>{list}</li>
          })
        }
        </ul>
        {
          this.state.needMore ?
          <button onClick={this.handleMore}>{this.state.expand ? "收起" : "更多"}</button> : null
        }
      </div>
    )
  }
}

export default (StretchNav);
