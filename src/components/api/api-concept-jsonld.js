import React from 'react';
import { BemTags, TextLogo } from '@scipe/ui';
import Info from '../info';

export default class ApiConceptJsonld extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="json-ld" className={bem`api @__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>JSON-LD</h3>
        <p>
          The <TextLogo /> API uses <a href="http://json-ld.org/">JSON-LD</a> to
          organize and connect data. Although no specific knowledge regarding
          JSON-LD is necessary to use the API, interested readers may consult
          the <a href="https://www.w3.org/TR/json-ld/">JSON-LD specification</a>{' '}
          or the W3C{' '}
          <a href="https://www.w3.org/TR/rdf11-primer/">RDF primer</a>.
        </p>
        <p>
          Data are expressed using <a href="http://schema.org">schema.org</a>{' '}
          and a <a href="http://ns.sci.pe/">schema.org extension</a> that
          describe with greater precision the production process, content, and
          preservation of scholarly articles (and similar artefacts).
        </p>
        <p>
          The <TextLogo /> JSON-LD context is available at{' '}
          <code>https://sci.pe</code>.
        </p>

        <p className={bem`@__warning`}>
          Accessing the <TextLogo /> JSON-LD context requires an{' '}
          <code>Accept: application/ld+json</code> header.
        </p>

        <Info className={bem`@__info-panel`}>
          <header>JSON-LD for better APIs</header>
          <blockquote cite="http://manu.sporny.org/2014/json-ld-origins-2/">
            <p>
              The desire for better Web APIs is what motivated the creation of
              JSON-LD, not the Semantic Web. If you want to make the Semantic
              Web a reality, stop making the case for it and spend your time
              doing something more useful, like actually making machines smarter
              or helping people publish data in a way that’s useful to them.
            </p>
            <cite>
              Manu Sporny{' '}
              <a href="http://manu.sporny.org/2014/json-ld-origins-2/">
                JSON-LD and why I hate the Semantic Web
              </a>
            </cite>
          </blockquote>
        </Info>
      </section>
    );
  }
}
