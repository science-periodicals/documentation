import React from 'react';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import Info from '../info';

export default class License extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');

    return (
      <section id="license" className={bem`license @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>License</h5>

        <JsonldExample
          data={{
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            license: {
              '@id': 'spdx:CC-BY-4.0',
              url: 'https://creativecommons.org/licenses/by/4.0/legalcode',
              name:
                'Creative Commons Attribution 4.0 International Public License',
              alternateName: 'CC-BY-4.0'
            }
          }}
        >
          The <A>license</A> property is used to specify the license.
        </JsonldExample>

        <Info className={bem`@__info-panel`}>
          <header>SPDX license list</header>

          <p>
            When possible licenses should be provided using the license
            identifier from the{' '}
            <a href="https://spdx.org/licenses">SPDX list of licenses</a>.
          </p>

          <p>
            The <TextLogo /> <code>@context</code> defines an <code>spdx</code>{' '}
            prefix to facilitate that process.
          </p>
        </Info>
      </section>
    );
  }
}
