import React from 'react';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import Info from '../info';

export default class ApiConceptAudiences extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="audiences" className={bem`api @__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Audiences</h3>

        <p>
          The <TextLogo /> API allows to target person groups based on role
          through the use of audiences (<A>Audience</A>).
        </p>

        <div className={bem`@__table`}>
          <table>
            <caption>
              Supported value of the <A>audienceType</A> property of{' '}
              <A>Audience</A>
            </caption>
            <thead>
              <tr>
                <th>
                  <A>audienceType</A>
                </th>
                <th>
                  <A>description</A>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>public</code>
                </td>
                <td>any user (registered or not)</td>
              </tr>

              <tr>
                <td>
                  <code>user</code>
                </td>
                <td>any registered user</td>
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
            </tbody>
          </table>
        </div>
        <p>
          If more granularity is needed, the <A>name</A> property of the{' '}
          <A>Audience</A> can be used:
        </p>

        <JsonldExample
          data={{
            '@type': 'Audience',
            audienceType: 'editor',
            name: 'editor-in-chief'
          }}
        >
          Example of an Audience (any “editor in chief”)
        </JsonldExample>

        <Info className={bem`@__info-panel`}>
          <header>Time sensitive audiences</header>

          <p>
            Audiences can be wrapped in an <A>AudienceRole</A> to indicate when
            (<A>startDate</A>, <A>endDate</A>) an audience was / will be in
            effect
          </p>

          <JsonldExample
            id="time-sensitive-audience-role-example"
            data={{
              '@id': 'action:actionId',
              '@type': 'Action',
              participant: [
                {
                  '@type': 'Audience',
                  audienceType: 'editor'
                },
                {
                  '@type': 'AudienceRole',
                  startDate: '2017-02-01T23:00:00.247Z',
                  participant: {
                    '@type': 'Audience',
                    audienceType: 'reviewer'
                  }
                }
              ]
            }}
          >
            Example of an action with a time sensitive audience. Here the action
            is visible to the editors and to the reviewer but only starting from
            the date <code>2017-02-01</code>.
          </JsonldExample>
        </Info>
      </section>
    );
  }
}
