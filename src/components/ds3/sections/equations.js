import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class Equations extends React.Component {
  render() {
    return (
      <section id={Equations.ds3Id} className="style-guide__group">
        <h3>Equations</h3>
        <p>
          Use the built-in <span className="ms-feature">equation editor</span>{' '}
          of Microsoft Word to insert block and inline equations.
        </p>

        <section id="inline-equation" className="style-guide__subgroup">
          <h4>Inline equation</h4>
          <p>
            To insert inline equations (equations that flow with the text and do
            not require a caption):
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Place the cursor where the equation needs to be inserted.
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Equation</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-inline-equation-1.png"
                  alt="Insert inline equation using the built in insert equation tool"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Type the equation using the mathematical symbols and
                    expressions available in the{' '}
                    <span className="ms-label">Equation</span> tab of the
                    ribbon.
                  </p>
                  <p className="warning">
                    Avoid placing an inline equation on a newline, separated
                    from the containing sentence (e.g., for stylistic purposes).
                    Inline equations will automatically wrap across lines.
                  </p>
                </figcaption>
                <img
                  src="/images/insert-inline-equation-2.png"
                  alt="edit the equation"
                />
              </figure>
            </li>
          </ol>
          <p className="warning">
            If an equation needs to be converted from block to inline, click on
            the equation requiring conversion and select ‘Change to inline‘ from
            the dropdown menu on the right.
          </p>
        </section>

        <section id="block-equations" className="style-guide__subgroup">
          <h4>Block equations</h4>

          <section id="insert-block-equations">
            <h5>Insert block equations</h5>

            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <ol>
                      <li>
                        Create a new blank line where the equation needs to be
                        inserted.
                      </li>
                      <li>
                        As for inline equations, go to the{' '}
                        <span className="ms-label">Insert</span> tab of the
                        ribbon and click on{' '}
                        <span className="ms-button">Equation</span>.
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/insert-equation-with-caption-1.png"
                    alt="Insert block equation on new line with insert equation tool"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    Type the equation using the mathematical symbols and
                    expressions available in the{' '}
                    <span className="ms-label">Equation</span> tab of the
                    ribbon.
                  </figcaption>
                  <img
                    src="/images/insert-equation-with-caption-2.png"
                    alt="Type the equation"
                  />
                </figure>
              </li>
            </ol>
          </section>

          <section id="block-equation-captions">
            <h5>Block equation captions</h5>

            <ol className="style-guide__steps">
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Add a <strong>caption</strong> to the equation:
                    </p>
                    <ol>
                      <li>Select the equation.</li>
                      <li>
                        Go to the <span className="ms-label">References</span>{' '}
                        tab of the ribbon and click on{' '}
                        <span className="ms-button">Insert Caption</span>.
                      </li>
                      <li>
                        A dialogue window allowing to customize the caption
                        label and content will appear.
                      </li>
                      <li>
                        <p>
                          When possible, set the caption label (
                          <span className="ms-label">Label</span>) to{' '}
                          <span className="ms-value">Equation</span>.
                        </p>
                        <p>
                          If a custom label is required (such as ‘Lemma’,
                          ‘Proof’, or ‘Theorem’), click on the{' '}
                          <span className="ms-button">New Label...</span>{' '}
                          button, enter the custom label text in the new
                          dialogue window and click on{' '}
                          <span className="ms-button">OK</span> to return to the{' '}
                          <span className="ms-label">Caption</span> dialogue
                          window. The newly created label will now be available
                          from the <span className="ms-label">Label</span>{' '}
                          select box in the{' '}
                          <span className="ms-label">Caption</span> dialogue
                          window.
                        </p>
                      </li>
                      <li>
                        <p>
                          Add the caption content (if any) in the{' '}
                          <span className="ms-label">Caption</span> field after
                          the pre-populated label and number (e.g., ‘Equation
                          1’). Note that the number is automatically generated
                          and corresponds to the order of appearance of the
                          table in the document.
                        </p>
                        <p className="warning">
                          The <span className="ms-label">Caption</span> field
                          may truncate the content of a long caption. In this
                          case, click on <span className="ms-button">OK</span>{' '}
                          to insert the caption (truncated) and add the
                          remaining text directly from the document (see{' '}
                          <a href="#long-equation-caption">next step</a>
                          ).
                        </p>
                      </li>
                      <li>
                        Click on <span className="ms-button">OK</span>.
                      </li>
                    </ol>
                  </figcaption>
                  <img
                    src="/images/insert-equation-with-caption-3.png"
                    alt="Add a caption using the built-in insert caption tool"
                  />
                </figure>
              </li>
              <li className="style-guide__step">
                <figure>
                  <figcaption>
                    <p>
                      Add metadata about the equation (author, contributor,
                      license, sources, etc.) at the end of the caption
                      following the instructions defined in the{' '}
                      <a href="#ds3:ResourceMetadata">resource metadata</a>{' '}
                      section.
                    </p>
                    <p className="eg">
                      Author
                      <code className="token">:</code>{' '}
                      <span className="cross-reference">
                        <span className="person">Sir Francis Galton</span>
                      </span>
                      <code className="token">.</code> License
                      <code className="token">:</code>{' '}
                      <a href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">
                        CC0-1.0
                      </a>
                      <code className="token">.</code>
                    </p>
                  </figcaption>
                  <img
                    src="/images/insert-equation-with-caption-credit.png"
                    alt="add credit line"
                  />
                </figure>
              </li>
              <li className="style-guide__step" id="long-equation-caption">
                <figure>
                  <figcaption>
                    <ol>
                      <li>
                        <p className="warning">
                          Be sure to delete any trailing spaces after the
                          caption and any trailing spaces or carriage returns
                          after the equation object.
                        </p>
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
                    src="/images/insert-equation-with-caption-4.png"
                    alt="Delete trailing spaces after the equation caption number"
                  />
                </figure>
              </li>
            </ol>
            <p className="warning">
              If an equation needs to be converted from inline to block, click
              on the equation requiring conversion and select ‘Change to
              display‘ from the dropdown menu on the right.
            </p>
          </section>

          <Schema
            id="data-equations"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/equation',
              '@type': 'Formula',
              alternateName: 'equation 1',
              description: 'Linear relationship',
              encoding: {
                '@id': 'http://example.com/encoding-equation',
                '@type': 'FormulaObject',
                fileFormat: 'application/mathml+xml',
                contentUrl: 'http://example.com/equation1'
              }
            }}
          />
        </section>
      </section>
    );
  }
}

Equations.ds3Id = `ds3:${Equations.name}`;

export default Customize(Equations);
