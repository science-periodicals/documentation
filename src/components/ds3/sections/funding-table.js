import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';
import { FormatOrganization, FormatAward } from '../formats';

class Funding extends React.Component {
  render() {
    return (
      <section id={Funding.ds3Id} className="style-guide__group">
        <h3>Funding</h3>

        <section id="funding-statements" className="style-guide__subgroup">
          <h4>Funding table</h4>
          <p>
            Place funding information in a separate ‘Funding’ section (rather
            than in the ‘Acknowledgements’ section or elsewhere in the
            document), and organize it into a table with one funder per row.
          </p>

          <div className="example">
            <table>
              <thead>
                <tr>
                  <th scope="col">Source</th>
                  <th scope="col">Award</th>
                  <th scope="col">Target</th>
                  <th scope="col">Comment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="organization">
                      <a href="https://www.nih.gov/">
                        National Institutes of Health{' '}
                        <span className="token">(</span>NIH
                        <span className="token">)</span>
                      </a>
                      <code className="token"> &ndash; </code>Bethesda
                      <code className="token">,</code> MD
                    </span>
                  </th>
                  <td>
                    <span className="award">
                      3R01TW005&ndash;06S1 <span className="token">“</span>
                      American Recovery and Reinvestment Act award
                      <span className="token">”</span>
                    </span>
                  </td>
                  <td>The work</td>
                  <td>partial funding</td>
                </tr>
                <tr>
                  <th
                    scope="rowgroup"
                    rowSpan={2}
                    style={{ borderTop: '1px solid lightgrey' }}
                  >
                    <span className="organization">
                      <a href="https://www.gatesfoundation.org">
                        Bill &amp; Melinda Gates Foundation
                      </a>
                    </span>
                  </th>
                  <td>
                    <span className="award">Grant number OPP1176666</span>
                  </td>
                  <td>
                    <span className="cross-reference">
                      Prof. James P Sullivan, MD
                    </span>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <span className="award">
                      OPP38631_01 <span className="token">“</span>Collaboration
                      for AIDS Vaccine Discovery{' '}
                      <span className="token">(</span>CAVD
                      <span className="token">)</span>
                      <span className="token">”</span>
                    </span>
                  </td>
                  <td>
                    <span className="cross-reference">
                      Supporting Dataset 1
                    </span>
                  </td>
                  <td>
                    Awarded to{' '}
                    <span className="cross-reference">
                      Prof. James P Sullivan, MD
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>To include funding source information:</p>

          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Create a new section with a heading (<code>Heading 2</code>{' '}
                  style) named: ‘Funding’.
                </figcaption>
                <img
                  src="/images/funding1.png"
                  alt="Heading style 2 is applied to the Funding section heading"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>Insert a new table:</p>
                  <ol>
                    <li>Click where the table should be inserted.</li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Table</span>.
                    </li>
                    <li>
                      Select one of the possible options from the drop-down menu
                      to set the{' '}
                      <span className="ms-label">Number of columns</span> to 4
                      and <span className="ms-label">Number of rows</span> to
                      the number of funders plus one (for a header row).
                    </li>
                    <li>
                      Additional rows can be added at any time (right click on
                      the table and select{' '}
                      <span className="ms-label">Insert</span> from the
                      drop-down menu to add rows above or below).
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/funding-table-1.png"
                  alt="create a table for the funding information"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Use the options available in the{' '}
                    <span className="ms-label">Table Design</span> tab of the
                    ribbon to specify (when needed):
                  </p>
                  <ul>
                    <li>
                      A <span className="ms-label">Header Row</span> (first
                      row).
                    </li>
                    <li>
                      A <span className="ms-label">First Column</span> of header
                      cells.
                    </li>
                    <li>
                      A table design.{' '}
                      <span className="ms-value">Grid Table 5 Dark</span> is
                      recommended as it improves the visibility of the table
                      elements (header row, first column, ...).
                    </li>
                  </ul>
                </figcaption>
                <img
                  src="/images/funding-table-2.png"
                  alt="select a table design and tick all the required table heading elements"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>Add the content of the header cells to the table.</p>
                  <ol>
                    <li>
                      Label the column header cells: ‘Source’, ‘Award’,
                      ‘Target’, and ‘Comment’.
                    </li>
                    <li>
                      Add funding source in the first column of header cells,
                      formatted according to the{' '}
                      <a href={`#${FormatOrganization.ds3Id}`}>
                        organization format
                      </a>
                      .
                      <p className="example">
                        <span className="organization">
                          National Institutes of Health{' '}
                          <code className="token">(</code>NIH
                          <code className="token">)</code>
                          <code className="token"> - </code>Bethesda
                          <code className="token">, </code> MD
                          <code className="token">,</code> USA
                        </span>
                      </p>
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/funding-table-3.png"
                  alt="fill in header cells"
                />
              </figure>
              <p className="warning">
                Be sure to only include one funding source per row. Note, if an
                award is attributed to multiple sources, each source must be
                listed in a separate row and the award information duplicated.
              </p>
            </li>

            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Fill in award information if any, following the{' '}
                    <a href={`#${FormatAward.ds3Id}`}>award format</a>.
                  </p>
                  <p className="example">
                    <span className="award">
                      OPP38631_01 <span className="token">“</span>Collaboration
                      for AIDS Vaccine Discovery{' '}
                      <span className="token">(</span>CAVD
                      <span className="token">)</span>
                      <span className="token">”</span>
                    </span>
                  </p>
                </figcaption>
                <img
                  src="/images/funding-table-4.png"
                  alt="fill in award data"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    When the same funding source applies to multiple awards,{' '}
                    <strong>Merge cells</strong> in the source column across
                    rows:
                  </p>
                  <ol>
                    <li>Highlight the cells to be merged.</li>
                    <li>
                      Click on the{' '}
                      <span className="ms-button">Merge cells</span> button in
                      the <span className="ms-label">Layout</span> tab of the
                      ribbon (or right click and select{' '}
                      <span className="ms-value">Merge cells</span>).
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/funding-table-5.png"
                  alt="fill in header cells"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    When possible, create a hyperlink for each funding source
                    and award:
                  </p>
                  <ol>
                    <li>Highlight the text to be hyperlinked.</li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on
                      <span className="ms-button">Hyperlink</span>.
                    </li>
                    <li>
                      Enter the URL in the{' '}
                      <span className="ms-label">Address</span> input.
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/funding-table-6.png"
                  alt="Funding source organization names and award are hyperlinked to URLs using the built-in insert hyperlink tool"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add targets (optional). Fill in the subject or recipient of
                    a source of funding.
                  </p>
                  <p>The target of a source of funding can be:</p>
                  <ul>
                    <li>
                      <strong>The work</strong>, in which case the target must
                      be ‘The work’.
                    </li>
                    <li>
                      <strong>Part of the work</strong> (such as dataset). Part
                      of the work are represented by their caption label. If
                      several parts are mentioned, they must be separated by
                      semicolon (<code className="token">;</code>). Caption
                      labels must be inserted using the built-in{' '}
                      <span className="ms-feature">Cross-reference</span>{' '}
                      feature of Microsoft Word.
                    </li>
                    <li>
                      <strong>Authors or contributors of the work</strong>{' '}
                      (persons or organizations). Persons are represented by
                      their display name and organizations are represented by a
                      bookmarked part of the organization trail (see{' '}
                      <a href="#ds3:FormatPerson">person</a> and{' '}
                      <a href="#ds3:FormatOrganization">organization</a>{' '}
                      formats). If several authors or contributors are
                      mentioned, they must be separated by a semicolon (
                      <code className="token">;</code>). Person and organization
                      names must be inserted with the built-in{' '}
                      <span className="ms-feature">Cross-reference</span>{' '}
                      feature of Microsoft Word (see{' '}
                      <a href="#ds3:CrossReferences">cross references</a>). The
                      words “<code>The authors</code>”, “
                      <code>The contributors</code>”, “
                      <code>The authors and contributors</code>“ (or their
                      singular versions) can be used as valid subjects instead
                      of the full list of the works&apos; authors and
                      contributors.
                    </li>
                  </ul>
                  <p className="example">
                    <span className="resource cross-reference">
                      Supporting Dataset 1
                    </span>
                  </p>
                </figcaption>
                <img src="/images/funding-table-7.png" alt="add targets" />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add comments (optional). Fill in additional information
                    about the award.
                  </p>
                  <ol>
                    <li>
                      When referencing contributors of the work or organizations
                      from the affiliation list in comments, use the built-in{' '}
                      <span className="ms-feature">Cross-reference</span>{' '}
                      feature of Microsoft Word.
                    </li>
                    <li>
                      Ensure that the persons or organizations have been{' '}
                      <a href="#bookmark-author-display-name">bookmarked</a> so
                      that they can be cross-referenced.
                    </li>
                    <li>
                      Go to the <span className="ms-feature">Insert</span> tab
                      of the ribbon and click on{' '}
                      <span className="ms-button">Cross-reference</span>.
                    </li>
                    <li>
                      Set <span className="ms-label">Reference type</span> to{' '}
                      <span className="ms-value">Bookmark</span> and{' '}
                      <span className="ms-label">Insert reference to</span> to{' '}
                      <span className="ms-value">Bookmark text</span>. Make sure
                      to leave the{' '}
                      <span className="ms-label">Insert as hyperlink</span>{' '}
                      option checked.
                    </li>
                    <li>
                      Under <span className="ms-label">For which bookmark</span>{' '}
                      select the name of the bookmark corresponding to the
                      person or organization that needs to be inserted and click
                      on <span className="ms-button">Insert</span>.
                    </li>
                    <li>
                      <p>
                        The bookmarked text corresponding to the selected
                        bookmark label is inserted in the document.
                      </p>
                      <p className="example">
                        Awarded to{' '}
                        <span className="person cross-reference">
                          Prof. James P Sullivan, MD
                        </span>
                      </p>
                    </li>
                  </ol>
                </figcaption>
                <img src="/images/funding-table-8.png" alt="Add comments" />
              </figure>
            </li>
          </ol>
        </section>

        <section id="award-format" className="style-guide__subgroup">
          <h4>Award format</h4>
          <p>
            Award information is defined using the{' '}
            <a href="#award-format">award format</a> specified below.
          </p>
          <FormatAward />
        </section>

        <Schema
          id="data-funding"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            sponsor: {
              '@type': 'SponsorRole',
              sponsor: {
                '@type': 'Organization',
                name: 'Collaborative systems',
                parentOrganization: {
                  '@id': 'http://www.nsf.gov/div/index.jsp?div=IIS',
                  '@type': 'Organization',
                  name: 'Division of Information & Intelligent Systems',
                  alternateName: 'IIS',
                  parentOrganization: {
                    '@id': 'http://www.nsf.gov',
                    '@type': 'GovernmentOrganization',
                    name: 'National Science Foundation',
                    alternateName: 'NSF'
                  }
                }
              },
              roleOffer: {
                '@id':
                  'http://www.nsf.gov/awardsearch/showAward?AWD_ID=0553202',
                '@type': 'FundingSource',
                name:
                  'SGER: First Stages of Exploratory Development of HyperScope',
                serialNumber: 'award number 0553202'
              },
              startDate: '2005-11-01',
              endDate: '2006-12-31'
            },
            author: {
              '@type': 'ContributorRole',
              author: {
                '@id': 'http://example.com/psullivan',
                '@type': 'Person',
                name: 'Prof. James P Sullivan, MD',
                givenName: 'James',
                familyName: 'Sullivan',
                additionalName: ['Peter', 'Robert'],
                honorificPrefix: 'Prof',
                honorificSuffix: 'MD',
                sponsor: {
                  '@type': 'SponsorRole',
                  sponsor: {
                    '@id': 'http://www.fic.nih.gov',
                    '@type': 'GovernmentOrganization',
                    name: 'Fogarty International Center',
                    parentOrganization: {
                      '@id': 'http://www.nih.gov',
                      '@type': 'GovernmentOrganization',
                      name: 'National Institutes of Health',
                      alternateName: 'NIH'
                    }
                  },
                  startDate: '2015-01-01'
                }
              },
              roleAffiliation: {
                '@id': 'http://www.biology.as.nyu.edu',
                '@type': 'CollegeOrUniversity',
                name: 'Department of Biology',
                parentOrganization: {
                  '@id': 'http://www.nyu.edu',
                  '@type': 'CollegeOrUniversity',
                  name: 'New York University',
                  alternateName: 'NYU'
                },
                funder: {
                  '@type': 'FunderRole',
                  funder: {
                    '@id': 'http://www.gatesfoundation.org',
                    '@type': 'NGO',
                    name: 'Bill & Melinda Gates Foundation'
                  },
                  roleOffer: {
                    '@type': 'FundingSource',
                    name: 'Collaboration for AIDS Vaccine Discovery Grant',
                    alternateName: 'CAVD',
                    serialNumber: 'OPP38631_01'
                  },
                  startDate: '2009-11-19'
                }
              }
            }
          }}
        />
      </section>
    );
  }
}

Funding.ds3Id = `ds3:${Funding.name}`;

export default Customize(Funding);
