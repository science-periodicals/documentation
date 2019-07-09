import React from 'react';
import PropTypes from 'prop-types';
import { Bemify, bemify } from '@scipe/ui';

export default class DiagramLeftArrow extends React.Component {
  static propTypes = {
    animate: PropTypes.bool
  };

  render() {
    const bem = bemify('diagram-left-arrow');
    return (
      <div className={bem` ${this.props.animate ? '--animate' : ''}`}>
        <div className={bem`__mask`}>
          <img src="/images/diagram/arrow-left.svg" className={bem`__img`} />
        </div>
      </div>
    );
  }
}
