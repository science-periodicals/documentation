// legacy
import React from 'react';
import Schema from '../schema';
import FormatAcknowledgements from '../formats/format-acknowledgements';
import Customize from '../../../hoc/customize';

class Acknowledgements extends React.Component {
  render() {
    return (
      <section id={Acknowledgements.ds3Id} className="style-guide__group">
        <h3>Acknowledgements</h3>

        <section
          id="acknowledgement-statements"
          className="style-guide__subgroup"
        >
          <h4>Acknowledgement statements</h4>

          <p>
            List all acknowledgements (e.g., thanking reviewers) in a separate
            ‘Acknowledgements’ section.
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Create a new section named ‘Acknowledgements’ (
                  <span className="ms-style">Heading 2</span>).
                </figcaption>
                <img
                  src="/images/acknowledgements-1.png"
                  alt="Apply heading 2 style to the new section heading 'Acknowledgements'"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Create a bulleted list that will contain the acknowledgement
                    statements.
                  </p>

                  <p>
                    When possible, structure acknowledgment statements following
                    the guidelines of the{' '}
                    <a href="#structured-funding-statements">
                      Structured funding statements
                    </a>{' '}
                    section specified below.
                  </p>

                  <p className="warning">
                    If it is not possible to follow the{' '}
                    <a href="#format-acknowledgements">
                      acknowledgements format
                    </a>
                    , include unstructured acknowledgements (in any format) as
                    one or several list items in the bulleted list.
                  </p>
                </figcaption>
                <img
                  src="/images/acknowledgements-2.png"
                  alt="create a bulleted list that will receive the acknowledgements statments"
                />
              </figure>
            </li>
          </ol>
        </section>

        <section
          id="structured-acknowledgement-statements"
          className="style-guide__subgroup"
        >
          <h4>Structured acknowledgement statements</h4>
          <p>
            Structured acknowledgement statements are defined according to the{' '}
            <a href="#format-acknowledgements">acknowledgements format</a>{' '}
            specified below.
          </p>

          <FormatAcknowledgements />

          <p>To create structured acknowledgement statements:</p>

          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Include acknowledgement statement as list items using one
                    list item per type of predicate (e.g., ‘acknowledge’ or
                    ‘acknowledge the editorial review work of’).
                  </p>

                  <p>
                    Enter the subject(s) of the acknowledgement statement, by
                    inserting the bookmarked author and contributor ‘display
                    name’ or organization identifiers using the built-in{' '}
                    <span className="ms-feature">Cross-refrence</span> feature
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
                  <p>
                    Note that the words <code>‘The authors’</code>,{' '}
                    <code>‘The contributors’</code>,{' '}
                    <code>‘The authors and contributors’</code> (or their
                    singular versions) can be used as valid subjects instead of
                    the full list of the work’s authors and contributors.
                  </p>
                </figcaption>
                <img
                  src="/images/acknowledgements-3.png"
                  alt="insert a cross reference to the author name as the subject of an acknowledgements statement"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Fill in the rest of the acknowledgements statement according
                    to the{' '}
                    <a href="#format-acknowledgements">
                      acknowledgements format
                    </a>{' '}
                    described above.
                  </p>
                  <p className="example">
                    <span className="cross-reference">
                      <span className="person">Douglas Carl Engelbart</span>
                    </span>{' '}
                    <span className="predicate">
                      is thankful for the pioneering contribution of
                      <code className="token">:</code>
                    </span>{' '}
                    <span className="person">
                      Bush<code className="token">,</code> Vannevar{' '}
                      <code className="token">“</code>Vannevar Bush
                      <code className="token">”</code>
                    </span>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/acknowledgements-4.png"
                  alt="acknowledgements statement is inserted"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Hyperlink the objects of the acknowledgement statements.
                </figcaption>
                <img src="/images/acknowledgements-5.png" alt="hyperlink" />
              </figure>
            </li>
          </ol>
          <Schema
            id="data-acknowledgments"
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
                    '@type': 'AcknowledgeAction',
                    actionStatus: 'CompletedActionStatus',
                    name: 'is thankful for the pioneering contribution of',
                    recipient: {
                      '@type': 'Person',
                      name: 'Vannevar Bush',
                      givenName: 'Vannevar',
                      familyName: 'Bush'
                    }
                  },
                  {
                    '@type': 'AcknowledgeAction',
                    actionStatus: 'CompletedActionStatus',
                    name: 'acknowledges',
                    recipient: {
                      '@type': 'ContributorRole',
                      recipient: {
                        '@type': 'Person',
                        name:
                          'Sir Timothy John Berners-Lee OM KBE FRS FREng FRSA FBCS',
                        givenName: 'Timothy',
                        additionalName: 'John',
                        familyName: 'Berners-Lee',
                        honorificPrefix: 'Sir',
                        honorificSuffix: [
                          'OM',
                          'KBE',
                          'FRS',
                          'FREng',
                          'FRSA',
                          'FBCS'
                        ]
                      },
                      roleAffiliation: {
                        '@id': 'http://www.w3.org/',
                        '@type': 'Organization',
                        name: 'World Wide Web Consortium',
                        alternateName: 'W3C'
                      }
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

Acknowledgements.ds3Id = `ds3:${Acknowledgements.name}`;

export default Customize(Acknowledgements);
