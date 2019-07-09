import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class Copyright extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');

    return (
      <section id="copyright" className={bem`copyright @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Copyright</h5>

        <JsonldExample
          data={{
            '@type': 'Image',
            copyrightYear: '2010',
            copyrightHolder: {
              '@id': 'http://www.nyu.edu/',
              '@type': 'CollegeOrUniversity',
              name: 'New York University',
              alternateName: 'NYU'
            }
          }}
        >
          The <A>copyrightYear</A> and <A>copyrightHolder</A> properties are
          used to specify the copyright notice.
        </JsonldExample>
      </section>
    );
  }
}
