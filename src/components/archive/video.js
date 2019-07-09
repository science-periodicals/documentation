import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@documentation');

export default class Video extends React.Component {
  render() {
    return (
      <section id="example-rdfa-video" className={bem`@__sub-section`}>
        <h4 className={bem`@__default-ui-type--subhead-2`}>Video</h4>

        <HtmlExample
          data={`<figure resource="scipe:audio" typeof="sa:Video">
  <video controls="controls" rel="schema:encoding">
    <source
     about="scipe:encoding-webm"
     typeof="schema:VideoObject"
     property="schema:contentUrl"
     src="http://example.com/video.webm"
     type="video/webm"
    />
    <source
     about="scipe:encoding-mp4"
     typeof="schema:VideoObject"
     property="schema:contentUrl"
     src="http://example.com/video.mp4"
     type="video/mp4"
    />
  </video>
  <figcaption>
    <label property="schema:alternateName">Video 1</label>
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
          Video example with multiple encodings and a credit line
        </HtmlExample>
      </section>
    );
  }
}
