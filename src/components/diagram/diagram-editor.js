import React from 'react';
import PropTypes from 'prop-types';
import { bemify } from '@scipe/ui';
import DiagramLeftArrow from './diagram-left-arrow';

export default class DiagramEditor extends React.Component {
  static propTypes = {
    active: PropTypes.bool
  };
  static defaultProps = {
    active: false
  };
  render() {
    const bem = bemify('diagram-editor');
    return (
      <div className={bem`${this.props.active ? '--active' : ''}`}>
        <div className={bem`__arrow`}>
          <DiagramLeftArrow animate={this.props.active} />
        </div>
        <div className={bem`__docs`}>
          <img
            src="/images/diagram/editor-panel.svg"
            className={bem`__editor-panel`}
          />
          <img src="/images/diagram/editor-ms.svg" className={bem`__ms-img`} />
          <img
            src="/images/diagram/reviewer-note.svg"
            className={bem`__note-img-1`}
          />
          <img
            src="/images/diagram/reviewer-note.svg"
            className={bem`__note-img-2`}
          />
        </div>
      </div>
    );
  }
}
