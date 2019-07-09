import React from 'react';
import Schema from '../schema';
import FormatCopyrightNotice from '../formats/format-copyright-notice';
import Customize from '../../../hoc/customize';

class Copyright extends React.Component {
  render() {
    return (
      <section id={Copyright.ds3Id} className="style-guide__group">
        <h3>Copyright</h3>
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                Create a new section with a heading (
                <span className="ms-style">Heading 2</span> style) named:
                ‘Copyright’.
              </figcaption>
              <img
                src="/images/copyright-1.png"
                alt="Heading style 2 is applied to the copyright section heading"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  Add a copyright notice formatted according to the{' '}
                  <a href="#ds3:FormatCopyrightNotice">
                    copyright notice format
                  </a>{' '}
                  (defined below):
                </p>
                <ol>
                  <li>
                    Start the copyright statement with the symbol &copy;, the
                    word ‘Copyright’; or the abbreviation ‘Copr.’.
                  </li>
                  <li>Add the copyright year.</li>
                </ol>
              </figcaption>
              <img src="/images/copyright-2.png" alt="insert copyright" />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  Insert the name of the copyright holders using the built-in{' '}
                  <span className="ms-feature">Cross-reference</span> feature of
                  Microsoft Word (cross-referencing authors, contributors and
                  organizations previously bookmarked in the{' '}
                  <a href="#ds3:AuthorsContributorsAndAffiliations">
                    Authors , contributors, and affiliations
                  </a>{' '}
                  section ) or using the <a href="#ds3:FormatPerson">person</a>{' '}
                  or <a href="#ds3:FormatOrganization">organization</a> format
                  when no bookmark is available.
                </p>
                <p>To insert a cross-reference:</p>
                <ol>
                  <li>
                    Place the cursor in the document where the copyright holder
                    needs to be added.
                  </li>
                  <li>
                    Go to the <span className="ms-label">Insert</span> tab of
                    the ribbon and click on{' '}
                    <span className="ms-button">Cross-reference</span>.
                  </li>
                  <li>
                    <p>
                      In the <span className="ms-label">Cross-reference</span>{' '}
                      dialogue window:
                    </p>
                    <ol>
                      <li>
                        Set the <span className="ms-label">Reference type</span>{' '}
                        to <span className="ms-value">Bookmark</span>.
                      </li>
                      <li>
                        Set{' '}
                        <span className="ms-label">Insert reference to</span> to{' '}
                        <span className="ms-value">Bookmark text</span>.
                      </li>
                      <li>
                        Under{' '}
                        <span className="ms-label">For which bookmark</span>,
                        select the bookmark to insert from the list of bookmark
                        names.
                      </li>
                      <li>
                        Make sure to leave the{' '}
                        <span className="ms-label">Insert as hyperlink</span>{' '}
                        option checked.
                      </li>
                      <li>
                        Click on <span className="ms-button">Insert</span>.
                      </li>
                    </ol>
                  </li>
                </ol>
                <p className="example">
                  <code>&copy; 2015 </code>
                  <span className="cross-reference">
                    <span className="organization">SRI</span>
                  </span>
                </p>
              </figcaption>
              <img
                src="/images/copyright-3.png"
                alt="cross reference copyright holder"
              />
            </figure>
          </li>
        </ol>

        <section id="copyright-notice-format">
          <h4>Copyright notice format</h4>
          <p>
            The format for copyright notice information is defined using the
            formatting specifications below.
          </p>
          <FormatCopyrightNotice />
        </section>

        <Schema
          id="data-copyright"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/article',
            '@type': 'ScholarlyArticle',
            copyrightYear: '2015',
            copyrightHolder: {
              '@id': 'https://www.sri.com',
              '@type': 'Corporation',
              name: 'SRI International',
              alternateName: 'SRI'
            }
          }}
        />
      </section>
    );
  }
}

Copyright.ds3Id = `ds3:${Copyright.name}`;

export default Customize(Copyright);
