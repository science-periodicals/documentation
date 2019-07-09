import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@documentation');

export default class Math extends React.Component {
  render() {
    return (
      <section id="example-rdfa-math" className={bem`@__sub-section`}>
        <h4 className={bem`@__default-ui-type--subhead-2`}>Math</h4>

        <section id="example-rdfa-math-inline" className={bem`@__sub-section`}>
          <h5 className={bem`@__default-ui-type--subhead-3`}>Inline Math</h5>
          <HtmlExample
            data={`<p>
  Inline <math>
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math> equation
</p>`}
          >
            Math example (inline)
          </HtmlExample>
        </section>

        <section id="example-rdfa-math-block" className={bem`@__sub-section`}>
          <h5 className={bem`@__default-ui-type--subhead-3`}>Block Math</h5>
          <HtmlExample
            data={`<figure resource="scipe:formula" typeof="sa:Formula">
  <math display="block">
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>
  <figcaption>
    <label property="schema:alternateName">Equation 1</label>
    <p property="schema:caption">A caption</p>
  </figcaption>
</figure>`}
          >
            Math example (block)
          </HtmlExample>
        </section>
      </section>
    );
  }
}
