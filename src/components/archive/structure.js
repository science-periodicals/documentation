import React from 'react';
import { BemTags } from '@scipe/ui';

let bem = new BemTags('@sa', '@documentation');

export default class Structure extends React.Component {
  render() {
    return (
      <section id="structure" className={bem`@__section`}>
        <h2 className={bem`@__default-ui-type--headline`}>Structure</h2>

        <p>
          An archive is a{' '}
          <a href="https://en.wikipedia.org/wiki/Tar_(computing)">
            <code>.tar.gz</code>
          </a>{' '}
          file containing:
        </p>

        <ul className={bem`@__list`}>
          <li className={bem`@__list-item`}>
            An <code>index.jsonld</code> file (<em>required</em>) acting as the
            archive manifest and exposing the archive metadata in{' '}
            <a href="https://www.w3.org/TR/json-ld/">JSON-LD</a> using{' '}
            <a href="http://schema.org">schema.org</a> and the{' '}
            <a href="http://ns.sci.pe">sci.pe ontology</a>.
          </li>
          <li>
            Any other files without restrictions on their organization (so
            organized into directories and subdirectories when needed) or
            formats.
          </li>
        </ul>
      </section>
    );
  }
}
