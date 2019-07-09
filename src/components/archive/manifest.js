import React from 'react';
import { Link } from 'react-router-dom';
import { BemTags, TextLogo, SchemaLink as A } from '@scipe/ui';
import HtmlExample from './html-example';
import JsonldExample from '../jsonld-example';
import Authors from './authors';
import Funding from './funding';
import Acknowledgements from './acknowledgements';
import Citations from './citations';
import Disclosures from './disclosures';
import Sources from './sources';
import Copyright from './copyright';
import License from './license';
import About from './about';
import Action from './action';
import CreativeWork from './creative-work';
import Name from './name';
import Caption from './caption';
import Abstract from './abstract';
import Dates from './dates';
import Keywords from './keywords';
import Info from '../info';
import Language from './language';
import ProgrammingLanguage from './programming-language';
import JournalInformation from './journal-information';

// TODO document flavored links (see RDF primer)

export default class Manifest extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <section id="manifest" className={bem`@__section`}>
        <h2 className={bem`@sa__default-ui-type--headline`}>Manifest</h2>
        <p>
          The manifest file must be a valid{' '}
          <a href="https://www.w3.org/TR/json-ld/">JSON-LD</a> file named{' '}
          <code>index.jsonld</code> and located at the root of the archive.
        </p>

        <p>
          The manifest (<code>index.jsonld</code>) must:
        </p>
        <ul className={bem`@__list`}>
          <li>
            Have the context (<code>@context</code>) set to{' '}
            <code>https://sci.pe</code>.
          </li>
          <li>
            Contain a <em>named graph</em> (so have <code>@id</code> and{' '}
            <code>@graph</code> defined).
          </li>
          <li>
            Have a type (<code>@type</code>) of <A>Graph</A>.
          </li>
        </ul>

        <p>
          When submitting a <A>Graph</A> to <TextLogo />, <code>@id</code>s can
          be omitted and{' '}
          <a href="https://www.w3.org/TR/json-ld/#identifying-blank-nodes">
            blank nodes
          </a>{' '}
          used when references are needed.
        </p>

        <section id="graph-metadata" className={bem`@__sub-section`}>
          <h3 className={bem`@__default-ui-type--subhead-1`}>Graph metadata</h3>

          <p>
            <A>Graph</A> metadata can be provided using any terms from{' '}
            <a href="http://schema.org">schema.org</a> and the{' '}
            <a href="http://ns.sci.pe">sci.pe ontology</a>.
          </p>

          <JsonldExample
            data={{
              '@id': 'scipe:graphId',
              '@type': 'Graph',
              version: '0.0.0',
              name: 'name',
              description: 'description',
              mainEntity: 'scipe:main-entity',
              dateCreated: '2017-10-04T13:57:23.711Z',
              isPartOf: {
                '@id': 'http://example.com/journal',
                '@type': 'Periodical',
                name: 'Journal of metaphysics'
              },
              contentChecksum: {
                '@type': 'Checksum',
                checksumAlgorithm: 'nash',
                checksumValue:
                  'nashxAqaxNgOZS4mebiZJhOlR372Iy7C3w6a1Igc45//wlo='
              }
            }}
          >
            Metadata commonly associated with a <A>Graph</A>.
          </JsonldExample>

          <p>
            The following properties are often used or have special meaning or
            restrictions:
          </p>

          <dl className={bem`@__term-list`}>
            <dt className={bem`@__term-word`}>
              <code>@context</code>
            </dt>
            <dd className={bem`@__term-def`}>
              The JSON-LD context, set to <code>https://sci.pe</code>{' '}
              (required).
            </dd>

            <dt className={bem`@__term-word`}>
              <code>@id</code>
            </dt>
            <dd className={bem`@__term-def`}>
              The graph id (can be omitted and generated at submission).
            </dd>

            <dt className={bem`@__term-word`}>
              <code>@type</code>
            </dt>
            <dd className={bem`@__term-def`}>
              The graph type set to <A>Graph</A> (required).
            </dd>

            <dt className={bem`@__term-word`}>
              <A>version</A>
            </dt>
            <dd className={bem`@__term-def`}>
              The graph version following{' '}
              <a href="http://semver.org/">semver</a>.
            </dd>

            <dt className={bem`@__term-word`}>
              <A>name</A>
            </dt>
            <dd className={bem`@__term-def`}>The graph name.</dd>

            <dt className={bem`@__term-word`}>
              <A>description</A>
            </dt>
            <dd className={bem`@__term-def`}>The graph description.</dd>

            <dt className={bem`@__term-word`}>
              <A>creator</A>
            </dt>
            <dd className={bem`@__term-def`}>
              The graph creator (can be omitted and generated at submission).
            </dd>

            <dt className={bem`@__term-word`}>
              <A>dateCreated</A>
            </dt>
            <dd className={bem`@__term-def`}>
              The date of creation of the graph (can be omitted and generated at
              submission).
            </dd>

            <dt className={bem`@__term-word`}>
              <A>isPartOf</A>
            </dt>
            <dd className={bem`@__term-def`}>
              A pointer (or series of nested pointers) indicating the{' '}
              <A>Periodical</A> (and / or <A>PublicationIssue</A> and{' '}
              <A>PublicationVolume</A>) (if any) this graph is part of.
            </dd>

            <dt className={bem`@__term-word`}>
              <A>mainEntity</A>
            </dt>
            <dd className={bem`@__term-def`}>
              The graph main entity, indicating the entry point of the graph in
              cases where the graph contains several resources.
            </dd>

            <dt className={bem`@__term-word`}>
              <A>contentChecksum</A>
            </dt>
            <dd className={bem`@__term-def`}>
              A checksum (<abbr title="Natively Semantic Hash">NaSH</abbr>)
              invariant to the different forms of serialization of the graph
              computed as a{' '}
              <a href="https://en.wikipedia.org/wiki/SHA-2">SHA-256</a> digest
              (encoded in base64) of the normalized JSON-LD manifest.
              Normalization is performed according to the Universal{' '}
              <a href="http://json-ld.github.io/normalization/spec/">
                RDF Dataset Normalization Algorithm 2015
              </a>{' '}
              (can be ommited and generated at submission).
            </dd>

            <dt className={bem`@__term-word`}>
              <A>resultOf</A>
            </dt>
            <dd className={bem`@__term-def`}>
              The action (if any) that resulted in the graph.
            </dd>

            <dt className={bem`@__term-word`}>
              <A>publishingPrinciples</A>
            </dt>
            <dd className={bem`@__term-def`}>
              A <A>CreateGraphAction</A> (if any) defining the publishing
              principles resulting in the production of the graph.
            </dd>
          </dl>
        </section>

        <section id="graph-content" className={bem`@__sub-section`}>
          <h3 className={bem`@__default-ui-type--subhead-1`}>
            Graph content (<code>@graph</code>)
          </h3>

          <p>
            Graph content is provided in JSON-LD as values of the{' '}
            <code>@graph</code> property of the manifest file (
            <code>index.jsonld</code>) or using RDFa.
          </p>

          <p>
            As for graph metadata, the content can be provided using any terms
            from <a href="http://schema.org">schema.org</a> and the{' '}
            <a href="http://ns.sci.pe">sci.pe ontology</a>.
          </p>

          <Info className={bem`@__info-panel`}>
            <header>Refering to files present in the archive</header>

            <p>
              Files present in the archive can be referered to by the{' '}
              <A>contentUrl</A> property using a file URL indicating{' '}
              <em>the relative path of the file from the archive root</em>{' '}
              (where <code>index.jsonld</code> is stored).
            </p>

            <JsonldExample
              data={{
                '@type': 'Graph',
                mainEntity: '_:resourceId',
                '@graph': [
                  {
                    '@id': '_:resourceId',
                    '@type': 'Dataset',
                    distribution: {
                      '@type': 'DataDownload',
                      contentUrl: 'file://path/to/data.csv'
                    }
                  }
                ]
              }}
            >
              Example of a manifest (<code>index.jsonld</code>) refering to a
              file using the <A>contentUrl</A> property
            </JsonldExample>
          </Info>

          <Info className={bem`@__info-panel`}>
            <header>HTML values in JSON-LD</header>

            <p>
              HTML values must be specified as{' '}
              <a href="https://www.w3.org/TR/json-ld/#typed-values">
                typed values
              </a>{' '}
              and typed with <code>rdf:HTML</code>
            </p>

            <JsonldExample
              data={{
                '@type': 'ScholarlyArticle',
                name: {
                  '@type': 'rdf:HTML',
                  '@value': '<strong>HTML</strong> title'
                }
              }}
            >
              A typed value used to represent HTML content
            </JsonldExample>
          </Info>

          <Info className={bem`@__info-panel`}>
            <header>Providing Graph content in RDFa</header>

            <p>
              <a href="https://www.w3.org/TR/rdfa-syntax/">RDFa</a> can be used
              to provide part of the manifest metadata with the restriction that{' '}
              <em>at submission</em>, the manifest (<code>index.jsonld</code>)
              must list at least:
            </p>

            <ul className={bem`@__list`}>
              <li>
                The <code>@id</code> (blank nodes are possible) of the resource
                described in RDFa (so that a binding between the manifest and
                the RDFa content can be established)
              </li>
              <li>
                An encoding (<A>MediaObject</A> and subclasses) attached to the
                resource and containing a <A>contentUrl</A> property pointing to
                the RDFa content.
              </li>
            </ul>

            <JsonldExample
              data={{
                '@type': 'Graph',
                mainEntity: '_:resourceId',
                '@graph': [
                  {
                    '@id': '_:resourceId',
                    encoding: {
                      contentUrl: 'file://path/to/rdfa/encoding.html'
                    }
                  }
                ]
              }}
            >
              Minimal manifest (<code>index.jsonld</code>) required to declare a
              resource serialized in RDFa
            </JsonldExample>

            <p>
              Author can then spread the metadata between the manifest and the
              RDFa according to what is most convenient for the use case.
            </p>

            <p>
              The RDFa document must be encoded in UTF-8 and must feature a
              DOCTYPE as its preamble.
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
    <article resource="scipe:resourceId">
       <!-- content -->
    </article>
  </body>
</html>`}
            >
              HTML / RDFa boilerplate
            </HtmlExample>

            <p>
              When appropriate, the following prefixes should be defined as
              documented by the table below:
            </p>

            <div className={bem`@__table`}>
              <table className={bem`@__term-table`}>
                <caption className={bem`@__term-table-caption`}>
                  prefix definition
                </caption>
                <thead className={bem`@__term-table-header`}>
                  <tr className={bem`@__term-table-row`}>
                    <th className={bem`@__term-table-header-cell`}>Prefix</th>
                    <th className={bem`@__term-table-header-cell`}>URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={bem`@__term-table-row`}>
                    <td className={bem`@__term-table-cell`}>schema</td>
                    <td className={bem`@__term-table-cell`}>
                      http://schema.org/
                    </td>
                  </tr>
                  <tr className={bem`@__term-table-row`}>
                    <td className={bem`@__term-table-cell`}>xsd</td>
                    <td className={bem`@__term-table-cell`}>
                      http://www.w3.org/2001/XMLSchema#
                    </td>
                  </tr>
                  <tr className={bem`@__term-table-row`}>
                    <td className={bem`@__term-table-cell`}>rdf</td>
                    <td className={bem`@__term-table-cell`}>
                      http://www.w3.org/1999/02/22-rdf-syntax-ns#
                    </td>
                  </tr>
                  <tr className={bem`@__term-table-row`}>
                    <td className={bem`@__term-table-cell`}>sa</td>
                    <td className={bem`@__term-table-cell`}>
                      https://ns.sci.pe/
                    </td>
                  </tr>
                  <tr className={bem`@__term-table-row`}>
                    <td className={bem`@__term-table-cell`}>scienceai</td>
                    <td className={bem`@__term-table-cell`}>https://sci.pe/</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Info>

          <Info className={bem`@__info-panel`}>
            <header>Providing Graph content with Microsoft Word and DS3</header>

            <p>
              Microsoft Word and{' '}
              <abbr title="DOCX standard scientific style">
                <Link to="/get-started/ds3">DS3</Link>
              </abbr>{' '}
              can be used to provide part of the manifest metadata with the
              restriction that <em>at submission</em>, the manifest (
              <code>index.jsonld</code>) must list at least:
            </p>

            <ul className={bem`@__list`}>
              <li>
                The <code>@id</code> (blank nodes are possible) of the resource
                described in{' '}
                <abbr title="DOCX standard scientific style">
                  <Link to="/get-started/ds3">DS3</Link>
                </abbr>{' '}
                (so that a binding between the manifest and the{' '}
                <abbr title="DOCX standard scientific style">
                  <Link to="/get-started/ds3">DS3</Link>
                </abbr>{' '}
                content can be established)
              </li>
              <li>
                An encoding (<A>MediaObject</A> and subclasses) attached to the
                resource and containing a <A>contentUrl</A> property pointing to
                the{' '}
                <abbr title="DOCX standard scientific style">
                  <Link to="/get-started/ds3">DS3</Link>
                </abbr>{' '}
                content.
              </li>
            </ul>

            <JsonldExample
              data={{
                '@type': 'Graph',
                mainEntity: '_:resourceId',
                '@graph': [
                  {
                    '@id': '_:resourceId',
                    encoding: {
                      contentUrl: 'file://path/to/ds3/encoding.ds3.docx'
                    }
                  }
                ]
              }}
            >
              Minimal manifest (<code>index.jsonld</code>) required to declare a
              resource serialized in Microsoft Word with{' '}
              <abbr title="DOCX standard scientific style">
                <Link to="/get-started/ds3">DS3</Link>
              </abbr>
              .
            </JsonldExample>

            <p>
              Author can then spread the metadata between the manifest and the{' '}
              <abbr title="DOCX standard scientific style">
                <Link to="/get-started/ds3">DS3</Link>
              </abbr>{' '}
              file according to what is most convenient for the use case.
            </p>
            <p>
              Interested readers should consult the{' '}
              <abbr title="DOCX standard scientific style">
                <Link to="/get-started/ds3">DS3</Link>
              </abbr>{' '}
              <Link to="/get-started/ds3">documentation</Link>.
            </p>
          </Info>

          <p>
            The following sections document common patterns associated with
            using <a href="http://schema.org">schema.org</a> and the{' '}
            <a href="http://ns.sci.pe">sci.pe ontology</a> in the context of
            scholarly publishing and <a href="http://sci.pe">sci.pe</a>.
          </p>

          <section id="resources" className={bem`@__sub-section`}>
            <h4 className={bem`@__default-ui-type--subhead-2`}>Resources</h4>

            <p>
              Resources are <A>CreativeWork</A> (and subclasses thereof)
              typically of the following types:
            </p>
            <ul className={bem`@__list`}>
              <li>
                <A>ScholarlyArticle</A>
              </li>
              <li>
                <A>Table</A>
              </li>
              <li>
                <A>Image</A>
              </li>
              <li>
                <A>Audio</A>
              </li>
              <li>
                <A>Video</A>
              </li>
              <li>
                <A>Dataset</A>
              </li>
              <li>
                <A>SoftwareSourceCode</A>
              </li>
              <li>
                <A>Formula</A>
              </li>
              <li>
                <A>TextBox</A>
              </li>
            </ul>

            <p>
              Resources follow a simplified{' '}
              <a
                href="https://en.wikipedia.org/wiki/Functional_Requirements_for_Bibliographic_Records"
                target="_blank"
                rel="noopener noreferrer"
              >
                FRBR
              </a>{' '}
              model in which a distinction is made between creative works (e.g.
              an article) and their “encodings” (e.g. an HTML representation of
              the article).
            </p>

            <JsonldExample
              data={{
                '@id': '_:resourceId',
                '@type': 'CreativeWork',
                encoding: {
                  '@type': 'MediaObject',
                  fileFormat: 'text/html',
                  contentUrl: 'file:///path/to/resource/from/archive/root'
                }
              }}
            >
              Overall structure of a resource
            </JsonldExample>

            <CreativeWork />

            <Language />

            <Name />
            <Caption />

            <Abstract />
            <Dates />
            <Keywords />
            <About />
            <License />
            <Copyright />
            <ProgrammingLanguage />
            <JournalInformation />

            <Authors />

            <Sources />
            <Funding />
            <Disclosures />
            <Acknowledgements />
            <Citations />
          </section>

          <Action />
        </section>
      </section>
    );
  }
}
