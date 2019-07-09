import React from 'react';
import { BemTags, TextLogo } from '@scipe/ui';
import JsonLdExample from '../jsonld-example';
import HtmlExample from './html-example';
import FrontMatter from './front-matter';
import ArticleBody from './article-body';
import BackMatter from './back-matter';

const bem = new BemTags('@sa', '@documentation');

export default class Example extends React.Component {
  render() {
    return (
      <section id="example-rdfa" className={bem`example @__section`}>
        <h2 className={bem`@__default-ui-type--headline`}>
          Example (JSON-LD / RDFa hybrid)
        </h2>

        <p>
          The following example illustrates the <TextLogo /> archive format with
          an archive of a scholarly article.
        </p>

        <figure className={bem`__directory @__figure`}>
          <pre className={bem`@__figure-preformated-text`}>
            {`├── index.jsonld
└── data
    ├── article.html
    ├── audio.ogg
    ├── code.js
    ├── data.xlsx
    ├── image.png
    └── video.mp4
`}
          </pre>
          <figcaption
            className={bem`@__default-ui-type--caption @__figure-caption`}
          >
            The archive directory structure
          </figcaption>
        </figure>

        <p>
          For this example most of the data associated with the scholarly
          article are provided in RDFa and the manifest (
          <code>index.jsonld</code>) is kept to the minimum requirements:
        </p>

        <JsonLdExample
          data={{
            '@type': 'Graph',
            name: 'Scholarly article example',
            mainEntity: 'scipe:article',
            '@graph': [
              {
                '@id': 'scipe:article',
                encoding: {
                  contentUrl: 'file://path/to/article.html'
                }
              }
            ]
          }}
        >
          The archive manifest (<code>index.jsonld</code>)
        </JsonLdExample>

        <p>
          The RDFa is provided in the <code>article.html</code> file as
          indicated by the manifest.
        </p>

        <HtmlExample
          data={`<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body
     prefix="schema: http://schema.org/
             rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns#
             xsd: http://www.w3.org/2001/XMLSchema#
             sa: http://ns.sci.pe#
             scipe: https://sci.pe/"
     >
    <article resource="scipe:article" typeof="schema:ScholarlyArticle">
      <section property="sa:articleFrontMatter" datatype="rdf:HTML">
        <!-- front matter -->
      </section>
      <section property="schema:articleBody" datatype="rdf:HTML">
        <!-- article body content -->
      </section>
      <section property="sa:articleBackMatter" datatype="rdf:HTML">
        <!-- back matter -->
      </section>
    </article>
  </body>
</html>`}
        >
          Overall structure of the RDFa encoding (<code>article.html</code>)
        </HtmlExample>

        <p>
          The following sections illustrate some typical section of scholarly
          articles.
        </p>

        <FrontMatter />
        <ArticleBody />
        <BackMatter />
      </section>
    );
  }
}
