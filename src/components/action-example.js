import React from 'react';
import PropTypes from 'prop-types';
import { SchemaLink as A } from '@scipe/ui';
import JsonldExample from './jsonld-example';

// TODO view result option (add a `result` prop) or really wire to the API ?

export default class ActionExample extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    action: PropTypes.object.isRequired,
    children: PropTypes.any
  };

  render() {
    const { children, action, ...others } = this.props;
    const type = action['@type'] || 'Action';

    return (
      <JsonldExample {...others} data={action} root={false}>
        <div>
          POST <code>/action</code> payload example for{' '}
          {/^([aeiou])/i.test(type) ? 'an' : 'a'} <A>{type}</A>
        </div>
        {children}
      </JsonldExample>
    );
  }
}
