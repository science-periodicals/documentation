import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@archive');

export default class Code extends React.Component {
  render() {
    return (
      <section id="example-rdfa-code" className={bem`@__sub-section`}>
        <h4 className={bem`@__default-ui-type--subhead-2`}>Code</h4>

        <HtmlExample
          data={`<figure resource="scipe:code" typeof="schema:SoftwareSourceCode">
  <pre>
    <code>
      import ontology from '@scipe/ontology';
    </code>
  </pre>
  <figcaption>
    <label property="schema:alternateName">Code 1</label>
    <p>
      <span property="schema:caption">Code snippet</span>
      (<span property="schema:programmingLanguage">JavaScript</span>).
    </p>
    <p>
      View on
      <a property="schema:codeRepository" href="https://github.com/scienceai/ontology">
        Github
      </a>
    </p>
  </figcaption>
</figure>`}
        >
          Code snippet with programming language and repository specified as
          caption
        </HtmlExample>
      </section>
    );
  }
}
