import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@documentation');

export default class Audio extends React.Component {
  render() {
    return (
      <section id="example-rdfa-audio" className={bem`@__sub-section`}>
        <h4 className={bem`@__default-ui-type--subhead-2`}>Audio</h4>

        <HtmlExample
          data={`<figure resource="scipe:audio" typeof="sa:Audio">
  <video controls="controls" rel="schema:encoding">
    <source
     about="scipe:encoding-wav"
     typeof="schema:VideoObject"
     property="schema:contentUrl"
     src="http://example.com/audio.wav"
     type="audio/wav"
    />
    <source
     about="scipe:encoding-ogg"
     typeof="schema:VideoObject"
     property="schema:contentUrl"
     src="http://example.com/audio.ogg"
     type="audio/ogg"
    />
  </video>
  <figcaption>
    <label property="schema:alternateName">Audio 1</label>
    <p property="schema:caption">A caption</p>
    <p>
      Courtesy of:
      <a property="schema:provider" href="http://example.com/polyp" typeof="schema:Organization">
        <cite property="schema:name">Polyp surfboards</cite>
      </a>
    </p>
  </figcaption>
</figure>`}
        >
          Audio example with multiple encodings and a credit line
        </HtmlExample>
      </section>
    );
  }
}
