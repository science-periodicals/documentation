import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class Caption extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');

    return (
      <section id="label-caption" className={bem`caption @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>
          Label and Caption
        </h5>

        <JsonldExample
          data={{
            '@id': 'http://example.com/figure',
            '@type': 'Image',
            alternateName: 'Figure 1',
            caption: 'figure caption'
          }}
        >
          The <A>alternateName</A> and <A>caption</A> properties are used to
          express the label and caption of resources
        </JsonldExample>
      </section>
    );
  }
}
