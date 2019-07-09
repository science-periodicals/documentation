import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class ApiConceptStyle extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="style-and-customization" className={bem`api @__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>
          Style and customization
        </h3>

        <p>
          Style and customization are performed using{' '}
          <a href="https://drafts.csswg.org/css-variables/">
            CSS variables (Custom Properties)
          </a>{' '}
          through the <A>CssVariable</A> class and the <A>style</A> property.
        </p>

        <p>
          CSS variables can have static assets specified through the{' '}
          <A>encoding</A> property of the <A>CssVariable</A>.
        </p>

        <JsonldExample
          data={{
            '@context': 'https://sci.pe',
            '@type': 'Periodical',
            name: 'Journal of space science',
            style: [
              {
                '@id': 'style:styleBannerId',
                '@type': 'CssVariable',
                name: '--banner-color',
                value: 'blue'
              },
              {
                '@id': 'style:styleBackgroundId',
                '@type': 'CssVariable',
                name: '--banner-background-image',
                value: 'url(/encoding/encodingId)',
                encoding: {
                  '@id': 'node:encodingId',
                  contentUrl: '/encoding/encodingId',
                  fileFormat: 'image/png'
                }
              }
            ]
          }}
        >
          Journal customization example.
        </JsonldExample>
      </section>
    );
  }
}
