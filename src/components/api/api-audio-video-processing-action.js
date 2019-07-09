import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import ActionSpec from '../action-spec';
import ActionExample from '../action-example';

export default class ApiAudioVideoAction extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="audio-video-action" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1 @__icon-title`}>
          AudioVideoAction <Iconoclass iconName="dispatcher" round={true} />
        </h3>

        <p>
          AudioVideo actions (<A>AudioVideoAction</A>) are used to...
        </p>

        <ActionExample
          action={{
            '@type': 'AudioVideoAction'
          }}
        />

        <ActionSpec type="AudioVideoAction" />
      </section>
    );
  }
}
