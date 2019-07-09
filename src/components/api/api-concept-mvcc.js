import React from 'react';
import { BemTags, TextLogo } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class ApiConceptMvcc extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section
        id="multi-version-concurrency-control"
        className={bem`api @__sub-section`}
      >
        <h3 className={bem`@__default-ui-type--subhead-1`}>
          Multiversion concurrency control
        </h3>
        <p>
          To allow safe concurrent collaborative editing, <TextLogo /> relies on{' '}
          <abbr title="Multiversion Concurrency Control">MVCC</abbr>.
        </p>

        <p>
          Each revision of an object comes with a specific <em>revision</em>{' '}
          value. To update or delete an object, the latest revision value must
          be specified. This mechanism ensures that, if another user changed an
          object while you are operating on it, <TextLogo /> will not accept
          your subsequent update since you are likely to overwrite data you did
          not know existed. When the change is accepted, a new revision number
          will be generated.
        </p>

        <JsonldExample
          data={{
            _id: '54peter\u00014sid\u0001\u0001',
            _rev: '1-6080aefe797f5068d36518c954e813a7',
            '@id': 'user:peter',
            '@type': 'Person',
            name: 'Dr. Peter Jon Smith'
          }}
        >
          A node of a graph containing a revision number (<code>_rev</code>).
        </JsonldExample>

        <p className={bem`@__warning`}>
          In addition to the <code>_rev</code> property, an additional{' '}
          <code>_id</code> property may be present in the response body returned
          by <TextLogo />. This property (<code>_id</code>) is used internally
          by
          <TextLogo /> to ensure efficient indexing of all the stored objects
          (both on the server and in the browser) and is subject to occasional
          change. API consumers should never rely on this value, and instead,
          use the <code>@id</code> as the canonical identifier of the object.
        </p>
      </section>
    );
  }
}
