import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import Info from '../info';

export default class ApiConceptContactPoints extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="contact-points" className={bem`api @__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Contact points</h3>

        <p>
          Contact points (<A>ContactPoint</A>) are used to define how to contact
          users (<A>Person</A> and <A>Organization</A>)
        </p>

        <JsonldExample
          data={{
            '@id': 'contact:contactId',
            '@type': 'ContactPoint',
            contactType: 'general inquiry',
            email: 'mailto:contact@example.com'
          }}
        >
          Example of a <A>ContactPoint</A>
        </JsonldExample>
        <div className={bem`@__table`}>
          <table>
            <caption>
              Supported value of the <A>contactType</A> property
            </caption>
            <thead>
              <tr>
                <th>
                  <A>contactType</A>
                </th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>administration</code>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <code>editorial office</code>
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <code>general inquiry</code>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <Info className={bem`@__info-panel`}>
          <header>Contacting persona</header>

          <p>
            Persona (roles) can specify how they should be contacted by listing
            a subset of the person contact points in the <A>roleContactPoint</A>{' '}
            property of the <A>ContributorRole</A> class.
          </p>
        </Info>
      </section>
    );
  }
}
