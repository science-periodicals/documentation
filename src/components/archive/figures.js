import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@documentation');

export default class Figures extends React.Component {
  render() {
    return (
      <section id="example-rdfa-figures" className={bem`@__sub-section`}>
        <h4 className={bem`@__default-ui-type--subhead-2`}>Figures</h4>

        <section
          id="example-rdfa-figures-single-part"
          className={bem`@__sub-section`}
        >
          <h5 className={bem`@__default-ui-type--subhead-3`}>
            Single part figures
          </h5>
          <HtmlExample
            data={`<figure resource="scipe:image" typeof="sa:Image">
  <div property="schema:encoding" typeof="schema:ImageObject" >
    <img property="schema:contentUrl" src="http://example.com/image.png" />
  </div>
  <figcaption>
    <label property="schema:alternateName">Figure 1</label>
    <p property="schema:caption">A caption</p>
    <p>
      Data from:
      <a property="schema:isBasedOn" href="http://example.com/data" typeof="schema:Dataset">
        <cite property="schema:name">World industries data</cite>
      </a>
    </p>
  </figcaption>
</figure>`}
          >
            Example of a figure where the data source is specified
          </HtmlExample>

          {/* TODO example with fancy caption to show more langueage: maybe with courtesy of: */}
        </section>

        <section
          id="example-rdfa-figures-multi-part"
          className={bem`@__sub-section`}
        >
          <h5 className={bem`@__default-ui-type--subhead-3`}>
            Multi part figures
          </h5>
          <HtmlExample
            data={`<figure resource="scipe:figure" typeof="sa:Image">
  <div rel="schema:hasPart">
    <figure resource="scipe:partA" typeof="sa:Image">
      <div property="schema:encoding" typeof="schema:ImageObject" >
        <img property="schema:contentUrl" src="http://example.com/partA.png" />
      </div>
      <figcaption>
        <label property="schema:alternateName">A</label>
      </figcaption>
    </figure>
    <figure resource="scipe:partB" typeof="sa:Image">
      <div property="schema:encoding" typeof="schema:ImageObject" >
        <img property="schema:contentUrl" src="http://example.com/partB.png" />
      </div>
      <figcaption>
        <label property="schema:alternateName">B</label>
      </figcaption>
    </figure>
  </div>
  <figcaption>
    <label property="schema:alternateName">Figure 1</label>
    <p property="schema:caption">A multipart figure</p>

    <div resource="scipe:partA">
      <label property="schema:alternateName">A</label>
      <p property="schema:caption">A subcaption for part A</p>
    </div>

    <div resource="scipe:partB">
      <label property="schema:alternateName">B</label>
      <p property="schema:caption">A subcaption for part B</p>
      <p>
        Code from:
        <a property="schema:isBasedOn" href="http://example.com/code" typeof="schema:SoftwareSourceCode">
          <cite property="schema:name">xanadu viz</cite>
        </a>
      </p>
    </div>
  </figcaption>
</figure>`}
          >
            Example of a multi-part figure where the code used to generate a
            part is specified
          </HtmlExample>
        </section>
      </section>
    );
  }
}
