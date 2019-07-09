import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import A from './a';

export default class ObjectSpec extends React.Component {
  static propTypes = {
    spec: PropTypes.object,
    others: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.element
    ])
  };

  renderOthers() {
    const { spec, others } = this.props;

    if (others === true || typeof others === 'string') {
      return (
        <li>
          Any other properties of the{' '}
          <A>{typeof others === 'string' ? others : spec['@type']}</A> class
        </li>
      );
    }
    if (typeof others === 'object') {
      return <li>{others}</li>;
    }

    return null;
  }

  render() {
    const { spec, others } = this.props;

    const keys = Object.keys(spec).sort((a, b) => {
      if (a === '@id') {
        return -1;
      }
      if (a === '@id' && b === '@type') {
        return -1;
      }
      if (a === '@type' && b === '@id') {
        return 1;
      }
      if (a === '@type') {
        return -1;
      }
      return a.localeCompare(b);
    });

    return (
      <Fragment>
        <p>An object with:</p>
        <ul>
          {keys.map(key => (
            <li key={key}>
              <code>{key.startsWith('@') ? key : <A>{key}</A>}</code>:{' '}
              {typeof spec[key] === 'string' &&
              spec[key] !== 'required' &&
              spec[key] !== 'optional' &&
              !spec[key].startsWith('(')
                ? `"${spec[key]}"`
                : spec[key]}
            </li>
          ))}
          {others ? this.renderOthers() : null}
        </ul>
      </Fragment>
    );
  }
}
