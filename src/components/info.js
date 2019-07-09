import React from 'react';
import PropTypes from 'prop-types';
import { BemTags } from '@scipe/ui';

export default class Info extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <aside
        className={
          bem`info` + ` ${this.props.className ? this.props.className : ''}`
        }
      >
        {this.props.children}
      </aside>
    );
  }
}

Info.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};
