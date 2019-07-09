import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { arrayify } from '@scipe/jsonld';
import { BemTags } from '@scipe/ui';
import A from './a';

export default class ActionSpec extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    instantiated: PropTypes.bool,
    scope: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]), // the @type of the scope (Graph, Periodical, Organization, ...)
    spec: PropTypes.object // {[prop]: { @type: , value }} `value` can take special parameters (see renderValue). If it's a list => One of ...
  };

  static defaultProps = {
    spec: {}
  };

  renderType(propSpec = {}) {
    const { '@type': type } = propSpec;

    return type.startsWith('@') ? type : <A>{type}</A>;
  }

  renderValue(propSpec = {}) {
    const { value } = propSpec;

    if (Array.isArray(value)) {
      return (
        <Fragment>
          One of{' '}
          <ul>
            {arrayify(value).map(value => (
              <li key={value}>
                <code>{`"${value}"`}</code>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    }

    switch (value) {
      case 'duration':
        return (
          <Fragment>
            A duration specified using the{' '}
            <a href="https://en.wikipedia.org/wiki/ISO_8601">
              ISO 8601 duration format
            </a>
          </Fragment>
        );

      case 'dateTime':
        return (
          <Fragment>
            A combination of date and time specified using the{' '}
            <a href="https://en.wikipedia.org/wiki/ISO_8601">
              ISO 8601 date time format
            </a>
          </Fragment>
        );

      case 'userId': {
        return (
          <Fragment>
            The <code>@id</code> of a registered user
          </Fragment>
        );
      }

      case 'graphId': {
        return (
          <Fragment>
            The <code>@id</code> of a <A>Graph</A>
          </Fragment>
        );
      }

      case 'periodicalId': {
        return (
          <Fragment>
            The <code>@id</code> of a <A>Periodical</A>
          </Fragment>
        );
      }

      case 'organizationId': {
        return (
          <Fragment>
            The <code>@id</code> of an <A>Organization</A>
          </Fragment>
        );
      }

      case 'serviceId': {
        return (
          <Fragment>
            The <code>@id</code> of an <A>Service</A>
          </Fragment>
        );
      }

      case 'contactPointId': {
        return (
          <Fragment>
            The <code>@id</code> of an <A>ContactPoint</A>
          </Fragment>
        );
      }

      case 'publicationTypeId': {
        return (
          <Fragment>
            The <code>@id</code> of a <A>PublicationType</A>
          </Fragment>
        );
      }

      case 'workflowSpecificationId':
      case 'workflowId': {
        return (
          <Fragment>
            The <code>@id</code> of a <A>WorkflowSpecification</A>
          </Fragment>
        );
      }

      case 'questionId': {
        return (
          <Fragment>
            The <code>@id</code> of a <A>Question</A>
          </Fragment>
        );
      }

      case 'inviteActionId': {
        return (
          <Fragment>
            The <code>@id</code> of an <A>InviteAction</A>
          </Fragment>
        );
      }

      case 'scopeRoleId': {
        const scopes = arrayify(this.props.scope);

        return (
          <Fragment>
            A <code>@id</code> listed in the scope (<ul className="sa__inline-list">
              {scopes.map(scope => (
                <li key={scope}>
                  <A>{scope}</A>
                </li>
              ))}
            </ul>) of the action
          </Fragment>
        );
      }

      case 'audience':
        return (
          <Fragment>
            An object with:{' '}
            <ul>
              <li>
                <code>@type</code>: <code>{`"Audience"`}</code>
              </li>
              <li>
                <A>audienceType</A>: one of <code>{`"author"`}</code>,{' '}
                <code>{`"reviewer"`}</code>, <code>{`"editor"`}</code>,{' '}
                <code>{`"producer"`}</code>
              </li>
              <li>
                Any other properties of the <A>Audience</A> class (optional)
              </li>
            </ul>
          </Fragment>
        );

      case 'workflowActionId':
        return (
          <Fragment>
            The <code>@id</code> of an <A>Action</A> part of the editorial
            workflow.
          </Fragment>
        );

      case 'releaseId':
        return (
          <Fragment>
            The <code>@id</code> of a release (versioned <A>Graph</A>),
            including the <code>version</code> query string parameter (e.g.{' '}
            <pre>
              <code>graph:graphId?version=1.0.0-pre</code>
            </pre>).
          </Fragment>
        );

      default:
        return typeof value === 'string' ? (
          <code>{value.charAt(0) === '@' ? value : `"${value}"`}</code>
        ) : (
          value
        );
    }
  }

  render() {
    const bem = new BemTags('@sa', '@documentation');
    const { id, type, instantiated, spec } = this.props;

    const props = Object.keys(spec).sort();

    return (
      <table id={id} className={bem`@__table`}>
        <caption>
          Required properties and expected values needed to POST{' '}
          {/^([aeiou])/i.test(type) ? 'an' : 'a'} “{type}”
        </caption>
        <thead>
          <tr>
            <th>Property</th>
            <th>Expected Type</th>
            <th>Expected value</th>
          </tr>
        </thead>
        <tbody>
          {!!instantiated && (
            <tr>
              <td>
                <code>@id</code>
              </td>
              <td>-</td>
              <td>
                The <code>@id</code> of an instance of the action, as
                instantiated during an editorial workflow stage
              </td>
            </tr>
          )}
          <tr>
            <td>
              <code>@type</code>
            </td>
            <td>-</td>
            <td>{`"${type}"`}</td>
          </tr>
          {props.map(prop => (
            <Fragment key={prop}>
              <tr>
                <td rowSpan={arrayify(spec[prop]).length}>
                  <A>{prop}</A>
                </td>
                <td>{this.renderType(arrayify(spec[prop])[0])}</td>
                <td>{this.renderValue(arrayify(spec[prop])[0])}</td>
              </tr>
              {arrayify(spec[prop])
                .slice(1)
                .map(propSpec => (
                  <tr key={propSpec['@type']}>
                    <td>{this.renderType(propSpec)}</td>
                    <td>{this.renderValue(propSpec)}</td>
                  </tr>
                ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    );
  }
}
