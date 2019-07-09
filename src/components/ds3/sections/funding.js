import React from 'react';
import Schema from '../schema';
import FormatFunding from '../formats/format-funding';
import FormatAward from '../formats/format-award';
import Customize from '../../../hoc/customize';

class Funding extends React.Component {
  render() {
    return (
      <section id={Funding.ds3Id} className="style-guide__group">
        <h3>Funding</h3>

        <section id="funding-statements" className="style-guide__subgroup">
          <h4>Funding statements</h4>
          <p>
            Place all funding information in a separate ‘Funding’ section,
            rather than including it in the ‘Acknowledgements’ section or
            elsewhere in the document. To include funding source information:
          </p>
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
                  <p>Create a bulleted list.</p>
                  <p>
                    The bulleted list will contain source of funding for the
                    work, the authors and contributors, and the organizations
                    involved with this work.
                  </p>

                  <p>
                    When possible, include one source of funding per list item,
                    following the instructions of the{' '}
                    <a href="#structured-funding-statements">
                      Structured funding statements
                    </a>{' '}
                    sections specified below.
                  </p>

                  <p className="warning">
                    If it is not possible to follow the{' '}
                    <a href="#format-funding">funding format</a>, include each
                    source of funding (in any format) as a separate list item in
                    the bulleted list. Note, a source of funding can include
                    multiple organizations and awards and be granted to multiple
                    recipients.
                  </p>
                </figcaption>
                <img
                  src="/images/funding2.png"
                  alt="create a bulleted list that will receive the funding information"
                />
              </figure>
            </li>
          </ol>
        </section>

        <section
          id="structured-funding-statements"
          className="style-guide__subgroup"
        >
          <h4>Structured funding statements</h4>
          <p>
            Structured funding statements are defined using the{' '}
            <a href="#format-funding">funding format</a> and{' '}
            <a href="#format-award">award format</a> specified below.
          </p>

          <FormatFunding />
          <FormatAward />

          <p>
            The following sections present detailed instruction of structured
            funding statements in case funding is attributed to
          </p>
          <ul>
            <li>
              <a href="#funding-attributed-to-the-work">the work</a>
            </li>
            <li>
              <a href="#funding-attributed-to-part-of-the-work">
                part of the work
              </a>
            </li>
            <li>
              <a href="#funding-attributed-to-persons">persons</a>
            </li>
            <li>
              <a href="#funding-attributed-to-organizations">organizations</a>
            </li>
          </ul>

          <section id="funding-attributed-to-the-work">
            <h5>Funding attributed to the work</h5>

            <p>
              To create structured funding statements for funding attributed to
              the work:
            </p>

            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Add one entry (list item) per funding source (note that a
                      funding source can come from multiple organizations)
                      according to the{' '}
                      <a href="#format-funding">funding format</a> defined
                      above.
                    </p>
                    <p className="example">
                      <span className="subject">The work</span>{' '}
                      <span className="predicate">
                        was funded by<code className="token">:</code>
                      </span>
                      <span className="organization">
                        Collaborative systems
                        <code className="token"> &lt; </code>Division of
                        Information &amp; Intelligent Systems{' '}
                        <code className="token">(</code>IIS
                        <code className="token">)</code>
                        <code className="token">&lt;</code> National Science
                        Foundation <code className="token">(</code>NSF
                        <code className="token">)</code>
                      </span>
                      <code className="token"> / </code>{' '}
                      <span className="award">
                        award number 0553202 <code className="token">“</code>
                        SGER: First Stages of Exploratory Development of
                        HyperScope<code className="token">”</code>
                      </span>
                      <code className="token">.</code>
                    </p>
                  </figcaption>
                  <img
                    src="/images/funding-work-1.png"
                    alt="Add funding sources attributed to the work"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      When possible, create a hyperlink for each funding
                      organization and award / grant / project:
                    </p>
                    <ol>
                      <li>Highlight the text to be hyperlinked.</li>
                      <li>
                        Go to the <span className="ms-label">Insert</span> tab
                        of the ribbon and click on
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
                    src="/images/funding-work-2.png"
                    alt="Funding source organization names and award are hyperlinked to URLs using the built-in insert hyperlink tool"
                  />
                </figure>
              </li>
            </ol>

            <Schema
              id="data-funding-work"
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
                      name: 'Division of Information &amp; Intelligent Systems',
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
                }
              }}
            />
          </section>

          <section id="funding-attributed-to-part-of-the-work">
            <h5>Funding attributed to part of the work</h5>

            <p>
              To create structured funding statements for funding attributed to
              part of the work add list items and for each list item:
            </p>

            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <ol>
                      <li>
                        Specify the subjects of the funding statement by
                        inserting the caption labels of the relevant part of the
                        work with the built-in{' '}
                        <span className="ms-feature">Cross-reference</span>{' '}
                        feature of Microsoft Word.
                      </li>
                      <li>
                        Ensure that the parts of the work have a{' '}
                        <span className="ms-feature">caption</span> so that they
                        can be cross-referenced.
                      </li>
                      <li>
                        Go to the <span className="ms-feature">Insert</span> tab
                        of the ribbon and click on{' '}
                        <span className="ms-button">Cross-reference</span>.
                      </li>
                      <li>
                        Select the{' '}
                        <span className="ms-label">Reference type</span>{' '}
                        corresponding to the part of the work and set{' '}
                        <span className="ms-label">Insert reference to</span> to{' '}
                        <span className="ms-value">Only label and number</span>.
                      </li>
                      <li>
                        Select the caption to be inserted as the subject of the
                        funding statement.
                      </li>
                      <li>
                        Make sure to leave the{' '}
                        <span className="ms-label">Insert as hyperlink</span>{' '}
                        option checked to quickly navigate to the original
                        location of the resource.
                      </li>
                    </ol>
                    <p className="example">
                      <span className="resource cross-reference">
                        Supporting Dataset 1
                      </span>
                    </p>
                  </figcaption>
                  <img
                    src="/images/funding-part-work-1.png"
                    alt="Add funding sources attributed to the part of the work"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Fill in the rest of the funding statement according to the{' '}
                      <a href="#format-funding">funding format</a>.
                    </p>
                    <p className="example">
                      <span className="cross-reference">
                        <span className="resource">Supporting Dataset 1</span>
                      </span>{' '}
                      <span className="predicate">
                        was funded by<code className="token">:</code>
                      </span>{' '}
                      <span className="organization">
                        Science and Technology Directorate
                        <code className="token"> &lt; </code>Department of
                        Homeland Security <code className="token">(</code>DHS
                        <code className="token">)</code>
                      </span>
                      <code className="token"> / </code>{' '}
                      <span className="award">contract HSHQDC-12-C-00058</span>
                      <code className="token">.</code>
                    </p>
                  </figcaption>
                  <img
                    src="/images/funding-part-work-2.png"
                    alt="Add funding sources attributed to the part of the work"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Create a hyperlink for each funding source and award /
                      grant / project when possible:
                    </p>
                    <ol>
                      <li>Highlight the text to be hyperlinked.</li>
                      <li>
                        Go to the <span className="ms-label">Insert</span> tab
                        of the ribbon and click on{' '}
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
                    src="/images/funding-part-work-3.png"
                    alt="Funding source organization names and award are hyperlinked to URLs using the built-in insert hyperlink tool"
                  />
                </figure>
              </li>
            </ol>

            <Schema
              id="data-funding-part-of-work"
              data={{
                '@context': 'https://sci.pe',
                '@id': 'http://example.com/dataset',
                '@type': 'Dataset',
                sponsor: {
                  '@type': 'SponsorRole',
                  sponsor: {
                    '@id': 'http://www.dhs.gov/science-and-technology',
                    '@type': 'GovernmentOrganization',
                    name: 'Science and Technology Directorate',
                    alternateName: 'S&amp;T',
                    parentOrganization: {
                      '@id': 'http://www.dhs.gov',
                      '@type': 'GovernmentOrganization',
                      name: 'Department of Homeland Security',
                      alternateName: 'DHS'
                    }
                  },
                  roleOffer: {
                    '@type': 'FundingSource',
                    serialNumber: 'contract HSHQDC-12-C-00058'
                  },
                  startDate: '2012-09-21'
                }
              }}
            />
          </section>

          <section id="funding-attributed-to-persons">
            <h5>Funding attributed to persons</h5>

            <p>
              To create structured funding statements for funding attributed to
              persons (authors or contributors) add list items and for each list
              item:
            </p>

            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <ol>
                      <li>
                        Ensure that the persons (from the authors and
                        contributors list) have been{' '}
                        <a href="#bookmark-author-display-name">bookmarked</a>{' '}
                        so that they can be cross-referenced.
                      </li>
                      <li>
                        Go to the <span className="ms-label">Insert</span> tab
                        of the ribbon and select{' '}
                        <span className="ms-button">Cross-reference</span>.
                      </li>
                      <li>
                        Set <span className="ms-label">Reference type</span> to{' '}
                        <span className="ms-value">Bookmark</span> and{' '}
                        <span className="ms-label">Insert reference to</span> to{' '}
                        <span className="ms-value">Bookmark text</span>. Make
                        sure to leave the{' '}
                        <span className="ms-label">Insert as hyperlink</span>{' '}
                        option checked.
                      </li>
                      <li>
                        Under{' '}
                        <span className="ms-label">For which bookmark</span>{' '}
                        select the name of the bookmark corresponding to the
                        person (author or contributor) that needs to be inserted
                        as the subject of the funding statement and click on{' '}
                        <span className="ms-button">Insert</span>.
                      </li>
                      <li>
                        <p>
                          The bookmarked text corresponding to the selected
                          bookmark label is inserted in the document.
                        </p>
                        <p className="example">
                          <span className="person cross-reference">
                            Prof. James P Sullivan, MD
                          </span>
                        </p>
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/funding-person-1.png"
                    alt="Insert a person or organization as a subject of a funding sources with the insert cross-reference tool"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Fill in the rest of the funding statement according to the{' '}
                      <a href="#format-funding">funding format</a> defined
                      above.
                    </p>
                    <p className="example">
                      <span className="cross-reference">
                        <span className="person">
                          Prof. James P Sullivan, MD
                        </span>
                      </span>
                      <code className="token">;</code>{' '}
                      <span className="cross-reference">
                        <span className="person">Douglas Carl Engelbart</span>
                      </span>{' '}
                      <span className="predicate">
                        were supported by<code className="token">:</code>
                      </span>{' '}
                      <span className="organization">
                        RAPIDD program<code className="token"> &lt; </code>
                        Science and Technology Directorate
                        <code className="token"> &lt; </code>Department of
                        Homeland Security<code className="token">;</code>{' '}
                        Fogarty International Center
                        <code className="token"> &lt; </code>National Institute
                        of Health <code className="token">(</code>NIH
                        <code className="token">)</code>
                      </span>
                      <code className="token">.</code>
                    </p>
                  </figcaption>
                  <img
                    src="/images/funding-person-2.png"
                    alt="Fill out the rest of the funding statement example"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Create a hyperlink for each funding source and award /
                      grant / project when possible:
                    </p>
                    <ol>
                      <li>Highlight the text to be hyperlinked.</li>
                      <li>
                        Go to the <span className="ms-label">Insert</span> tab
                        of the ribbon and click on{' '}
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
                    src="/images/funding-person-3.png"
                    alt="Funding source organization names and award are hyperlinked to URLs using the built-in insert hyperlink tool"
                  />
                </figure>
              </li>
            </ol>

            <Schema
              id="data-funding-persons"
              data={{
                '@context': 'https://sci.pe',
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
              }}
            />
          </section>

          <section id="funding-attributed-to-organizations">
            <h5>Funding attributed to organizations</h5>

            <p>
              To create structured funding statements for funding attributed to
              to organizations add list items and for each list item:
            </p>

            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <ol>
                      <li>
                        Ensure that the organizations involved with the work
                        (listed in the{' '}
                        <a href="#affiliation-list">affiliation list</a>) have
                        been <a href="#bookmark-affiliation">bookmarked</a> so
                        that they can be cross-referenced.
                      </li>
                      <li>
                        Go to the <span className="ms-label">Insert</span> tab
                        of the ribbon and click on{' '}
                        <span className="ms-button">Cross-reference</span>.
                      </li>
                      <li>
                        Set <span className="ms-label">Reference type</span> to{' '}
                        <span className="ms-value">bookmark</span> and{' '}
                        <span className="ms-label">Insert reference to</span> to{' '}
                        <span className="ms-value">Bookmark text</span>. Make
                        sure to leave the{' '}
                        <span className="ms-label">Insert as hyperlink</span>{' '}
                        option checked.
                      </li>
                      <li>
                        Under{' '}
                        <span className="ms-label">For which bookmark</span>{' '}
                        select the label of the bookmark corresponding to the
                        organization that needs to be inserted as the subject of
                        the funding statement and click on{' '}
                        <span className="ms-button">Insert</span>.
                      </li>
                      <li>
                        <p>
                          The bookmarked text corresponding to the selected
                          bookmark label is inserted in the document.
                        </p>
                        <p className="example">
                          <span className="cross-reference organization">
                            NYU
                          </span>
                        </p>
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/funding-organization-1.png"
                    alt="Insert a person or organization as a subject of a funding sources with the insert cross-reference tool"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Fill in the rest of the funding statement according to the{' '}
                      <a href="#format-funding">funding format</a> defined
                      above.
                    </p>
                    <p className="example">
                      <span className="cross-reference">
                        <span className="organization">NYU</span>
                      </span>{' '}
                      <span className="predicate">
                        received funding from<code className="token">:</code>
                      </span>{' '}
                      <span className="organization">
                        Bill &amp; Melinda Gates Foundation
                      </span>
                      <code className="token"> / </code>{' '}
                      <span className="award">
                        Collaboration for AIDS Vaccine Discovery Grant{' '}
                        <code className="token">(</code>CAVD
                        <code className="token">)</code>
                        <code className="token">,</code> OPP38631_01
                      </span>
                      <code className="token">.</code>
                    </p>
                  </figcaption>
                  <img
                    src="/images/funding-organization-2.png"
                    alt="Fill in the rest of the funding statement"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Create a hyperlink for each funding source and award /
                      grant / project when possible:
                    </p>
                    <ol>
                      <li>Highlight the text to be hyperlinked.</li>
                      <li>
                        Go to the <span className="ms-label">Insert</span> tab
                        of the ribbon and click on{' '}
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
                    src="/images/funding-organization-3.png"
                    alt="Funding source organization names and award are hyperlinked to URLs using the built-in insert hyperlink tool"
                  />
                </figure>
              </li>
            </ol>

            <Schema
              id="data-funding-organizations"
              data={{
                '@context': 'https://sci.pe',
                '@id': 'http://www.biology.as.nyu.edu',
                '@type': 'CollegeOrUniversity',
                name: 'Department of Biology',
                parentOrganization: {
                  '@id': 'http://www.nyu.edu',
                  '@type': 'CollegeOrUniversity',
                  name: 'New York University',
                  alternateName: 'NYU'
                },
                sponsor: {
                  '@type': 'SponsorRole',
                  sponsor: {
                    '@id': 'http://www.gatesfoundation.org',
                    '@type': 'NGO',
                    name: 'Bill &amp; Melinda Gates Foundation'
                  },
                  roleOffer: {
                    '@type': 'FundingSource',
                    name: 'Collaboration for AIDS Vaccine Discovery Grant',
                    alternateName: 'CAVD',
                    serialNumber: 'OPP38631_01'
                  },
                  startDate: '2009-11-19'
                }
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

Funding.ds3Id = `ds3:${Funding.name}`;

export default Customize(Funding);
