import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';

// TODO change caption to acrion resulting from file upload

export default class ApiUploadAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="upload-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          UploadAction <Iconoclass iconName="dispatcher" round={true} />
        </h3>

        <p>
          Upload actions (<A>UploadAction</A>) are used to...
        </p>

        <ActionExample
          action={{
            '@type': 'UploadAction'
          }}
        />

        <ActionSpec type="UploadAction" />
      </section>
    );
  }
}
