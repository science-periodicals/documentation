import React from 'react';
import PropTypes from 'prop-types';
import { bemify } from '@scipe/ui';
import DiagramRightArrow from './diagram-right-arrow';

export default class DiagramPublic extends React.Component {
  static propTypes = {
    active: PropTypes.bool
  };
  static defaultProps = {
    active: false
  };

  render() {
    const bem = bemify('diagram-public');
    return (
      <div className={bem`${this.props.active ? '--active' : ''}`}>
        <div className={bem`__arrow`}>
          <DiagramRightArrow animate={this.props.active} />
        </div>
        <div className={bem`__docs`}>
          <img
            src="/images/diagram/public-data.svg"
            className={bem`__data-img`}
          />
          <img src="/images/diagram/public-ms.svg" className={bem`__ms-img`} />
          <img
            src="/images/diagram/public-patron.svg"
            className={bem`__patron-img`}
          />
        </div>
      </div>
    );
  }
}
