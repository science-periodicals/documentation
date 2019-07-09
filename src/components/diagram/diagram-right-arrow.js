import React from 'react';
import PropTypes from 'prop-types';
import { Bemify, bemify } from '@scipe/ui';

export default class DiagramRightArrow extends React.Component {
  static propTypes = {
    animate: PropTypes.bool
  };

  render() {
    const bem = bemify('diagram-right-arrow');
    return (
      <div className={bem` ${this.props.animate ? '--animate' : ''}`}>
        <div className={bem`__mask`}>
          <img src="/images/diagram/arrow-right.svg" className={bem`__img`} />
        </div>
      </div>
    );
  }
}
