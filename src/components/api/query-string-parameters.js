import React from 'react';
import PropTypes from 'prop-types';

export default class QueryStringParameters extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    const { children } = this.props;

    return (
      <figure className="query-string-parameters">
        <figcaption>Supported query string parameters:</figcaption>
        <dl>{children}</dl>
      </figure>
    );
  }
}
