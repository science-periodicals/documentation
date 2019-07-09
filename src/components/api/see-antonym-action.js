import React from 'react';
import PropTypes from 'prop-types';
import paramCase from 'param-case';

export default class SeeAntonymAction extends React.Component {
  static propTypes = {
    type: PropTypes.string
  };

  render() {
    const { type } = this.props;

    return (
      <p>
        See <a href={`#${paramCase(type)}`}>{type}</a> for the antonym action.
      </p>
    );
  }
}
