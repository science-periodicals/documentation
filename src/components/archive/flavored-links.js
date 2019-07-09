import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@archive');

export default class FlavoredLinks extends React.Component {
  render() {
    return (
      <section id="example-rdfa-flavored-links" className={bem`@__sub-section`}>
        <h4 className={bem`@__default-ui-type--subhead-2`}>
          Flavored links and citation callouts
        </h4>

        <HtmlExample
          data={`<article resource="scipe:article" typeof="schema:ScholarlyArticle">
  <p>
    <a property="schema:citation" href="http://example.com/article">
      Bogich et al. (2010)
    </a>
    and (
    <span property="schema:citation" typeof="sa:TargetRole">
      <a property="schema:citation" href="http://example.com/book">
        Bogich 2013,
        <span property="sa:hasSelector" typeof="sa:Selector">
          <span property="schema:pageStart">12</span>-<span property="schema:pageEnd">
            15
          </span>
        </span>
      </a>
    </span>) provide further evidence for the results highlighted in
    <a property="schema:hasPart" href="http://example.com/table1">
      Table 1
    </a>
  </p>
</article>
`}
        >
          Example of flavored links for citation callout, point citation callout
          (using <A>TargetRole</A>) and cross-references
        </HtmlExample>
      </section>
    );
  }
}
