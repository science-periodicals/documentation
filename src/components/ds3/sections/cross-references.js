import React from 'react';
import Customize from '../../../hoc/customize';

class CrossReferences extends React.Component {
  render() {
    return (
      <section id={CrossReferences.ds3Id} className="style-guide__group">
        <h3>Cross-references</h3>
        <p>
          The built-in <span className="ms-feature">Cross-reference</span>{' '}
          feature of Microsoft Word allows to automatically insert references to
          specific parts of the document (such as captioned figures, tables,
          equations, code, text boxes, footnotes, headings, and bookmarks).
          References inserted this way (
          <span className="eg">
            <span className="cross-reference">Figure 1</span>) will be linked to
            the content they refer to, enhancing navigation within the document.
          </span>
        </p>
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                Place the cursor where a cross-reference should be inserted in
                the text.
              </figcaption>
              <img
                src="/images/insert-cross-reference-1.png"
                alt="The cursor is placed where a reference to a figure needs to be added"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <ol>
                  <li>
                    Go to the <span className="ms-label">Insert</span>
                    tab of the ribbon and click on{' '}
                    <span className="ms-button">Cross-reference</span>.
                  </li>
                  <li>
                    Select the <span className="ms-label">Reference type</span>{' '}
                    (such as <span className="ms-value">Bookmark</span>,{' '}
                    <span className="ms-value">Heading</span>,{' '}
                    <span className="ms-value">Figure</span>,{' '}
                    <span className="ms-value">Table</span>,{' '}
                    <span className="ms-value">Footnote</span>,{' '}
                    <span className="ms-value">Endnote</span>, etc.)
                  </li>
                  <li>
                    <p>
                      Select the type of content to be inserted by setting the
                      value of{' '}
                      <span className="ms-label">Insert reference to</span>.
                    </p>
                    <p className="warning">
                      Avoid the value{' '}
                      <span className="ms-value">Page number</span> as the
                      published version of the document may not be paginated.
                    </p>
                  </li>
                  <li>
                    Make sure to leave the{' '}
                    <span className="ms-label">Insert as hyperlink</span> option
                    checked so that the cross-reference is linked to the
                    referenced element (enhancing navigation within the
                    document).
                  </li>
                  <li>
                    Click on <span className="ms-button">Insert</span>.
                  </li>
                </ol>
              </figcaption>
              <img
                src="/images/insert-cross-reference-2.png"
                alt="The built-in cross reference tool is used to insert the label and number of a figure 'Figure 1'"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  The cross-reference is automatically inserted in the document.
                </p>
                <p className="example">
                  <span className="cross-reference">Figure 1</span>
                </p>
                <p className="warning">
                  References inserted with the{' '}
                  <span className="ms-feature">Cross-reference</span> feature
                  will not be automatically updated when the referenced bookmark
                  is modified or deleted. For instance if a captioned figure
                  previously labeled ‘Figure 1’ is moved to a new location so
                  that its caption label is now ‘Figure 2’, the cross-reference
                  will still read{' '}
                  <span className="cross-reference">Figure 1</span>. Or, if
                  footnote ‘1’ was deleted, the cross-reference will still read{' '}
                  <span className="cross-reference">1</span>. To{' '}
                  <strong>update cross-references</strong>, select all text (or
                  press Ctrl + A) and right click anywhere in the document and
                  select <span className="ms-value">Update Field</span> (or
                  press F9). This will update the text if the bookmark still
                  exists in the document or display an error message{' '}
                  <span className="cross-reference">
                    Error! Bookmark not defined
                  </span>{' '}
                  if the bookmark is undefined (in these cases, the reference
                  should be deleted and/or replaced).
                </p>
              </figcaption>
              <img
                src="/images/insert-cross-reference-3.png"
                alt="The cross-reference to Figure 1 appears where the cursor was placed"
              />
            </figure>
          </li>
        </ol>
      </section>
    );
  }
}

CrossReferences.ds3Id = `ds3:${CrossReferences.name}`;

export default Customize(CrossReferences);
