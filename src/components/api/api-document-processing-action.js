import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';

export default class ApiDocumentProcessingAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="document-processing-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          DocumentProcessingAction{' '}
          <Iconoclass iconName="fileText" round={true} />
        </h3>

        <p>
          DocumentProcessing actions (<A>DocumentProcessingAction</A>) are used
          to...
        </p>

        <ActionExample
          action={{
            '@type': 'DocumentProcessingAction'
          }}
        />

        <ActionSpec type="DocumentProcessingAction" />
      </section>
    );
  }
}
