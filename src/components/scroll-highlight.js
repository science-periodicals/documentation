import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ScrollHighlight extends Component {
  static propTypes = {
    elementType: PropTypes.string,
    zoneTop: PropTypes.number,
    zoneBottom: PropTypes.number,
    children: PropTypes.any
  };

  static defaultProps = {
    elementType: 'span',
    zoneTop: 0.25,
    zoneBottom: 0.25
  };

  constructor(props) {
    super(props);
    this.state = {
      showMe: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.ref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (!this.ref.current) {
      return;
    }

    // see if element is on the screen
    let myRect = this.ref.current.getBoundingClientRect();
    const topThreshold =
      document.documentElement.clientHeight * this.props.zoneTop;
    const bottomShreshold =
      document.documentElement.clientHeight -
      document.documentElement.clientHeight * this.props.zoneBottom;

    if (
      (myRect.bottom < bottomShreshold && myRect.top >= topThreshold) ||
      (myRect.height > document.documentElement.clientHeight &&
        myRect.top >= topThreshold)
    ) {
      this.setState({ showMe: true });
    } else {
      this.setState({ showMe: false });
    }
  }

  render() {
    return (
      <this.props.elementType
        className={`scroll-highlight ${
          this.state.showMe
            ? 'scroll-highlight--active'
            : 'scroll-highlight--inactive'
        }`}
        ref={this.ref}
      >
        {this.props.children}
      </this.props.elementType>
    );
  }
}
