import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class ApiConceptSelectors extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="selectors" className={bem`api @__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Selectors</h3>

        <p>
          Selectors (<A>Selector</A>) are used by the API to specify specific
          parts (e.g. a text selection, part of an image, a time point in a
          video, a property in a node) of an object.
        </p>

        <p>
          Selectors are typically used with roles through the <A>TargetRole</A>{' '}
          class.
        </p>

        <JsonldExample
          data={{
            '@type': 'Review',
            itemReviewed: {
              '@type': 'TargetRole',
              itemReviewed: { '@id': 'scipe:tableId', '@type': 'Table' },
              hasSelector: {
                '@type': 'NodeSelector',
                node: 'scipe:tableId',
                selectedProperty: 'caption'
              }
            }
          }}
        >
          Example of using a <A>TargetRole</A> on the <A>itemReviewed</A>{' '}
          property of a <A>Review</A> to specify which part of a <A>Table</A>{' '}
          (indicated by the <A>hasSelector</A> property) is being reviewed.
        </JsonldExample>
      </section>
    );
  }
}
