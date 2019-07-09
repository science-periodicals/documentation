import React from 'react';
import PropTypes from 'prop-types';
import { Value, Card } from '@scipe/ui';

export default class Legal extends React.Component {
  static propTypes = {
    text: PropTypes.shape({
      '@type': PropTypes.string,
      '@value': PropTypes.string
    })
  };

  render() {
    const { text } = this.props;

    return (
      <Card>
        <article className="legal sa__sans-body-user-type">
          <Value>{text}</Value>
        </article>
      </Card>
    );
  }
}
