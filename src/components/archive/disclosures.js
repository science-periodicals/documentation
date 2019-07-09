import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class Disclosure extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');
    return (
      <section id="disclosure" className={bem`disclosure @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Disclosure</h5>

        <p>
          Disclosure statements are specified using disclosure actions (<A>
            DisclosureAction
          </A>). Disclosure actions can be linked to their agent through the{' '}
          <A>roleAction</A> property of the <A>ContributorRole</A> class or
          added directly to the <A>Graph</A>.
        </p>

        <JsonldExample
          data={{
            '@type': 'DisclosureAction',
            actionStatus: 'CompletedActionStatus',
            endTime: new Date().toISOString(),
            agent: {
              '@id': 'http://example.com/psullivan',
              '@type': 'Person',
              name: 'Prof. James P Sullivan, MD'
            },
            instrument: {
              '@type': 'MediaObject',
              contentUrl: 'http://example.com/signed_disclosure_1.pdf'
            },
            about: {
              '@type': 'PayAction',
              startTime: new Date(
                new Date().getFullYear() - 1,
                10,
                3
              ).toISOString(),
              endTime: new Date(new Date().getFullYear(), 11, 1).toISOString(),
              actionStatus: 'CompletedActionStatus',
              agent: {
                '@type': 'Corporation',
                name: 'Pfizer',
                location: {
                  '@type': 'Place',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'New York',
                    addressRegion: 'NY',
                    addressCountry: 'USA'
                  }
                }
              },
              recipient: 'http://example.com/psullivan'
            },
            result: {
              '@type': 'Disclosure',
              text:
                'Prof. James P Sullivan, MD received personal fees for consulting for Pfizer'
            }
          }}
        >
          Example of disclosure (<A>DisclosureAction</A>)
        </JsonldExample>
      </section>
    );
  }
}
