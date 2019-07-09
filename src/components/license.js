import React from 'react';
import { BemTags } from '@scipe/ui';

export default class DocumentationLicense extends React.Component {
  render() {
    var bem = new BemTags('@sa', '@documentation');
    return (
      <section id="doc-license" className={bem`@__section`}>
        <h2 className={bem`@__default-ui-type--headline`}>License</h2>
        <p>
          This documentation is made available under a{' '}
          <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
            CC BY-NC-ND 4.0
          </a>{' '}
          license. For further inquiries, please contact us at{' '}
          <a href="mailto:contact@sci.pe">contact@sci.pe</a>.
        </p>
      </section>
    );
  }
}
