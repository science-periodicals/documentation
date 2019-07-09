import React from 'react';
import PropTypes from 'prop-types';
import { bemify } from '@scipe/ui';
import DiagramRightArrow from './diagram-right-arrow';

export default class DiagramUser extends React.Component {
  static propTypes = {
    active: PropTypes.bool
  };
  static defaultProps = {
    active: false
  };

  render() {
    const bem = bemify('diagram-user');
    return (
      <div className={bem`${this.props.active ? '--active' : ''}`}>
        <div className={bem`__docs`}>
          <img src="/images/diagram/author-cc.svg" className={bem`__cc-img`} />
          <img src="/images/diagram/public-ms.svg" className={bem`__ms-img`} />
          <img
            src="/images/diagram/author-panel.svg"
            className={bem`__author-panel`}
          />
        </div>

        <div className={bem`__arrow`}>
          <DiagramRightArrow animate={this.props.active} />
        </div>
      </div>
    );
  }
}
