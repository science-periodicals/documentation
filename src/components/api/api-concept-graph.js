import React from 'react';
import { Link } from 'react-router-dom';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';
import Info from '../info';

export default class ApiConceptGraph extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="graph" className={bem`api @__sub-section`}>
        <h3 className={bem`@__default-ui-type--subhead-1`}>Graph</h3>
        <p>
          The <TextLogo /> API allows one to build and access a <A>Graph</A> of
          content. A graph typically contains creative works (e.g.{' '}
          <a href="http://schema.org/Dataset">dataset</a>,{' '}
          <a href="http://schema.org/SoftwareSourceCode">code</a>,{' '}
          <a href="http://schema.org/ScholarlyArticle">article</a>,{' '}
          <a href="http://schema.org/Review">reviews</a>), and{' '}
          <a href="http://schema.org/Person">persons</a> and{' '}
          <a href="http://schema.org/Organization">organizations</a> associated
          with these works (e.g. authors, reviewers, or institutions), and{' '}
          <a href="http://schema.org/isBasedOn">relationships</a> between the
          different nodes of a graph (e.g. a work may “depend” on another work).
          Furthermore, nodes of a graph can be <strong>actionable</strong> and
          expose (in a machine readable way){' '}
          <a href="http://schema.org/potentialAction">potential actions</a> that
          can be performed on that node (e.g. converting an article written with
          Microsoft Word to HTML).
        </p>

        <p>
          Graphs are organized according to a simplified{' '}
          <a href="https://en.wikipedia.org/wiki/Functional_Requirements_for_Bibliographic_Records">
            FRBR
          </a>{' '}
          model in which a distinction is made between{' '}
          <a href="http://schema.org/CreativeWork">creative works</a> (e.g. an
          article) and their{' '}
          <a href="http://schema.org/MediaObject">“encodings”</a> (e.g. an HTML
          representation of the article). This is essentially a
          resource/representation distinction.
        </p>

        <p>
          The primary entity described in a <A>Graph</A> (typically a{' '}
          <A>ScholarlyArticle</A>) is indicated with the <A>mainEntity</A>{' '}
          property of the <A>Graph</A>.
        </p>
        <div className={bem`@__table`}>
          <table>
            <caption>
              Types of Creative Works (<A>CreativeWork</A>) and corresponding
              Encodings (<A>MediaObject</A>) commonly associated with a{' '}
              <A>ScholarlyArticle</A>.
            </caption>

            <thead>
              <tr>
                <th>Creative Work</th>
                <th>Encoding</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <A>ScholarlyArticle</A>
                </td>
                <td>
                  <A>DocumentObject</A>
                </td>
              </tr>
              <tr>
                <td>
                  <A>Image</A>
                </td>
                <td>
                  <A>ImageObject</A>
                </td>
              </tr>
              <tr>
                <td>
                  <A>Audio</A>
                </td>
                <td>
                  <A>AudioObject</A>
                </td>
              </tr>
              <tr>
                <td>
                  <A>Video</A>
                </td>
                <td>
                  <A>VideoObject</A>
                </td>
              </tr>
              <tr>
                <td>
                  <A>Dataset</A>
                </td>
                <td>
                  <A>DataDownload</A>
                </td>
              </tr>
              <tr>
                <td>
                  <A>Table</A>
                </td>
                <td>
                  <A>TableObject</A>
                </td>
              </tr>
              <tr>
                <td>
                  <A>SoftwareSourceCode</A>
                </td>
                <td>
                  <A>SoftwareSourceCodeObject</A>
                </td>
              </tr>
              <tr>
                <td>
                  <A>Formula</A>
                </td>
                <td>
                  <A>FormulaObject</A>
                </td>
              </tr>

              <tr>
                <td>
                  <A>TextBox</A>
                </td>
                <td>
                  <A>TextBoxObject</A>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <JsonldExample
          id="graph-example"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'scipe:graphId',
            '@type': 'Graph',
            mainEntity: 'scipe:articleId',
            '@graph': [
              {
                '@id': 'scipe:articleId',
                '@type': 'ScholarlyArticle',
                author: {
                  '@id': 'user:peter',
                  '@type': 'Person',
                  name: 'Dr. Peter Jon Smith'
                },
                hasPart: [
                  {
                    '@id': 'scipe:datasetId',
                    '@type': 'Dataset',
                    author: {
                      '@id': 'user:peter',
                      '@type': 'Person',
                      name: 'Dr. Peter Jon Smith'
                    },
                    distribution: {
                      '@type': 'DataDownload',
                      contentUrl: 'http://example.com/data.xlsx',
                      contentSize: 1024
                    }
                  },
                  {
                    '@id': 'scipe:imageId',
                    '@type': 'Image',
                    author: {
                      '@id': 'user:peter',
                      '@type': 'Person',
                      name: 'Dr. Peter Jon Smith'
                    },
                    isBasedOn: 'scipe:datasetId',
                    encoding: {
                      '@type': 'ImageObject',
                      fileFormat: 'image/png',
                      contentUrl: 'http://example.com/image.png',
                      potentialAction: {
                        '@type': 'ImageProcessingAction',
                        target: {
                          '@type': 'EntryPoint',
                          httpMethod: 'POST',
                          urlTemplate: 'http://example.com/{encodingId}'
                        }
                      }
                    }
                  }
                ]
              }
            ]
          }}
        >
          Example of a <A>Graph</A> containing a <A>ScholarlyArticle</A>{' '}
          (indicated as the <A>mainEntity</A> of the <A>Graph</A>).
        </JsonldExample>

        <p>
          A full specification of the <A>Graph</A> type can be found in the
          <TextLogo />{' '}
          <Link to="/get-started/archive">archive documentation</Link>.
        </p>

        <section id="normalization-and-framing" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>
            Normalization and framing
          </h4>

          <p>
            Graphs represented as trees (as in the{' '}
            <a href="#graph-example">example</a> above) can be highly
            denormalized (for instance, in the example above, the author node is
            fully duplicated 3 times).
          </p>
          <p>
            Working with denormalized graphs can be difficult (and inefficient)
            as there are risks of creating different versions of nodes that
            should be identical (especially when a graph is being edited
            collaboratively).
          </p>
          <p>
            To avoid the data-integrity problems that come with denormalization,
            <TextLogo /> stores a normalized version of graphs by leveraging the{' '}
            <a href="https://www.w3.org/TR/json-ld-api/">
              JSON-LD 1.0 Processing Algorithms and API
            </a>{' '}
            specification to flatten JSON-LD documents.
          </p>

          <JsonldExample
            data={{
              '@context': 'https://sci.pe',
              '@id': 'scipe:graphId',
              '@type': 'Graph',
              mainEntity: 'scipe:articleId',
              '@graph': [
                {
                  '@id': 'scipe:articleId',
                  '@type': 'ScholarlyArticle',
                  author: ['user:peter'],
                  hasPart: ['scipe:datasetId', 'scipe:imageId']
                },
                {
                  '@id': 'user:peter',
                  '@type': 'Person',
                  name: 'Dr. Peter Jon Smith'
                },
                {
                  '@id': 'scipe:datasetId',
                  '@type': 'Dataset',
                  author: ['user:peter'],
                  distribution: ['_:30269b53-6a9d-46e3-936f-01eb0bb18ec8']
                },
                {
                  '@id': 'scipe:imageId',
                  '@type': 'Image',
                  author: ['user:peter'],
                  encoding: ['_:e145ba2e-efbe-459d-a263-adfdcd010c4a'],
                  isBasedOn: 'scipe:datasetId'
                },
                {
                  '@id': '_:30269b53-6a9d-46e3-936f-01eb0bb18ec8',
                  '@type': 'DataDownload',
                  contentSize: 1024,
                  contentUrl: 'http://example.com/data.xlsx'
                },
                {
                  '@id': '_:e145ba2e-efbe-459d-a263-adfdcd010c4a',
                  '@type': 'ImageObject',
                  contentUrl: 'http://example.com/image.png',
                  fileFormat: 'image/png',
                  potentialAction: ['_:b9bc9eb7-37d8-4667-8a32-0a97b61f3aa3']
                },
                {
                  '@id': '_:b9bc9eb7-37d8-4667-8a32-0a97b61f3aa3',
                  '@type': 'ImageProcessingAction',
                  target: {
                    '@id': '_:e60fee88-5062-459a-98c2-ddd699a37c4c'
                  }
                },
                {
                  '@id': '_:e60fee88-5062-459a-98c2-ddd699a37c4c',
                  '@type': 'EntryPoint',
                  httpMethod: 'POST',
                  urlTemplate: 'http://example.com/{encodingId}'
                }
              ]
            }}
          >
            Flattened form of the <a href="#graph-example">previous example</a>.
          </JsonldExample>

          <p>
            When trees are required,{' '}
            <a href="http://json-ld.org/spec/latest/json-ld-framing/">
              JSON-LD framing
            </a>{' '}
            provides a convenient way to recreate trees out of a flattened
            JSON-LD document. When retrieving graphs, the <TextLogo /> API
            provides a way to return a framed version of a graph.
          </p>

          <JsonldExample
            data={{
              '@context': 'https://sci.pe',
              '@type': 'ScholarlyArticle',
              '@embed': '@always'
            }}
          >
            A JSON-LD frame allowing to get a tree for the{' '}
            <A>ScholarlyArticle</A> of a flattened JSON-LD document.
          </JsonldExample>
        </section>

        <section id="versioning" className={bem`@__sub-section`}>
          <h4 className={bem`@__default-ui-type--subhead-2`}>Versioning</h4>
          <p>
            Graphs can be versioned. To version a <A>Graph</A>, a snapshot is
            taken. Snapshots are entirely frozen (immutable) and are
            characterized by a <A>version</A> property and a digital signature
            (the <abbr title="Natively Semantic Hash">NaSH</abbr>) that is
            invariant to the different forms of serialization of the graph.
          </p>

          <Info id="nash">
            <header>NaSH: Natively Semantic Hash</header>
            <p>
              Since a directed graph can express the same information in more
              than one way, it requires normalization to compute a robust and
              meaningful graph signature.
            </p>
            <p>
              A <abbr title="Natively Semantic Hash">NaSH</abbr> is computed as
              a <a href="https://en.wikipedia.org/wiki/SHA-2">SHA-256</a> digest
              (encoded in base64) of a normalized JSON-LD document.
              Normalization is performed according to the Universal{' '}
              <a href="http://json-ld.github.io/normalization/spec/">
                RDF Dataset Normalization Algorithm 2015
              </a>{' '}
              (
              <abbr title="RDF Dataset Normalization Algorithm 2015">
                URDNA2015
              </abbr>
              ).
            </p>
          </Info>

          <JsonldExample
            data={{
              '@context': 'https://sci.pe',
              '@id': 'scipe:graphId?version=1.0.0',
              '@type': 'Graph',
              version: '1.0.0',
              dateCreated: '2016-06-29T19:49:22.349Z',
              contentChecksum: {
                '@type': 'Checksum',
                checksumAlgorithm: 'nash',
                checksumValue:
                  'nashxAqaxNgOZS4mebiZJhOlR372Iy7C3w6a1Igc45//wlo='
              },
              mainEntity: 'scipe:articleId',
              '@graph': [
                {
                  '@id': 'scipe:articleId',
                  '@type': 'ScholarlyArticle',
                  author: ['user:peter'],
                  hasPart: ['scipe:datasetId', 'scipe:imageId']
                },
                {
                  '@id': 'user:peter',
                  '@type': 'Person',
                  name: 'Dr. Peter Jon Smith'
                },
                {
                  '@id': 'scipe:datasetId',
                  '@type': 'Dataset',
                  author: ['user:peter'],
                  distribution: ['_:30269b53-6a9d-46e3-936f-01eb0bb18ec8']
                },
                {
                  '@id': 'scipe:imageId',
                  '@type': 'Image',
                  author: ['user:peter'],
                  encoding: ['_:e145ba2e-efbe-459d-a263-adfdcd010c4a'],
                  isBasedOn: 'scipe:datasetId'
                },
                {
                  '@id': '_:30269b53-6a9d-46e3-936f-01eb0bb18ec8',
                  '@type': 'DataDownload',
                  contentSize: 1024,
                  contentUrl: 'http://example.com/data.xlsx'
                },
                {
                  '@id': '_:e145ba2e-efbe-459d-a263-adfdcd010c4a',
                  '@type': 'ImageObject',
                  contentUrl: 'http://example.com/image.png',
                  fileFormat: 'image/png',
                  potentialAction: ['_:b9bc9eb7-37d8-4667-8a32-0a97b61f3aa3']
                },
                {
                  '@id': '_:b9bc9eb7-37d8-4667-8a32-0a97b61f3aa3',
                  '@type': 'ImageProcessingAction',
                  target: {
                    '@id': '_:e60fee88-5062-459a-98c2-ddd699a37c4c'
                  }
                },
                {
                  '@id': '_:e60fee88-5062-459a-98c2-ddd699a37c4c',
                  '@type': 'EntryPoint',
                  httpMethod: 'POST',
                  urlTemplate: 'http://example.com/{encodingId}'
                }
              ]
            }}
          >
            Example of a snapshot of <A>Graph</A>.
          </JsonldExample>

          <p className={bem`@__warning`}>
            The <code>@id</code> of a snapshot is made of the <code>@id</code>{' '}
            of the <A>Graph</A> followed by a <code>version</code> query string
            parameter (e.g. <code>scipe:graphId?version=1.0.0</code>)
          </p>
        </section>
      </section>
    );
  }
}
