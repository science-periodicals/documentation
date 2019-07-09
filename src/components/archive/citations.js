import React from 'react';
import { BemTags, SchemaLink as A } from '@scipe/ui';
import JsonldExample from '../jsonld-example';

export default class Citations extends React.Component {
  render() {
    const bem = new BemTags('@sa', '@archive');

    return (
      <section id="citations" className={bem`citations @__sub-section`}>
        <h5 className={bem`@__default-ui-type--subhead-3`}>Citations</h5>
        <section
          id="citations-published-resources"
          className={bem`citations @__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Published resources
          </h6>

          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              citation: [
                {
                  '@id': 'http://doi.org/doi',
                  '@type': 'ScholarlyArticle',
                  name: 'On the effect of X on Y',
                  author: {
                    '@type': 'Person',
                    givenName: 'Peter',
                    familyName: 'Smith',
                    additionalName: 'Jon',
                    name: 'Peter J Smith'
                  },
                  isPartOf: {
                    '@type': 'PublicationIssue',
                    issueNumber: 4,
                    isPartOf: {
                      '@type': 'PublicationVolume',
                      volumeNumber: 7,
                      isPartOf: {
                        '@type': 'Periodical',
                        name: 'Journal of Metaphysics'
                      }
                    }
                  },
                  pageStart: '615',
                  pageEnd: '620',
                  datePublished: {
                    '@type': 'xsd:gYearMonth',
                    '@value': '2015-12'
                  }
                },
                {
                  '@type': 'Book',
                  isbn: '0893470627',
                  name: 'Literary Machines',
                  author: {
                    '@type': 'Person',
                    name: 'Ted Nelson'
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: 'Eastgate'
                  },
                  datePublished: {
                    '@type': 'xsd:gYear',
                    '@value': 1993
                  }
                }
              ]
            }}
          >
            The <A>citation</A> property is used to reference other creative
            work such as <A>ScholarlyArticle</A> or <A>Book</A> cited by the
            resource
          </JsonldExample>
        </section>

        <section
          id="citations-web-resources"
          className={bem`citations @__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>Web resources</h6>

          <p>
            The <A>citation</A> property can also be used to reference web
            resources and datasets.
          </p>

          <p>
            The date when the resource was viewed can be indicated though the{' '}
            <A>endTime</A> property of a completed (<A>actionStatus</A> of{' '}
            <A>CompletedActionStatus</A>) <A>ViewAction</A> listed as a
            potential action of the resource.
          </p>

          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              citation: [
                {
                  '@id': 'http://example.com/notes',
                  '@type': 'Webpage',
                  name: 'Notes on memory machines',
                  author: {
                    '@type': 'Person',
                    givenName: 'Jon',
                    familyName: 'Markup'
                  },
                  datePublished: {
                    '@type': 'xsd:date',
                    '@value': '2015-06-11'
                  },
                  potentialAction: {
                    '@type': 'ViewAction',
                    description: 'accessed on',
                    actionStatus: 'CompletedActionStatus',
                    endTime: {
                      '@type': 'xsd:date',
                      '@value': '2015-06-11'
                    }
                  }
                },
                {
                  '@id': 'http://www.ncbi.nlm.nih.gov/nuccore/EU768872',
                  '@type': 'Dataset',
                  name: 'EU768872',
                  description:
                    'Ideonella dechloratans cytochrome C class 1 precursor and molybdopterin-guanine dinucleotide biosynthesis genes, complete cds',
                  includedInDataCatalog: {
                    '@id': 'http://www.ncbi.nlm.nih.gov/genbank',
                    name: 'GenBank',
                    '@type': 'DataCatalog'
                  }
                }
              ]
            }}
          >
            Example of citations involving web resources (<A>WebPage</A> and{' '}
            <A>Dataset</A>). Note the use of a <A>ViewAction</A> to indicate the
            time when the web resources was accessed.
          </JsonldExample>
        </section>

        <section
          id="citations-point-citations"
          className={bem`citations @__sub-section`}
        >
          <h6 className={bem`@__default-ui-type--subhead-3`}>
            Point citations
          </h6>

          <p>
            Point citations (citation to a page, a specific anchor of a webpage,
            a section of an image, ...) are made using schema.org role (<A>
              TargetRole
            </A>) and selectors (<A>Selector</A>). Readers not familiar with the
            semantic of schema.org <A>Role</A> can consult the{' '}
            <a href="http://blog.schema.org/2014/06/introducing-role.html">
              introductory blog post.
            </a>
          </p>

          <JsonldExample
            data={{
              '@type': 'ScholarlyArticle',
              citation: {
                '@type': 'TargetRole',
                name: 'Nelson 1993, 12-15',
                hasSelector: {
                  '@type': 'Selector',
                  name: '12-15',
                  pageStart: 12,
                  pageEnd: 15
                },
                citation: {
                  '@type': 'Book',
                  isbn: '0893470627',
                  name: 'Literary Machines',
                  author: {
                    '@type': 'Person',
                    name: 'Ted Nelson'
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: 'Eastgate'
                  },
                  datePublished: {
                    '@type': 'xsd:gYear',
                    '@value': 1993
                  }
                }
              }
            }}
          >
            Example of a point citation using a <A>TargetRole</A> and a{' '}
            <A>Selector</A>. Note how the <A>name</A> property of the{' '}
            <A>TargetRole</A> is used to capture the{' '}
            <strong>citation callout</strong>.
          </JsonldExample>
        </section>
      </section>
    );
  }
}
