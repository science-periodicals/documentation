import React from 'react';
import Customize from '../../../hoc/customize';

class Abbreviations extends React.Component {
  render() {
    return (
      <section id={Abbreviations.ds3Id} className="style-guide__group">
        <h3>Abbreviations</h3>

        <section id="add-abbreviations">
          <h4>Add abbreviations</h4>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Create a new section with a heading (
                  <span className="ms-style">Heading 2</span> style) named:
                  ‘Abbreviations’.
                </figcaption>
                <img
                  src="/images/abbrev-1.png"
                  alt="Heading style 2 is applied to the Abbreviations section heading"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Create an unordered (bulleted) list of abbreviations under
                    the new section heading, separating the abbreviation from
                    its definition using a colon (
                    <code className="token">:</code>).
                  </p>
                  <p>
                    e.g., LCARS<code className="token">:</code> Library Computer
                    Access/Retrieval System
                  </p>
                  <p className="warning">
                    Be sure to only include one abbreviation per bullet point.
                  </p>
                </figcaption>
                <img
                  src="/images/abbrev-2.png"
                  alt="A bulleted list of abbreviations is added after the section heading"
                />
              </figure>
            </li>
          </ol>
        </section>

        <section id="bookmark-and-crossreference-abbreviations">
          <h4>Bookmark and crossreference abbreviations</h4>
          <p>
            Optionally, abbreviations can be bookmarked and crossreferenced.
            This saves having to retype repeated abbreviations and helps to
            ensure that all occurances are uniform in the text.
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>Create a bookmark for an abbreviation:</p>
                  <ol>
                    <li>Select the abbreviation text (e.g., ‘LCARS’).</li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Bookmark</span>.
                    </li>
                    <li>
                      Set the <span className="ms-label">Bookmark name</span>{' '}
                      (e.g., ‘LCARS’). Note: bookmark names must begin with a
                      letter, can contain numbers and cannot include spaces, but
                      can use underscores to separate words). Repeat for all
                      bullet points under ‘Abbreviations’.
                    </li>
                    <li>
                      Click on <span className="ms-button">Add</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/abbrev-3.png"
                  alt="A bookmark is inserted with the text of each abbreviation, e.g., 'LCARS'"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    <span className="ms-feature">Cross-reference</span> an
                    abbreviation in the document:
                  </p>
                  <ol>
                    <li>
                      Place the cursor in the document where an abbreviation
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
                          Set the{' '}
                          <span className="ms-label">Reference type</span> to{' '}
                          <span className="ms-value">Bookmark</span>.
                        </li>
                        <li>
                          Set{' '}
                          <span className="ms-label">Insert reference to</span>{' '}
                          to <span className="ms-value">Bookmark text</span>.
                        </li>
                        <li>
                          Under{' '}
                          <span className="ms-label">For which bookmark</span>,
                          select the bookmark to insert from the list of
                          bookmark names.
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
                </figcaption>
                <img
                  src="/images/abbrev-4.png"
                  alt="Place the cursor in the document and locate the bookmark in the insert cross-reference menu"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  The bookmark text is now inserted in the document (and linked
                  to the abbreviation definition).
                </figcaption>
                <img
                  src="/images/abbrev-5.png"
                  alt="The bookmark text 'LCARS' is inserted in the document."
                />
              </figure>
            </li>
          </ol>
        </section>
      </section>
    );
  }
}

Abbreviations.ds3Id = `ds3:${Abbreviations.name}`;

export default Customize(Abbreviations);
