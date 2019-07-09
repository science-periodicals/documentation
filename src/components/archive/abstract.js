import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class Abstract extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="abstract" className={bem`archive @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>
          Abstracts and Impact statements
        </h5>

        <JsonldExample
          data={{
            '@type': 'ScholarlyArticle',
            description: 'A description of the resource',
            detailedDescription: [
              {
                '@type': 'Abstract',
                name: 'Original Abstract',
                text: 'Abstract content'
              },
              {
                '@type': 'ImpactStatement',
                name: 'Impact Statement',
                text: 'Impact Statement content'
              },
              {
                '@type': 'Abstract',
                name: 'Structured Abstract',
                hasPart: [
                  {
                    '@type': 'Abstract',
                    name: 'Introduction',
                    text: 'Abstract introduction'
                  },
                  {
                    '@type': 'Abstract',
                    name: 'Results',
                    text: 'Abstract results'
                  }
                ]
              }
            ]
          }}
        >
          The <A>detailedDescription</A> property complements the{' '}
          <A>description</A> one and allows to specify the different abstracts (<A
          >
            Abstract
          </A>) of the resource, including <strong>impact statement</strong> (<A
          >
            ImpactStatement
          </A>)
        </JsonldExample>
      </section>
    );
  }
}
