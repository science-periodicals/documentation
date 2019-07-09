import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@archive');

export default class Tables extends React.Component {
  render() {
    return (
      <section id="example-rdfa-tables" className={bem`@__sub-section`}>
        <h4 className={bem`@__default-ui-type--subhead-2`}>Tables</h4>

        <HtmlExample
          data={`<table resource="scipe:table" typeof="schema:Table">
  <caption>
    <label property="schema:alternateName">table 1</label>
    <p property="schema:caption">
      A table caption with footnotes
    </p>
    <ul rel="schema:comment">
      <li id="fn1" resource="#fn1" typeof="sa:Footnote">
        <label property="schema:alternateName">1</label>
        <p property="schema:text">
          footnote 1
        </p>
      </li>
    </ul>
  </caption>
  <tbody>
    <tr>
      <td>1<sup><a property="schema:comment" href="#fn1">1</a></sup></td>
      <td>2</td>
    </tr>
  </tbody>
</table>`}
        >
          Table with footnotes in the caption
        </HtmlExample>

        <HtmlExample
          data={`<figure resource="scipe:table" typeof="schema:Table">
  <table>
    <tbody>
      <tr>
        <td>1<sup><a property="schema:comment" href="#fn1">1</a></sup></td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
  <ul rel="schema:comment">
    <li id="fn1" resource="#fn1" typeof="sa:Footnote">
      <label property="schema:alternateName">1</label>
      <p property="schema:text">
        footnote 1
      </p>
    </li>
  </ul>
  <figcaption>
    <label property="schema:alternateName">table 1</label>
    <p property="schema:caption">
      A table caption with footnotes
    </p>
  </figcaption>
</figure>`}
        >
          Table with footnotes after the table and outside the caption
        </HtmlExample>
      </section>
    );
  }
}
