import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class JournalInformation extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');

    return (
      <section id="journal-information" className={bem`name @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>
          Journal Information
        </h5>

        <JsonldExample
          data={{
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            name: 'On the effect of X on Y',
            isPartOf: {
              '@id': 'http://example.com/issue',
              '@type': 'PublicationIssue',
              issueNumber: 4,
              isPartOf: {
                '@id': 'http://example.com/volume',
                '@type': 'PublicationVolume',
                volumeNumber: 7,
                isPartOf: {
                  '@id': 'http://example.com/journal',
                  '@type': 'Periodical',
                  name: 'Journal of Metaphysics'
                }
              }
            }
          }}
        >
          The <A>isPartOf</A> property is used to specify where the resource
          have been published (<A>PublicationIssue</A>, <A>PublicationVolume</A>,{' '}
          <A>Periodical</A>).
        </JsonldExample>
      </section>
    );
  }
}
