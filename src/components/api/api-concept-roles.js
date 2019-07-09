import React from 'react';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class ApiConceptRoles extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="roles" className={bem`api @__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Roles</h3>

        <p>
          schema.org roles (<A>Role</A>) are used by the API to represent
          additional information about properties.
        </p>

        <p>
          Readers not familiar with the semantics of schema.org roles can
          consult the{' '}
          <a href="http://blog.schema.org/2014/06/introducing-role.html">
            introductory blog post
          </a>
          .
        </p>

        <JsonldExample
          data={{
            '@context': 'https://sci.pe',
            '@id': 'user:peter',
            '@type': 'Person',
            name: 'Dr. Peter Jon Smith',
            memberOf: {
              '@type': 'OrganizationRole',
              memberOf: {
                '@id': 'https://sci.pe',
                '@type': 'Organization'
              },
              startDate: '2020-01-01T21:04:20.262Z'
            }
          }}
        >
          Example of using a Role (here <A>OrganizationRole</A>) to provide
          additional information about the <A>memberOf</A> property (here the{' '}
          <A>startDate</A> of the membership). Note how the <A>memberOf</A>{' '}
          property is repeated within the <A>Role</A> (<A>OrganizationRole</A>{' '}
          here).
        </JsonldExample>

        <section id="persona" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>Persona</h4>

          <p>
            The <TextLogo /> API allow to represent different{' '}
            <a href="https://en.wikipedia.org/wiki/Persona">persona</a> of a{' '}
            <a href="http://schema.org/Person">
              <code>Person</code>
            </a>{' '}
            through the use of <a href="#role">roles</a>.
          </p>

          <JsonldExample
            data={{
              '@context': 'https://sci.pe',
              '@id': 'action:actionId',
              '@type': 'TagAction',
              agent: {
                '@type': 'Role',
                roleName: 'editor',
                agent: {
                  '@id': 'user:jon',
                  '@type': 'Person'
                }
              },
              object: 'graph:graphId',
              result: {
                '@type': 'Tag',
                name: 'Linked data'
              }
            }}
          >
            Example of using roles to specify a persona. Here the <A>agent</A>{' '}
            tagged a <A>Graph</A> <em>as an editor</em> (<A>roleName</A>).
          </JsonldExample>
          <div className={bem`@__table`}>
            <table>
              <caption>
                Supported value of the <A>roleName</A> property
              </caption>
              <thead>
                <tr>
                  <th>
                    <A>roleName</A>
                  </th>
                  <th>
                    <A>description</A>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>user</code>
                  </td>
                  <td>A registered user</td>
                </tr>
                <tr>
                  <td>
                    <code>author</code>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <code>editor</code>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <code>producer</code>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <code>reviewer</code>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <code>vendor</code>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <code>customer</code>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <code>administrator</code>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <code>assigner</code>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <code>subscriber</code>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <code>participant</code>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            If more granularity is needed, the <A>name</A> property of the{' '}
            <A>Role</A> can be used:
          </p>

          <JsonldExample
            data={{
              '@context': 'https://sci.pe',
              '@type': 'Role',
              roleName: 'editor',
              name: 'editor-in-chief',
              agent: 'user:jon'
            }}
          >
            Materializing an editor-in-chief using the <A>name</A> property of
            the role to add more granularity to the <A>roleName</A> (
            <code>editor</code>).
          </JsonldExample>
        </section>
      </section>
    );
  }
}
