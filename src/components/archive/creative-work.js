import React from 'react';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import EncodingMapping from './encoding-mapping';

export default class CreativeWork extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');

    return (
      <section
        id="creative-work-encodings"
        className={bem`name @__sub-section`}
      >
        <h5 className={bem`@__default-ui-type--subhead-3`}>
          Creative Work / Encodings
        </h5>

        <p>
          Creative Works (<A>CreativeWork</A>) are associated with their
          encodings (<A>MediaObject</A> or subclass thereof) through the
          following properties:
        </p>

        <EncodingMapping />

        <JsonldExample
          data={{
            '@id': 'scipe:image',
            '@type': 'Image',
            caption: 'image caption',
            encoding: {
              '@id': 'scipe:image-encoding-id',
              '@type': 'ImageObject',
              name: 'img.png',
              fileFormat: 'image/png',
              contentUrl: '/encoding/img.png',
              contentSize: 1222,
              width: 100,
              height: 100,
              encodesCreativeWork: 'scipe:image',
              contentChecksum: {
                '@type': 'Checksum',
                checksumAlgorithm: 'sha-256',
                checksumValue: 'mebiZJhOlR372Iy7C3w6a1Igc45//wlo='
              }
            }
          }}
        >
          Example of a resource (<A>Image</A>) and associated encoding (
          <A>ImageObject</A>).
        </JsonldExample>

        <p>
          After publication, <TextLogo /> guarantees the presence of:
        </p>

        <ul>
          <li>
            A <A>contentChecksum</A> property on the encoding providing a
            checksum (<A>Checksum</A>) of the content (if any) according to the
            algorithm specified by the <A>checksumAlgorithm</A> property.
          </li>
          <li>
            An <A>encodesCreativeWork</A> property on the encoding pointing to
            the encoded resources.
          </li>
          <li>
            A <A>resourceOf</A> property on the resource pointing to the graph{' '}
            <code>@id</code>. The <A>resourceOf</A> property is only added to
            resources created with this archive (and is therefore not added in
            case of creative works referred to by the archive).
          </li>
        </ul>
      </section>
    );
  }
}
