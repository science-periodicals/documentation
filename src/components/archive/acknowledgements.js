import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class Acknowledgements extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="acknowledgements" className={bem`archive @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Acknowledgements</h5>

        <p>
          When appropriate, acknowledgements can be specified using{' '}
          <A>AcknolwedgeAction</A>. Acknowledge actions can be linked to their
          agent through the <A>roleAction</A> property of the{' '}
          <A>ContributorRole</A> class or added directly to the <A>Graph</A>.
        </p>

        <JsonldExample
          data={{
            '@type': 'AcknowledgeAction',
            actionStatus: 'CompletedActionStatus',
            name: 'is thankful for the pioneering contribution of',
            agent: {
              '@id': 'http://example.com/psullivan',
              '@type': 'Person',
              name: 'Prof. James P Sullivan, MD'
            },
            recipient: {
              '@type': 'Person',
              name: 'Vannevar Bush',
              givenName: 'Vannevar',
              familyName: 'Bush'
            },
            result: {
              '@type': 'Acknowledgements',
              text:
                'The author is is thankful for the pioneering contribution of of Vannevar Bush'
            }
          }}
        >
          Example of acknowledgments (<A>AcknolwedgeAction</A>)
        </JsonldExample>
      </section>
    );
  }
}
