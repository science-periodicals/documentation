import React from 'react';
import PropTypes from 'prop-types';
import { bemify } from '@scipe/ui';
import DiagramDownArrow from './diagram-down-arrow';

export default class DiagramWorkflow extends React.Component {
  static propTypes = {
    active: PropTypes.bool
  };
  static defaultProps = {
    active: false
  };

  render() {
    const bem = bemify('diagram-workflow');
    return (
      <div className={bem`${this.props.active ? '--active' : ''}`}>
        <div className={bem`__arrow`}>
          <DiagramDownArrow animate={this.props.active} />
        </div>
        <div className={bem`__docs`}>
          <img
            src="/images/diagram/workflow.svg"
            className={bem`__workflow-img`}
          />
        </div>
      </div>
    );
  }
}
