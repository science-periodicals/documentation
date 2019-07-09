import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@documentation');

export default class FrontMatter extends React.Component {
  render() {
    return (
      <section id="example-rdfa-front-matter" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Front Matter</h3>

        <section
          id="example-rdfa-front-matter-title"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>Title</h4>
          <HtmlExample
            data={`<article resource="scipe:article" typeof="schema:ScholarlyArticle">
  <h1 property="schema:name">
    On the effect of X on Y
  </h1>
</article>
`}
          >
            The article title
          </HtmlExample>
        </section>

        <section
          id="example-rdfa-front-matter-authors-affiliations"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            Authors and affiliations
          </h4>

          <HtmlExample
            data={`<article resource="scipe:article" typeof="schema:ScholarlyArticle">
  <section>
    <h2>Authors</h2>
    <ol>
      <li property="schema:author" typeof="sa:ContributorRole">
        <a property="schema:author" href="http://example.com/jesse" typeof="schema:Person">
          <span property="schema:givenName">Jesse</span>
          <span property="schema:familyName">Richman</span>
        </a>
        <a href="#polyp" property="sa:roleAffiliation" resource="http://example.com/polyp">a</a>
        <sup property="sa:roleContactPoint" typeof="schema:ContactPoint">
          <a property="schema:email" href="mailto:jesse@example.com" title="corresponding author">✉</a>
        </sup>
      </li>
      <!-- ... -->
    </ol>
  </section>
  <section>
    <h2>Affiliations</h2>
    <ol>
      <li id="polyp">
        <a href="http://example.com/polyp" typeof="schema:Corporation">
          <span property="schema:name">Polyp Inc.</span>
        </a>
      </li>
    </ol>
  </section>
</article>`}
          >
            The authors and affiliations sections
          </HtmlExample>
        </section>

        <section
          id="example-rdfa-front-matter-impact-statement"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            Impact statement
          </h4>
          <HtmlExample
            data={`<article resource="scipe:article" typeof="schema:ScholarlyArticle">
  <section property="schema:detailedDescription" typeof="sa:ImpactStatement">
    <h2 property="schema:name">Impact Statement</h2>
    <p property="schema:text">
      The impact statement
    </p>
  </section>
</article>`}
          >
            The article impact statement
          </HtmlExample>
        </section>

        <section
          id="example-rdfa-front-matter-abstract"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>Abstract</h4>
          <HtmlExample
            data={`<article resource="scipe:article" typeof="schema:ScholarlyArticle">
  <section property="schema:detailedDescription" typeof="sa:Abstract">
    <h2 property="schema:name">Abstract</h2>
    <p property="schema:text">
      The abstract
    </p>
  </section>
</article>`}
          >
            The article abstract
          </HtmlExample>
        </section>
      </section>
    );
  }
}
