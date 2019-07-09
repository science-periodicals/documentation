import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@documentation');

export default class TextBox extends React.Component {
  render() {
    return (
      <section id="example-rdfa-text-box" className={bem`@__sub-section`}>
        <h4 className={bem`@__default-ui-type--subhead-2`}>Text Box</h4>
        <HtmlExample
          data={`<aside resource="scipe:figure" typeof="sa:TextBox">
  <header>
    <label property="schema:alternateName">Text Box 1</label>
    <p property="schema:caption">A caption</p>
  </header>
  <p>Text box content</p>
</aside>`}
        >
          Text box example
        </HtmlExample>
      </section>
    );
  }
}
