import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';

export default class ApiTypesettingAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="typesetting-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          TypesettingAction <Iconoclass iconName="formatSize" round={true} />
        </h3>

        <p>
          Typesetting actions (<A>TypesettingAction</A>) are used to...
        </p>

        <ActionExample
          action={{
            '@type': 'TypesettingAction'
          }}
        />

        <ActionSpec type="TypesettingAction" />
      </section>
    );
  }
}
