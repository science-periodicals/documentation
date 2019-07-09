import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class TextBoxes extends React.Component {
  render() {
    return (
      <section id={TextBoxes.ds3Id} className="style-guide__group">
        <h3>Text boxes</h3>
        <p>
          Text boxes are often used to provide background information or a high
          level summary for readers. Add text boxes using the built-in{' '}
          <span className="ms-feature">Text Box</span> feature of Microsoft
          Word.
        </p>
        <section id="insert-text-boxes">
          <h4>Insert text boxes</h4>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon, click on{' '}
                      <span className="ms-button">Text Box</span> and select{' '}
                      <span className="ms-value">Draw Text Box</span> from the
                      drop-down menu.
                    </li>
                    <li>
                      Click and drag the cursor to draw a text box in the
                      document. Surrounding content will automatically reflow
                      around the text box. The height and width of the text box
                      can be adjusted at any time.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-text-box-1.png"
                  alt="A text box is inserted using the built-in Insert Text Box tool"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  Type any text into the text box, and add headings as required
                  (see:{' '}
                  <a href="#ds3:sections-and-headings">Sections and Headings</a>
                  ).
                </figcaption>
                <img
                  src="/images/insert-text-box-2.png"
                  alt="Text is added to the text box"
                />
              </figure>
            </li>
          </ol>
          <p className="warning">
            Text boxes must only contain textual elements (e.g., section
            headings, paragraphs or quotes). Include any resources, such as{' '}
            <a href="#ds3:Figures">figures</a>,{' '}
            <a href="#ds3:Equations">equations</a>,{' '}
            <a href="#ds3:Tables">tables</a>, or <a href="#ds3:Code">code</a> in
            the main body of the document or as{' '}
            <a href="#ds3:SupportingInformation">supporting information</a> and
            add a <a href="#ds3:Hyperlinks">hyperlink</a> or{' '}
            <a href="#ds3:CrossReferences">cross-reference</a> to the relevant
            resource in the text box, if required.
          </p>
        </section>
        <section id="text-box-captions">
          <h4>Text box captions</h4>
          <p>Add a caption with a custom label to text boxes.</p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Select the whole text box, go to the{' '}
                      <span className="ms-label">References</span> tab of the
                      ribbon and click on{' '}
                      <span className="ms-button">Insert Caption</span>. A{' '}
                      <span className="ms-label">Caption</span> dialogue window
                      will appear.
                    </li>
                    <li>
                      Create a custom caption label (e.g., ‘Text Box’) for text
                      boxes. Click on the{' '}
                      <span className="ms-button">New Label...</span> button,
                      enter the custom label text (e.g., ‘Text Box’) in the new
                      dialogue window and click on{' '}
                      <span className="ms-button">OK</span> to return to the
                      caption dialogue window. The newly created label will now
                      be available from the{' '}
                      <span className="ms-label">Label</span> select box in the{' '}
                      <span className="ms-label">Caption</span> dialogue window.
                    </li>
                    <li>
                      <p>
                        Add the caption content (if any) in the{' '}
                        <span className="ms-label">Caption</span> field after
                        the pre-populated label and number (e.g., ‘Text Box 1’).
                        Note that the number is automatically generated and
                        corresponds to the order of appearance of the table in
                        the document.
                      </p>
                      <p className="warning">
                        The <span className="ms-label">Caption</span> field may
                        truncate the content of a long caption. In this case,
                        click on <span className="ms-button">OK</span> to insert
                        the caption (truncated) and add the remaining text
                        directly from the document (see{' '}
                        <a href="#long-text-box-caption">next step</a>
                        ).
                      </p>
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-text-box-3.png"
                  alt="The contents of the text box are selected and the New Label button in the built-in Insert caption tool is selected"
                />
              </figure>
            </li>
            <li className="style-guide__step" id="long-text-box-caption">
              <figure>
                <figcaption>
                  <p>The Text Box now has a caption.</p>
                  <p>
                    To add (or edit) caption content directly from the document:
                  </p>
                  <ol>
                    <li>
                      Place the cursor at the end of the inserted caption and
                      add the required additional caption text.
                    </li>
                    <li>
                      <p className="warning">
                        If the caption text is no longer in the{' '}
                        <span className="ms-style">Caption</span> style (for
                        instance if the content was copied and pasted from other
                        content, or a new line was inserted), select the entire
                        caption, and apply the{' '}
                        <span className="ms-style">Caption</span> style (see{' '}
                        <a href="#ds3:SectionsAndHeadings">
                          Sections and Headings
                        </a>{' '}
                        for more information on how to apply styles).
                      </p>
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-text-box-4.png"
                  alt="A new label called 'Text Box' is typed into the New Label dialogue window"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add metadata about the text box (authors, contributors,
                    license, sources, etc.) at the end of the caption following
                    the instructions defined in the{' '}
                    <a href="#ds3:ResourceMetadata">resource metadata</a>{' '}
                    section.
                  </p>
                  <p className="eg">
                    From
                    <code className="token">:</code>{' '}
                    <span className="citation">Barnet (2013, 65)</span> &copy;
                    2013 <span className="organization">Anthem Press</span>
                    <code className="token">, </code> with permission
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/insert-text-box-5.png"
                  alt="add credit line to text box caption"
                />
              </figure>
            </li>
          </ol>
        </section>
        <Schema
          id="data-text-boxes"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/text-box',
            '@type': 'WPSideBar',
            alternateName: 'text box 1',
            description: 'Ted Nelson',
            encoding: {
              '@id': 'http://example.com/text-box',
              '@type': 'MediaObject',
              fileFormat: 'text/html',
              contentUrl: 'http://example.com/text-box1'
            }
          }}
        />
      </section>
    );
  }
}

TextBoxes.ds3Id = `ds3:${TextBoxes.name}`;

export default Customize(TextBoxes);
