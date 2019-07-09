import React from 'react';
import { SchemaLink } from '@scipe/ui';

export default class A extends React.Component {
  render() {
    return (
      <code>
        <SchemaLink {...this.props} />
      </code>
    );
  }
}
