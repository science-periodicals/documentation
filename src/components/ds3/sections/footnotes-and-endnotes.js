import React from 'react';

class FootnotesAndEndnotes extends React.Component {
  render() {
    return (
      <section id={FootnotesAndEndnotes.ds3Id} className="style-guide__group">
        <h3>Footnotes and Endnotes</h3>
        <section id="insert-footnotes-and-endnotes">
          <h4>Insert footnotes and endnotes</h4>
          <p>
            Insert footnotes or endnotes using the built-in{' '}
            <span className="ms-feature">Footnote</span> and
            <span className="ms-feature">Endnote</span> features of Microsoft
            Word:
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Place the cursor after the character in the text where the
                  footnote or endnote will be inserted.
                </figcaption>
                <img
                  src="/images/insert-footnote-1.png"
                  alt="The cursor is placed in the text where a footnote is to be added"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Go to the <span className="ms-label">References</span> tab of
                  the ribbon and click on{' '}
                  <span className="ms-button">Insert Footnote</span> or{' '}
                  <span className="ms-button">Insert Endnote</span>.
                </figcaption>
                <img
                  src="/images/insert-footnote-2.png"
                  alt="The built in insert footnote tool is used to insert a footnote"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Type the footnote or endnote text after the automatically
                    inserted footnote or endnote number (or symbol).
                  </p>
                  <p className="warning">
                    Do not type any body text below the footnotes or endnotes.
                    Only footnotes or endnotes text should appear below the
                    footnote or endnote section.
                  </p>
                </figcaption>
                <img
                  src="/images/insert-footnote-3.png"
                  alt="A footnote is  created at the bottom of the page and footnote text is added"
                />
              </figure>
            </li>
          </ol>
        </section>

        <section id="refer-to-the-same-footnote-or-endnote-more-than-once">
          <h4>Refer to the same footnote or endnote more than once</h4>
          <p>
            To refer to an existing footnote or endnote more than once, use the
            built-in <span className="ms-feature">Cross-reference</span> feature
            of Microsoft Word:
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Place the cursor where the reference to an existing
                      footnote or endnote needs to be added.
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab the
                      ribbon and click on{' '}
                      <span className="ms-button">Cross-reference</span>.
                    </li>
                    <li>
                      In the new{' '}
                      <span className="ms-label">Cross-reference</span> dialogue
                      window, set the{' '}
                      <span className="ms-label">Reference type</span> to{' '}
                      <span className="ms-value">Footnote</span> for footnotes
                      and to <span className="ms-value">Endnote</span> for
                      endnotes.
                    </li>
                    <li>
                      Under{' '}
                      <span className="ms-label">Insert reference to</span>,
                      select{' '}
                      <span className="ms-value">
                        Footnote number (formatted)
                      </span>{' '}
                      for footnotes and{' '}
                      <span className="ms-value">
                        Endnote number (formatted)
                      </span>{' '}
                      for endnotes.
                    </li>
                    <li>
                      Under <span className="ms-label">For which footnote</span>{' '}
                      for footnotes and{' '}
                      <span className="ms-label">For which endnote</span> for
                      endnotes, select the footnote or endnote to insert from
                      the list.
                    </li>
                    <li>
                      Make sure to leave the
                      <span className="ms-label">insert as hyperlink</span>{' '}
                      option checked.
                    </li>
                    <li>
                      Click on <span className="ms-button">Insert</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-footnote-4.png"
                  alt="insert footnote as cross-reference"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    A new reference to the same footnote or endnote is
                    automatically inserted.
                  </p>
                  <p className="warning">
                    Footnote references inserted with the{' '}
                    <span className="ms-feature">Cross-reference</span> feature
                    will not be automatically updated when the referenced
                    footnote is modified or deleted. For instance if footnote 1
                    is now the second footnote or if footnote 1 was deleted, the
                    cross-reference will still read{' '}
                    <span className="cross-reference">1</span> (instead of ‘2’
                    or an error message). To{' '}
                    <strong>update all cross-references</strong>, select the
                    text (or press Ctrl + A) and right click anywhere in the
                    document and select{' '}
                    <span className="ms-value">Update Field</span> (or press
                    F9). This will update the number if the footnote still
                    exists in the document or display an error message{' '}
                    <span className="cross-reference">
                      Error! Bookmark not defined
                    </span>{' '}
                    (in these cases, the reference should be deleted and/or
                    replaced).
                  </p>
                </figcaption>
                <img
                  src="/images/insert-footnote-5.png"
                  alt="a new reference to the same footnote is automatically inserted"
                />
              </figure>
            </li>
          </ol>
        </section>
      </section>
    );
  }
}

FootnotesAndEndnotes.ds3Id = `ds3:${FootnotesAndEndnotes.name}`;

export default FootnotesAndEndnotes;
