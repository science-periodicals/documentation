import React from 'react';
import { Link } from 'react-router-dom';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import Info from '../info';

export default class About extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentaion');

    return (
      <section id="about" className={bem`about @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Subjects</h5>

        <JsonldExample
          data={{
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            about: {
              '@id': 'http://id.nlm.nih.gov/mesh/D007251',
              '@type': 'InfectiousDisease',
              name: 'Influenza, Human',
              description:
                'An acute viral infection in humans involving the respiratory tract. It is marked by inflammation of the NASAL MUCOSA; the PHARYNX; and conjunctiva, and by headache and severe, often generalized, myalgia.',
              code: {
                '@type': 'MedicalCode',
                codeValue: 'D007251',
                codingSystem: 'MeSH'
              }
            }
          }}
        >
          The <A>about</A> property is used to expose the subjects (typically
          from controlled vocabularies) of a resource
        </JsonldExample>

        <Info className={bem`@__info-panel`}>
          <header>Semantic tagging</header>
          <p>
            Additional subjects can be added post publication using the{' '}
            <A>TagAction</A> and <A>LinkAction</A> of the sci.pe{' '}
            <Link to="/get-started/api">API</Link>.
          </p>
        </Info>
      </section>
    );
  }
}
