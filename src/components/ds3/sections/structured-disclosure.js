// legacy
import React from 'react';
import Schema from '../schema';
import FormatDisclosure from '../formats/format-disclosure';
import Customize from '../../../hoc/customize';

class Disclosure extends React.Component {
  render() {
    return (
      <section id={Disclosure.ds3Id} className="style-guide__group">
        <h3>Disclosure</h3>

        <section id="disclosure-statements" className="style-guide__subgroup">
          <h4>Disclosure statements</h4>

          <p>
            List all disclosure information (such as conflict of interest or
            competing interest) in a separate ‘Disclosure’ section.
          </p>

          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Create a new section named ‘Disclosure’ (
                  <span className="ms-style">Heading 2</span>).
                </figcaption>
                <img
                  src="/images/disclosure-1.png"
                  alt="Apply heading 2 style to the new section heading 'Disclosure'"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Create a bulleted list that will contain the disclosure
                    statements
                  </p>

                  <p>
                    When possible, structure disclosure statements following the
                    guidelines of the{' '}
                    <a href="#structured-disclosure-statements">
                      Strucutured disclosure statements
                    </a>{' '}
                    section specified below.
                  </p>

                  <p className="warning">
                    If disclosures cannot be structured, include each disclosure
                    (in any format) as a separate list item in a bulleted list.
                  </p>
                </figcaption>
                <img
                  src="/images/disclosure-2.png"
                  alt="create a bulleted list that will receive the disclosure statments"
                />
              </figure>
            </li>
          </ol>
        </section>

        <section
          id="structured-disclosure-statements"
          className="style-guide__subgroup"
        >
          <h4>Structured disclosure statements</h4>

          <p>
            Structured disclosure statements are defined according to the{' '}
            <a href="#format-disclosure">disclosure format</a> specified below.
          </p>

          <FormatDisclosure />

          <p>To create structured disclosure statements:</p>

          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Group disclosure statements into list items using one list
                    item per type of predicate (e.g., ‘received funding’, ‘was
                    employed by’, ‘own patent’, ‘is editor of’).
                  </p>

                  <p>
                    Start each disclosure statement (list item) by inserting
                    bookmarked author and contributor ‘display name’ or
                    organization identifiers (the ‘subjects’) using the built in{' '}
                    <span className="ms-feature">Cross-reference</span> feature
                    of Microsoft Word.
                  </p>
                  <ol>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Cross-reference</span>.
                    </li>
                    <li>
                      Set <span className="ms-label">Reference type</span> to{' '}
                      <span className="ms-value">bookmark</span> and{' '}
                      <span className="ms-label">Insert reference to</span> to{' '}
                      <span className="ms-value">Bookmark text</span>. Make sure
                      to leave the{' '}
                      <span className="ms-label">Insert as hyperlink</span>{' '}
                      option checked.
                    </li>
                    <li>
                      Under <span className="ms-label">For which bookmark</span>{' '}
                      select the relevant bookmark label and click on{' '}
                      <span className="ms-button">Insert</span>.
                    </li>
                    <li>
                      The bookmarked text corresponding to the selected bookmark
                      label is inserted in the document.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/disclosure-3.png"
                  alt="insert a cross reference to the author name in the first bullet point of the disclosure list"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Fill in the rest of the disclosure statement according to
                    the <a href="#format-disclosure">disclosure format</a>{' '}
                    defined above.
                  </p>
                  <p className="example">
                    <span className="cross-reference">
                      <span className="person">Prof. James P Sullivan, MD</span>
                    </span>{' '}
                    <span className="predicate">
                      received personal fees for consulting for
                      <code className="token">:</code>
                    </span>{' '}
                    <span className="organization">
                      Pfizer Inc<code className="token"> - </code>New York
                      <code className="token">,</code> NY
                      <code className="token">,</code> USA
                    </span>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/disclosure-4.png"
                  alt="fill in the rest of the disclosure statement"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Hyperlink the ‘objects’ of the disclosure statement.
                </figcaption>
                <img
                  src="/images/disclosure-5.png"
                  alt="Hyperlink the object of the disclosure statement, Pfizer"
                />
              </figure>
            </li>
          </ol>

          <Schema
            id="data-disclosure"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/article',
              '@type': 'ScholarlyArticle',
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
                  honorificSuffix: 'MD'
                },
                roleAction: [
                  {
                    '@type': 'DisclosureAction',
                    actionStatus: 'CompletedActionStatus',
                    name: 'received personal fees for consulting for',
                    object: {
                      '@type': 'PayAction',
                      actionStatus: 'CompletedActionStatus',
                      agent: {
                        '@type': 'Corporation',
                        name: 'Pfizer',
                        location: {
                          '@type': 'Place',
                          address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'New York',
                            addressRegion: 'NY',
                            addressCountry: 'USA'
                          }
                        }
                      }
                    },
                    result: {
                      '@type': 'MediaObject',
                      contentUrl: 'http://example.com/signed_disclosure_1.pdf'
                    }
                  },
                  {
                    '@type': 'DisclosureAction',
                    actionStatus: 'CompletedActionStatus',
                    name: 'is board member of',
                    object: {
                      '@type': 'OrganizationRole',
                      roleName: 'board member',
                      memberOf: {
                        '@id': 'http://www.merck.com',
                        '@type': 'Corporation',
                        name: 'Merck'
                      },
                      startDate: '2016-01-01'
                    },
                    result: {
                      '@type': 'MediaObject',
                      contentUrl: 'http://example.com/signed_disclosure_3.pdf'
                    }
                  }
                ]
              }
            }}
          />
        </section>
      </section>
    );
  }
}

Disclosure.ds3Id = `ds3:${Disclosure.name}`;

export default Customize(Disclosure);
