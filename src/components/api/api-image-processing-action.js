import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';

export default class ApiImageProcessingAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="image-processing-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          ImageProcessingAction <Iconoclass iconName="fileImage" round={true} />
        </h3>

        <p>
          ImageProcessing actions (<A>ImageProcessingAction</A>) are used to...
        </p>

        <ActionExample
          action={{
            '@type': 'ImageProcessingAction'
          }}
        />

        <ActionSpec type="ImageProcessingAction" />
      </section>
    );
  }
}
