import React from 'react';
import { BemTags } from '@scipe/ui';
import HtmlExample from './html-example';

const bem = new BemTags('@sa', '@documentation');

export default class BackMatter extends React.Component {
  render() {
    return (
      <section id="example-rdfa-back-matter" className={bem`@__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Back Matter</h3>

        <section id="example-rdfa-funding" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>Funding</h4>

          <HtmlExample
            data={`<article resource="scipe:article">
  <section>
    <h2>Funding</h2>
    <p rel="schema:sponsor">
      <span typeof="sa:SponsorRole">
        This work was sponsored by the
        <a
          property="schema:sponsor"
          href="http://pixar.wikia.com/wiki/CDA"
          typeof="schema:Organization"
        >
          <span property="schema:name">Child Detection Agency</span>
          (<span property="schema:alternateName">CDA</span>)
        </a> under the grant
        <a
          property="sa:roleOffer"
          typeof="sa:FundingSource"
          href="http://example.com/grantId"
        >
          <span property="schema:serialNumber">001222xE</span>
        </a>
      </span>
    </p>
  </section>
</article>`}
          >
            Example of a funding section
          </HtmlExample>
        </section>

        <section id="example-rdfa-disclosures" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>Disclosures</h4>

          <HtmlExample
            frame={{ '@id': 'scipe:action' }}
            data={`<section>
  <h2>Disclosures</h2>
  <p resource="scipe:action" typeof="sa:DisclosureAction">
    <span
      property="schema:agent"
      typeof="sa:ContributorRole"
      resource="scipe:authorRole"
    >
      Dr Smith
    </span>
    serves as
    <span property="schema:about" typeof="schema:OrganizationRole">
      <span property="schema:roleName">president</span> of
      <a
        property="schema:memberOf"
        typeof="schema:Organization"
        href="http://example.com/bones"
      >
        <span property="schema:name">Bones Brigade</span>
      </a>
    </span>
    (see
    <span property="schema:instrument" typeof="sa:DocumentObject">
      <a property="schema:contentUrl" href="http://example.com/disclosure.pdf">
        disclosure
      </a>
    </span>).
  </p>
</section>`}
          >
            Example of a disclosure section
          </HtmlExample>
        </section>

        <section
          id="example-rdfa-acknowledgemnts"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            Acknowledgements
          </h4>

          <HtmlExample
            frame={{ '@id': 'scipe:action' }}
            data={`<section>
  <h2>Acknowledgements</h2>
  <p resource="scipe:action" typeof="schema:AcknowledgeAction">
    <span property="schema:agent" resource="scipe:authorRole" typeof="sa:ContributorRole">
      The author
    </span>
    acknowledges the patience of
    <a
      property="schema:recipient"
      typeof="schema:Person"
      href="http://example.com/tiffany"
    >
      <span property="schema:name">Dr. Tiffany Bogich</span>
    </a>
  </p>
</section>`}
          >
            Example of an acknowledgement section
          </HtmlExample>
        </section>

        <section id="example-rdfa-references" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>References</h4>

          <HtmlExample
            data={`<article resource="scipe:article" typeof="schema:ScholarlyArticle">
  <section >
    <h2>References</h2>

    <ol rel="schema:citation">
      <li typeof="schema:ScholarlyArticle" resource="http://example.com/bk">
        <span property="schema:author" typeof="schema:Person">
          <span property="schema:familyName">Smith</span>
          <span property="schema:givenName" content="Peter">P</span>
          <span property="schema:additionalName" content="John">J</span>
        </span>,
        <span property="schema:author" typeof="schema:Person">
          <span property="schema:familyName">Bogich</span>
          <span property="schema:givenName" content="Tiffany">T</span>.
        </span>
        <cite property="schema:name">The decline of Brooklyn.</cite>
        <span property="schema:isPartOf" typeof="schema:PublicationVolume">
          <span property="schema:isPartOf" typeof="schema:Periodical">
            <span property="schema:name">Nature.</span>
          </span>
          <time
             about="http://example.com/bk"
             property="schema:datePublished"
             datetime="2022-01"
             datatype="xsd:gYearMonth"
           >
            2022 Jan
          </time>;
          <span property="schema:volumeNumber">451</span>:
        </span>
        <span property="schema:pageStart">990</span>-<span property="schema:pageEnd">4</span>
      </li>
    </ol>
  </section>
</article>`}
          >
            Example of a bibliography section
          </HtmlExample>
        </section>

        <section
          id="example-rdfa-supporting-information"
          className={bem`@__sub-section`}
        >
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            Supporting Information
          </h4>

          <HtmlExample
            frame={{ '@type': ['ScholarlyArticle', 'Image'] }}
            data={`<article resource="scipe:article" typeof="schema:ScholarlyArticle">
  <section >
    <h2>Supporting information</h2>
    <figure resource="scipe:image" typeof="sa:Image">
      <div property="schema:encoding" typeof="schema:ImageObject" >
        <img property="schema:contentUrl" src="http://example.com/image.png" />
      </div>
      <figcaption>
        <label property="schema:alternateName">Supporting Figure 1</label>
        <p property="schema:caption">A caption</p>
      </figcaption>
    </figure>
  </section>
</article>`}
          >
            Example of a supporting information section
          </HtmlExample>
        </section>
      </section>
    );
  }
}
