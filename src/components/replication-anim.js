import React, { Component } from 'react';

import PropTypes from 'prop-types';

const baseWidth = 512;
const baseHeight = 384;
const pointCoords = [[145, 113], [252, 214], [286, 185], [406, 149]];

let requestAnimationFrame =
  global.requestAnimationFrame ||
  global.webkitRequestAnimationFrame ||
  global.mozRequestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 1000 / 60);
  };

let animate = function(handle) {
  handle();
  requestAnimationFrame(() => {
    animate(handle);
  });
};

export default class ReplicationAnim extends Component {
  constructor() {
    super();
    this.state = {
      arcRadii: [[2], [2], [2], [2]]
    };
  }

  componentDidMount() {
    let ctx = this.canvas.getContext('2d');
    animate(() => {
      this.loop(ctx);
    });

    // periodically add new waves
    this._addWavefrontTimer = setInterval(this.addWavefront.bind(this), 1750);
  }

  componentWillUnmount() {
    clearInterval(this._addWavefrontTimer);
  }

  loop(ctx) {
    ctx.clearRect(0, 0, this.props.width, this.props.height);
    let arcRadii = this.state.arcRadii;

    for (let i = 0; i < arcRadii.length; i++) {
      for (let j = 0; j < arcRadii[0].length; j++) {
        // decrease alpha channel
        let alpha =
          Math.max(0, this.props.height - 4 * arcRadii[i][j]) /
          this.props.height;

        // draw arc
        this.drawArc(ctx, pointCoords[i], arcRadii[i][j], alpha);

        // increase radii
        // animation speed changed here
        arcRadii[i][j] *= 1.0075;
      }
    }
  }

  drawArc(ctx, coord, r, alpha) {
    ctx.beginPath();
    ctx.arc(
      coord[0] * (this.props.width / baseWidth),
      coord[1] * (this.props.height / baseHeight),
      r,
      15 * (Math.PI / 12),
      21 * (Math.PI / 12),
      false
    );
    // console.log('a', 14.0 * (1.0 - alpha));
    ctx.lineWidth = 8.0 * (1.0 - alpha);
    ctx.strokeStyle = `rgba(100, 100, 100, ${alpha})`;
    ctx.stroke();
  }

  addWavefront() {
    let arcRadii = this.state.arcRadii;

    for (let i = 0; i < arcRadii.length; i++) {
      arcRadii[i].push(2);

      // max 10 wavefronts at once
      if (arcRadii[i].length > 10) {
        arcRadii[i].shift();
      }
    }

    this.setState({ arcRadii });
  }

  render() {
    const { height, width } = this.props;

    return (
      <canvas
        ref={n => (this.canvas = n)}
        id="replication-animation"
        width={width}
        height={height}
        style={{ position: 'absolute' }}
      />
    );
  }
}

ReplicationAnim.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

ReplicationAnim.defaultProps = {
  height: 384,
  width: 512
};
