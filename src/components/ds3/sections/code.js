import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class Code extends React.Component {
  render() {
    return (
      <section id={Code.ds3Id} className="style-guide__group">
        <h3>Code</h3>

        <section id="inline-code" className="style-guide__subgroup">
          <h4>Inline code</h4>
          <p>
            Create a custom style named <code>Inline Code</code> to identify
            inline code in the document:
          </p>
          <figure>
            <figcaption>
              <ol>
                <li>
                  On the <span className="ms-label">Home</span> tab of the
                  ribbon, click on the{' '}
                  <span className="ms-button">Styes Pane</span> control to
                  reveal the <span className="ms-label">Styles</span> side bar.
                </li>
                <li>
                  In the <span className="ms-label">Styles</span> side bar,
                  click on <span className="ms-button">New Style...</span>
                </li>
              </ol>
              <p>
                In the <span className="ms-label">New Style</span>
                dialogue window:
              </p>
              <ul>
                <li>
                  Name the style <span className="ms-style">Inline Code</span>{' '}
                  and set the <span className="ms-label">Style type</span> to{' '}
                  <span className="ms-value">Character</span> (inline).
                </li>
                <li>
                  <p>Optionally, customize the font and background color:</p>
                  <ul>
                    <li>
                      For font type, select a monospaced font (e.g., ‘Monaco’)
                      in the <span className="ms-label">Formatting</span>{' '}
                      section.
                    </li>
                    <li>
                      To set a background color, in the{' '}
                      <span className="ms-label">Format</span>
                      drop-down menu select{' '}
                      <span className="ms-value">Border</span>. In the new{' '}
                      <span className="ms-label">Borders and shading</span>{' '}
                      dialogue window, click on the{' '}
                      <span className="ms-label">Shading</span> tab and select a
                      background color from the{' '}
                      <span className="ms-value">Fill</span> drop-down menu.
                      Click on <span className="ms-button">OK</span>.
                    </li>
                  </ul>
                </li>
                <li>
                  Confirm the new style creation by clicking on{' '}
                  <span className="ms-button">OK</span> in the{' '}
                  <span className="ms-label">New Style</span> dialoge window.
                </li>
              </ul>
            </figcaption>
            <img
              src="/images/code-inline-1.png"
              alt="Inline code is selected"
            />
          </figure>
          <p>
            Apply the newly created{' '}
            <span className="ms-style">Inline Code</span> style to inline code
            in the document.
          </p>
          <figure>
            <figcaption>
              <ol>
                <li>Select the inline code.</li>
                <li>
                  Apply the <span className="ms-style">Inline Code</span> style
                  either from the <span className="ms-label">Home</span> tab of
                  the ribbon or from the{' '}
                  <span className="ms-label">Styles</span> pane.
                </li>
              </ol>
            </figcaption>
            <img
              src="/images/code-inline-2.png"
              alt="The Inline Code style is then available in the home banner styles pane and can be applied to other inline code"
            />
          </figure>
        </section>

        <section id="short-code-blocks" className="style-guide__subgroup">
          <h4>Short code blocks</h4>

          <section
            id="insert-short-code-blocks"
            className="style-guide__subgroup"
          >
            <h5>Insert short code blocks</h5>

            <p>
              Create a custom <span className="ms-style">Block Code</span> style
              that can be re-used to identify all the short code snippets (~ 50
              line of code) of the document. For longer code blocks, refer to
              the{' '}
              <a href="#ds3:SupportingInformation">Supporting Information</a>{' '}
              section.
            </p>
            <figure>
              <figcaption>
                <ol>
                  <li>
                    On the <span className="ms-label">Home</span> tab of the
                    ribbon, click on the{' '}
                    <span className="ms-button">Styes Pane</span> control to
                    reveal the <span className="ms-label">Styles</span> side
                    bar.
                  </li>
                  <li>
                    In the <span className="ms-label">Styles</span> side bar,
                    click on <span className="ms-button">New Style...</span>
                  </li>
                </ol>
                <p>
                  In the <span className="ms-label">New Style</span> dialogue
                  window:
                </p>
                <ul>
                  <li>
                    Name the style <span className="ms-style">Block Code</span>{' '}
                    and set the <span className="ms-label">Style type</span> to{' '}
                    <span className="ms-value">Paragraph</span> (block).
                  </li>
                  <li>
                    <p>Optionally, customize the font and background color:</p>
                    <ul>
                      <li>
                        For font type, select a monospaced font (e.g., ‘Monaco’
                        in the <span className="ms-label">Formatting</span>{' '}
                        section.
                      </li>
                      <li>
                        To set a background color, in the{' '}
                        <span className="ms-label">Format</span> drop-down menu
                        select <span className="ms-value">Border</span>. In the
                        new{' '}
                        <span className="ms-label">Borders and shading</span>{' '}
                        dialogue window, click on the{' '}
                        <span className="ms-label">Shading</span> tab and select
                        a background color from the{' '}
                        <span className="ms-value">Fill</span> drop-down menu.
                        Click on <span className="ms-button">OK</span>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Confirm the new style creation by clicking on{' '}
                    <span className="ms-button">OK</span> in the{' '}
                    <span className="ms-label">New Style</span>
                    dialogue window.
                  </li>
                </ul>
              </figcaption>
              <img
                src="/images/code-block-1.png"
                alt="A new Block Code style is created from the Styles pane and applied to the code block"
              />
            </figure>
            <p>
              Apply the newly created{' '}
              <span className="ms-style">Block Code</span> style to short code
              blocks in the document.
            </p>
            <figure>
              <figcaption>
                <ol>
                  <li>Select the short code block.</li>
                  <li>
                    Apply the <span className="ms-style">Block Code</span> style
                    either from the <span className="ms-label">Home</span> tab
                    of the ribbon or from the{' '}
                    <span className="ms-label">Styles</span> pane.
                  </li>
                </ol>
              </figcaption>
              <img
                src="/images/code-block-2.png"
                alt="The Block Code style is then available in the home banner styles pane and can be applied to other code blocks"
              />
            </figure>
          </section>

          <section
            id="short-code-block-captions"
            className="style-guide__subgroup"
          >
            <h5>Short code block captions</h5>
            <p>Add a caption with a custom label to the short code blocks.</p>
            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <ol>
                      <li>
                        Select the code block and go to the{' '}
                        <span className="ms-label">References</span> tab of the
                        ribbon and click on{' '}
                        <span className="ms-button">Insert Caption</span>. A new{' '}
                        <span className="ms-label">Caption</span> dialogue
                        window will appear.
                      </li>
                      <li>
                        First, create a custom caption label (e.g., ‘Code’) for
                        code blocks. Click on the{' '}
                        <span className="ms-button">New Label</span> button,
                        enter the custom label text (e.g., ‘Code’) in the new
                        dialogue window and click on{' '}
                        <span className="ms-button">OK</span> to return to the
                        caption dialogue window. The newly created label will
                        now be available from the{' '}
                        <span className="ms-label">Label</span> select box in
                        the <span className="ms-label">Caption</span> dialogue
                        window.
                      </li>
                      <li>
                        <p>
                          Add the caption content (if any) in the{' '}
                          <span className="ms-label">Caption</span> field after
                          the pre-populated label and number (e.g., ‘Code 1’).
                          Note that the number is automatically generated and
                          corresponds to the order of appearance of the table in
                          the document.
                        </p>
                        <p className="warning">
                          The <span className="ms-label">Caption</span> field
                          may truncate the content of a long caption. In this
                          case, click on <span className="ms-button">OK</span>{' '}
                          to insert the caption (truncated) and add the
                          remaining text directly from the document (see{' '}
                          <a href="#long-code-caption">next step</a>
                          ).
                        </p>
                      </li>
                      <li>
                        Click on <span className="ms-button">OK</span>.
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/code-block-3.png"
                    alt="Create a new label for code blocks"
                  />
                </figure>
              </li>
              <li className="style-guide__step" id="long-code-caption">
                <figure>
                  <figcaption>
                    <p>The code block now has a caption.</p>
                    <p>
                      To add (or edit) caption content directly from the
                      document:
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
                          instance if the content was copied and pasted from
                          other content, or a new line was inserted), select the
                          entire caption, and apply the{' '}
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
                    src="/images/code-block-4.png"
                    alt="Type 'Code' as the new label"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Add metadata about the short code block (authors,
                      contributors, license, sources, etc.) at the end of the
                      caption following the instructions defined in the{' '}
                      <a href="#ds3:ResourceMetadata">resource metadata</a>{' '}
                      section.
                    </p>
                    <p className="example">
                      Author
                      <code className="token">:</code>{' '}
                      <span className="cross-reference">
                        <span className="person">Brendan Eich</span>
                      </span>
                      <code className="token">.</code> License
                      <code className="token">:</code>{' '}
                      <a href="http://opensource.org/licenses/MIT">MIT</a>
                      <code className="token">.</code>
                    </p>
                  </figcaption>
                  <img
                    src="/images/code-block-5.png"
                    alt="The new label and number, 'Code 1', automatically appear in the caption box"
                  />
                </figure>
              </li>
            </ol>
          </section>
          <Schema
            id="data-code-blocks"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/code',
              '@type': 'SoftwareSourceCode',
              alternateName: 'code 1',
              description: 'Y combinator implemented in JavaScript',
              programmingLanguage: {
                name: 'javascript'
              },
              encoding: {
                '@id': 'http://example.com/encoding-code',
                '@type': 'MediaObject',
                fileFormat: 'application/javascript',
                contentUrl: 'http://example.com/code1'
              }
            }}
          />
        </section>
      </section>
    );
  }
}

Code.ds3Id = `ds3:${Code.name}`;

export default Customize(Code);
