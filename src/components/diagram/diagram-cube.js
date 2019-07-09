import React from 'react';
import PropTypes from 'prop-types';
import { Bemify, bemify } from '@scipe/ui';

export default class DiagramCube extends React.Component {
  static propTypes = {
    active: PropTypes.bool
  };
  static defaultProps = {
    active: false
  };

  constructor(props) {
    super(props);
    this.state = {
      showGrid: false
    };
  }
  static propTypes = {
    animate: PropTypes.bool
  };

  handleClick() {
    this.setState({ showGrid: !this.state.showGrid });
  }
  render() {
    const bem = bemify('diagram-cube');
    return (
      <div
        className={bem`${this.props.active ? '--active' : ''}`}
        onClick={() => {
          this.handleClick();
        }}
      >
        <img
          src="/images/diagram/cube-shadow.svg"
          className={bem`__shadow-img`}
        />
        <img src="/images/diagram/cube-bg.svg" className={bem`__bg-img`} />
        <img
          src="/images/diagram/cube-wireframe.svg"
          className={bem`__frame-img`}
        />

        <div className={bem`__grids`}>
          <img
            src="/images/diagram/cube-gd-1.svg"
            className={bem`__gd-img __gd-img--1`}
          />
          <img
            src="/images/diagram/cube-gd-2.svg"
            className={bem`__gd-img __gd-img--2`}
          />
          <img
            src="/images/diagram/cube-gd-3.svg"
            className={bem`__gd-img __gd-img--3`}
          />
          <img
            src="/images/diagram/cube-gd-4.svg"
            className={bem`__gd-img __gd-img--4`}
          />
          <img
            src="/images/diagram/cube-gd-5.svg"
            className={bem`__gd-img __gd-img--5`}
          />
        </div>
      </div>
    );
  }
}
