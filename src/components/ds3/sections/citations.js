import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';
import WordCitations from './word-citations';
// import BookmarkCitations from './bookmark-citations';
// import HyperlinkCitations from './hyperlink-citations';

class Citations extends React.Component {
  render() {
    return (
      <section id={Citations.ds3Id} className="style-guide__group">
        <h3>Citations</h3>

        <p>
          Citations of <strong>creative works</strong> (books, articles,
          websites, datasets, etc.), <strong>authorities</strong> (cases,
          statutes, rules, etc.), or <strong>entities</strong> (genetic
          sequences, proteins, chemicals, etc.) can be inserted inline in the
          text, as footnotes or endnotes, and/or in a dedicated section (named
          ‘References’, ‘Bibliography’ or ‘Works Cited’).
        </p>

        {/*
                <p>Citations must be inserted using either:</p>

                <ul>
                <li>
                <a href={`#${WordCitations.ds3Id}`}>
                The built-in <span className="ms-feature">Bibliography</span>
                feature
                </a>{' '}
                of Microsoft Word,
                </li>
                <li>
                <a href={`#${BookmarkCitations.ds3Id}`}>
                Manually bookmarking the long version of the citations and
                hyperlinking the shortened version to the bookmark.
                </a>
                </li>
                <li>
                <a href={`#${HyperlinkCitations.ds3Id}`}>
                Manually hyperlinking all the mentions of a citation to a URL and
                providing the long form of the citation as{' '}
                <span className="ms-feature">screen tips</span>
                </a>.
                </li>
                </ul>
              */}

        {/* TODO make the style customizable */}

        {/*
        <div>
          <p>
            The{' '}
            <a href="http://www.chicagomanualofstyle.org">
              Chicago Manual of Style
            </a>{' '}
            is recommended to style citations over other guidelines (e.g.,{' '}
            <a href="https://en.wikipedia.org/wiki/APA_style">
              <abbr title="American Psychological Association">APA</abbr>
            </a>,{' '}
            <a href="https://en.wikipedia.org/wiki/MLA_Style_Manual">
              <abbr title="Modern Language Association">MLA</abbr>
            </a>,{' '}
            <a href="https://en.wikipedia.org/wiki/Vancouver_system">
              Vancouver
            </a>) as:
          </p>

          <ul>
            <li>
              The Chicago Manual of Style contains guidelines for citation as
              notes (footnotes and/or endnotes) and bibliography as well as for
              citations following the author-date reference system.
            </li>
            <li>
              The Chicago Manual of Style usually results in citations
              containing more metadata (more authors etc.) than any other
              citation format.
            </li>
          </ul>
        </div>
        */}

        <WordCitations {...this.props} />
        {/* <BookmarkCitations {...this.props} /> TODO bring back when impletmented in document-worker */}
        {/* <HyperlinkCitations {...this.props} /> TODO bring back when MS word fix limitation (workaround is too hacky) */}

        <Schema
          id="data-citations"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            about: [
              {
                '@id': 'http://www.ncbi.nlm.nih.gov/nuccore/EU768872',
                '@type': 'Dataset',
                name: 'EU768872',
                description:
                  'Ideonella dechloratans cytochrome C class 1 precursor and molybdopterin-guanine dinucleotide biosynthesis genes, complete cds',
                isPartOf: {
                  '@id': 'http://www.ncbi.nlm.nih.gov/genbank',
                  name: 'GenBank',
                  '@type': 'DataCatalog'
                }
              }
            ],
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
                  '@type': 'ReadAction',
                  actionStatus: 'CompletedActionStatus',
                  endTime: {
                    '@type': 'xsd:date',
                    '@value': '2015-06-11'
                  }
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
        />
      </section>
    );
  }
}

Citations.ds3Id = `ds3:${Citations.name}`;

export default Customize(Citations);
