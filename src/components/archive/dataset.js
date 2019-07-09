import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@documentation');

export default class Dataset extends React.Component {
  render() {
    return (
      <section id="example-rdfa-dataset" className={bem`@__sub-section`}>
        <h4 className={bem`@__default-ui-type--subhead-2`}>Dataset</h4>

        <section
          id="example-rdfa-dataset-inline"
          className={bem`@__sub-section`}
        >
          <h5 className={bem`@__default-ui-type--subhead-3`}>As a figure</h5>

          <HtmlExample
            data={`<figure resource="scipe:dataset" typeof="schema:Dataset">
  <ul property="schema:distribution" typeof="schema:DataDownload">
    <li>
      URL: <a property="schema:contentUrl" href="http://example.com/data.csv">
        http://example.com/data.csv
      </a>
    </li>
    <li>
      Format: <span property="schema:fileFormat" content="text/csv">CSV</span>
    </li>
  </ul>
  <figcaption>
    <label property="schema:alternateName">Dataset 1</label>
    <p property="schema:name">Velocity data</p>
    <p property="schema:description">A description</p>
  </figcaption>
</figure>`}
          >
            Dataset example (as a figure, typically in supporting information)
          </HtmlExample>
        </section>

        <section
          id="example-rdfa-dataset-block"
          className={bem`@__sub-section`}
        >
          <h5 className={bem`@__default-ui-type--subhead-3`}>Inline</h5>

          <HtmlExample
            data={`<p resource="scipe:dataset" typeof="schema:Dataset">
   Collected data
   (<cite property="schema:name">Velocity data</cite>) were deposited in a
    <span property="schema:distribution" typeof="schema:DataDownload">
      <a property="schema:contentUrl" href="http://example.com/data.csv">repository</a>
      and available as
      <span property="schema:fileFormat" content="text/csv">
       CSV
      </span>
    </span>
  <span>.
</p>
`}
          >
            Dataset example (inline)
          </HtmlExample>
        </section>
      </section>
    );
  }
}
