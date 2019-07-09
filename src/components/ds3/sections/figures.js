import React from 'react';
import Schema from '../schema';
import Customize from '../../../hoc/customize';

class Figures extends React.Component {
  render() {
    return (
      <section id={Figures.ds3Id} className="style-guide__group">
        <h3>Figures</h3>
        <section id="insert-figure">
          <h4>Insert figure</h4>
          <p className="warning">
            When possible, use the{' '}
            <a href="https://en.wikipedia.org/wiki/Tagged_Image_File_Format">
              TIFF
            </a>{' '}
            file format over{' '}
            <a href="https://en.wikipedia.org/wiki/Encapsulated_PostScript">
              EPS
            </a>{' '}
            as EPS files often have missing/corrupted fonts, oversized masks,
            stray points, and boxes, which can result in errors and poor output.
          </p>
          <p>
            Insert images, pictures, or figures using one of 3 possible options:
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      As a first option, go to the{' '}
                      <span className="ms-label">Insert</span> tab of the
                      ribbon, click on{' '}
                      <span className="ms-button">Picture</span> and select{' '}
                      <span className="ms-value">Picture from file...</span>{' '}
                      from the drop-down menu.
                    </li>
                    <li>
                      In the new dialogue window, select the image to be
                      inserted.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-images-1.png"
                  alt="Insert a figure using the built-in insert picture tool"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  As a second option, drag and drop an image file into the
                  document.
                </figcaption>
                <img
                  src="/images/insert-images-2.png"
                  alt="Insert a figure by dragging and dropping an image file into the document"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  As a third option, copy the image and paste it directly into
                  the document.
                </figcaption>
              </figure>
            </li>
          </ol>
        </section>

        <section id="figure-caption">
          <h4>Figure caption</h4>
          <p>
            Insert figure captions using the built-in{' '}
            <span className="ms-feature">Caption</span> feature of Microsoft
            Word:
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Right click on the figure, and select{' '}
                      <span className="ms-value">Insert caption...</span> (or go
                      to the <span className="ms-label">References</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Insert Caption</span>).
                    </li>
                    <li>
                      A dialogue window allowing to customize the caption label
                      and content will appear.
                    </li>
                    <li>
                      <p>
                        When possible, set the caption label (
                        <span className="ms-label">Label</span>) to{' '}
                        <span className="ms-value">Figure</span>.
                      </p>
                      <p>
                        If a custom label is required (such as ‘Photograph’,
                        ‘Scheme’, or ‘Slide’), click on the{' '}
                        <span className="ms-button">New Label...</span> button,
                        enter the custom label text in the new dialogue window
                        and click on <span className="ms-button">OK</span> to
                        return to the caption dialogue window. The newly created
                        label will now be available from the{' '}
                        <span className="ms-label">Label</span> select box in
                        the <span className="ms-label">Caption</span> dialogue
                        window.
                      </p>
                    </li>
                    <li>
                      <p>
                        Add the caption content (if any) in the{' '}
                        <span className="ms-label">Caption</span> field after
                        the pre-populated label and number (e.g., ‘Figure 1’).
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
                        <a href="#long-figure-caption">next step</a>).
                      </p>
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/figure-caption-1.png"
                  alt="Select the figure and insert a caption using the insert caption tool"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>The figure now has a caption.</figcaption>
                <img
                  src="/images/figure-caption-2.png"
                  alt="The figure caption is added to the figure"
                />
              </figure>
            </li>
            <li className="style-guide__step" id="long-figure-caption">
              <figure>
                <figcaption>
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
                  src="/images/figure-caption-warning-3.png"
                  alt="For longer captions, add text to the inserted caption and apply the caption style to the entire caption"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add metadata about the figure (authors, contributors,
                    license, sources, etc.) at the end of the caption following
                    the instructions defined in the the{' '}
                    <a href="#ds3:ResourceMetadata">resource metadata</a>{' '}
                    section.
                  </p>
                  <p className="example">
                    Author<code className="token">:</code>{' '}
                    <span className="person">
                      Regal<code className="token">,</code> Brian{' '}
                      <code className="token">“</code>Dr. Brian Regal
                      <code className="token">”</code>
                    </span>{' '}
                    <code className="token">(</code>Cryptozoology
                    <code className="token"> &lt; </code>Kean University
                    <code className="token"> - </code> Union
                    <code className="token">,</code> NJ
                    <code className="token">,</code> USA{' '}
                    <code className="token">)</code>
                    <code className="token">.</code>
                    Figure from<code className="token">:</code>{' '}
                    <span className="citation">
                      Wells and Tedford (1995, figure 36)
                    </span>{' '}
                    &copy; 1995{' '}
                    <span className="organization">
                      American Museum of Natural History
                    </span>
                    <code className="token">, </code> with permission
                    <code className="token">.</code>
                    Data from<code className="token">:</code>{' '}
                    <span className="cross-reference">
                      <span className="resource">Supporting Dataset 2</span>
                    </span>
                    <code className="token">.</code>
                  </p>
                </figcaption>
                <img
                  src="/images/figure-caption-3.png"
                  alt="add credit line to the figure caption"
                />
              </figure>
            </li>
          </ol>
          <Schema
            id="data-figures"
            data={{
              '@context': 'https://sci.pe',
              '@id': 'http://example.com/image',
              '@type': 'Image',
              alternateName: 'Figure 1',
              caption: 'Figure caption',
              encoding: [
                {
                  '@id': 'http://example.com/source-image',
                  '@type': 'ImageObject',
                  contentUrl: 'http://example.com/image.tiff',
                  fileFormat: 'image/tiff',
                  width: '1600px',
                  height: '1600px'
                },
                {
                  '@id': 'http://example.com/converted-image',
                  '@type': 'ImageObject',
                  contentUrl: 'http://example.com/image.png',
                  fileFormat: 'image/png',
                  width: '1600px',
                  height: '1600px',
                  isBasedOn: 'http://example.com/source-image',
                  thumbnail: [
                    {
                      '@id': 'http://example.com/small-thumbnail',
                      '@type': 'ImageObject',
                      contentUrl: 'http://example.com/image-400x400.png',
                      fileFormat: 'image/png',
                      width: '400px',
                      height: '400px',
                      isBasedOn: 'http://example.com/converted-image'
                    },
                    {
                      '@id': 'http://example.com/medium-thumbnail',
                      '@type': 'ImageObject',
                      contentUrl: 'http://example.com/image-600x600.png',
                      fileFormat: 'image/png',
                      width: '600px',
                      height: '600px',
                      isBasedOn: 'http://example.com/converted-image'
                    }
                  ]
                }
              ]
            }}
          />
        </section>

        <section id="multi-part-figure">
          <h4>Multi-part figure</h4>
          <p>
            Use the built-in <span className="ms-feature">Picture Grid</span>{' '}
            feature of Microsoft Word to create multi-part figures.
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Place the cursor in the document where the multi-part
                      figure needs to be inserted.
                    </li>
                    <li>
                      Go to the <span className="ms-label">Insert</span> tab of
                      the ribbon.
                    </li>
                    <li>
                      Click on the <span className="ms-button">SmartArt</span>{' '}
                      icon, select <span className="ms-value">Picture</span>{' '}
                      from the drop-down menu and, in the grid of options that
                      appeared, select{' '}
                      <span className="ms-button">Picture Grid</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/multipart-fig-1.png"
                  alt="Picture Grid is selected from the list of options in the SmartArt picture menu"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    A 2&times;2 multi-part figure is automatically inserted in
                    the document.
                  </p>
                  <p>
                    Click on the <span className="ms-button">+</span> or{' '}
                    <span className="ms-button">-</span> icons of the{' '}
                    <span className="ms-label">SmartArt Text</span> window to
                    adjust the number of parts required by the multi-part
                    figure. Note that the positioning of the figure does not
                    matter for multi-part figure, only their order.
                  </p>
                  <p>
                    To insert the first figure part, click on one of the picture
                    icons in the multi-part figure (or in the{' '}
                    <span className="ms-label">SmartArt Text</span> window).
                    Select the image to be inserted from the pop-up{' '}
                    <span className="ms-label">Choose a Picture</span> window
                    and click on <span className="ms-button">Insert</span>.
                  </p>
                </figcaption>
                <img
                  src="/images/multipart-fig-2.png"
                  alt="Upper left figure is clicked inside the automatically inserted 2 X 2 picture grid"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    The figure is automatically inserted in the multi-part
                    figure.
                  </p>
                  <p>
                    When a figure is inserted, Microsoft Word may zoom in on it
                    to fill the whole available space. To change this behavior
                    and guarantee that the entire figure is visible
                    (recommended):
                  </p>
                  <ol>
                    <li>
                      Select the figure in the multi-part figure that needs to
                      be adjusted.
                    </li>
                    <li>
                      Click on the{' '}
                      <span className="ms-label">Picture Format</span> tab on
                      the ribbon.
                    </li>
                    <li>
                      Click on the <span className="ms-label">Crop</span> icon
                      and select <span className="ms-value">Fit</span> from the
                      drop-down menu. This will adjust the part so that the
                      entire figure is now visible.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/multipart-fig-3.png"
                  alt="adjust the image to fit in the window"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Add <strong>short labels</strong> for each part of the
                    multi-part figure by filling the text boxes (
                    <span className="ms-value">[ Text ]</span>) located above
                    the figure parts (or in the{' '}
                    <span className="ms-label">SmartArt Text</span> window).
                  </p>
                  <p>
                    Short labels are used to identify the parts of a multi-part
                    figure. Examples of short labels include single letters
                    (e.g., A, B, C, D), positioning information (e.g., Left
                    profile, Right profile), or any other short identifying
                    information (e.g., Species names).
                  </p>
                  <ul className="warning">
                    <li>
                      Avoid writing long text for short labels and instead,
                      provide additional information about each part of a
                      multi-part figure in the multi-part figure caption
                      (referring to the parts by their short labels).
                    </li>
                    <li>
                      Avoid repeating the multi-part figure caption label in the
                      short labels of the parts of a multi-part figure. For
                      instance, if a multi-part figure labeled ‘Figure 4’ has 2
                      parts, the parts should be labeled ‘A’ and ‘B’ as opposed
                      to ‘Figure 4A‘ and ‘Figure 4B‘.
                    </li>
                  </ul>
                </figcaption>
                <img
                  src="/images/multipart-fig-4.png"
                  alt="Cursor is placed in the text box above the inserted figure to add a caption"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Complete the multi-part figure by adding the remaining parts
                    and short labels.
                  </p>
                </figcaption>
                <img
                  src="/images/multipart-fig-5.png"
                  alt="Complete picture grid with a four-part figure with captions A, B, C, and D"
                />
              </figure>
            </li>
          </ol>
          <p>
            To <strong>create a caption for the multi-part figure</strong>:
          </p>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>Select the entire multi-part figure.</li>
                    <li>
                      Right click on the figure, and select{' '}
                      <span className="ms-value">Insert caption...</span> (or go
                      to the <span className="ms-label">References</span> tab of
                      the ribbon and click on{' '}
                      <span className="ms-button">Insert Caption</span>).
                    </li>
                    <li>
                      A dialogue window allowing to customize the caption label
                      and content will appear.
                    </li>
                    <li>
                      <p>
                        When possible, set the caption label (
                        <span className="ms-label">Label</span>) to{' '}
                        <span className="ms-value">Figure</span>.
                      </p>
                      <p>
                        If a custom label is required (such as ‘Photograph’,
                        ‘Scheme’, or ‘Slide’), click on the{' '}
                        <span className="ms-button">New Label...</span> button,
                        enter the custom label text in the new dialogue window
                        and click on <span className="ms-button">OK</span> to
                        return to the <span className="ms-label">Caption</span>{' '}
                        dialogue window. The newly created label will now be
                        available from the{' '}
                        <span className="ms-label">Label</span>
                        select box in the{' '}
                        <span className="ms-label">Caption</span> dialogue
                        window.
                      </p>
                    </li>
                    <li>
                      <p>
                        Add the caption content (if any) in the{' '}
                        <span className="ms-label">Caption</span> field after
                        the pre-populated label and number (e.g., ‘Figure 1’).
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
                        <a href="#long-multi-part-figure-caption">next step</a>
                        ).
                      </p>
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/multipart-fig-6.png"
                  alt="Select the entire multi-part figure and insert a caption using the insert caption tool"
                />
              </figure>
            </li>
            <li
              className="style-guide__step"
              id="long-multi-part-figure-caption"
            >
              <figure>
                <figcaption>
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
                  src="/images/multipart-fig-7.png"
                  alt="The figure caption is added to the multi-part figure"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>When possible organize the caption text with:</p>
                  <ul>
                    <li>
                      A title (or description){' '}
                      <strong>for the figure as a whole</strong>, followed by{' '}
                      <a href="#ds3:ResourceMetadata">resource metadata</a>{' '}
                      (authors, contributors, sources etc.) that apply to the
                      multi-part figure as a whole, and ending with a period ({' '}
                      <code className="token">.</code>).
                    </li>
                    <li>
                      A title (or description) for each part, each starting with
                      the short label of the part in parenthesis (e.g.,{' '}
                      <code className="token">(</code>A
                      <code className="token">)</code>), followed by{' '}
                      <a href="#ds3:ResourceMetadata">resource metadata</a>{' '}
                      (authors, contributors, sources etc.) specific to the part
                      of the multi-part figure, and ending with a period ({' '}
                      <code className="token">.</code>).
                    </li>
                  </ul>
                  <p>
                    Be sure to format the resource metadata according to the
                    instructions defined in the{' '}
                    <a href="#ds3:ResourceMetadata">resource metadata</a>{' '}
                    section.
                  </p>
                  <p className="example">
                    Dinosaurs. Author<code className="token">:</code>{' '}
                    <span className="person">
                      Regal<code className="token">,</code> Brian{' '}
                      <code className="token">“</code>Dr. Brian Regal
                      <code className="token">”</code>
                    </span>{' '}
                    <code className="token">(</code>Cryptozoology
                    <code className="token"> &lt; </code>Kean University
                    <code className="token"> - </code> Union
                    <code className="token">,</code> NJ
                    <code className="token">,</code> USA{' '}
                    <code className="token">)</code>
                    <code className="token">.</code>{' '}
                    <code className="token">(</code>A
                    <code className="token">)</code> Tyronnosaurus rex.{' '}
                    <code className="token">(</code>B
                    <code className="token">)</code> Segosaurus. Figure from
                    <code className="token">:</code>{' '}
                    <span className="citation">
                      Wells and Tedford (1995, figure 36)
                    </span>{' '}
                    &copy; 1995{' '}
                    <span className="organization">
                      American Museum of Natural History
                    </span>
                    <code className="token">,</code> with permission
                    <code className="token">.</code>{' '}
                    <code className="token">(</code>C
                    <code className="token">)</code> Brontosaurus.{' '}
                    <code className="token">(</code>D
                    <code className="token">)</code> Pterodactyl.
                  </p>
                  <p className="warning">
                    Be sure that the caption for the entire figure and for each
                    part ends with a period (<code className="token">.</code>)
                    so that they can be disambiguated.
                  </p>
                </figcaption>
                <img
                  src="/images/multipart-fig-8.png"
                  alt="add credit line for each part to the figure caption"
                />
              </figure>
            </li>
          </ol>
        </section>
        <Schema
          id="data-multi-part-figure"
          data={{
            '@context': 'https://sci.pe',
            '@id': 'http://example.com/multi-part-image',
            '@type': 'Image',
            alternateName: 'Figure 2',
            caption:
              'A: Tyrannosaurus rex; B: Stegosaurus; C: Brontosaurus; D: Pterodactyl',
            hasPart: [
              {
                '@id': 'http://example.com/image-part-a',
                '@type': 'Image',
                alternateName: 'A',
                caption: 'Tyrannosaurus rex',
                encoding: {
                  '@id': 'http://example.com/encoding-part-a',
                  '@type': 'ImageObject',
                  contentUrl: 'http://example.com/image-part-a.jpeg',
                  fileFormat: 'image/jpeg'
                }
              },
              {
                '@id': 'http://example.com/image-part-b',
                '@type': 'Image',
                alternateName: 'B',
                caption: 'Stegosaurus',
                encoding: {
                  '@id': 'http://example.com/encoding-part-b',
                  '@type': 'ImageObject',
                  contentUrl: 'http://example.com/image-part-b.jpeg',
                  fileFormat: 'image/jpeg'
                }
              },
              {
                '@id': 'http://example.com/image-part-c',
                '@type': 'Image',
                alternateName: 'C',
                caption: 'Brontosaurus',
                encoding: {
                  '@id': 'http://example.com/encoding-part-c',
                  '@type': 'ImageObject',
                  contentUrl: 'http://example.com/image-part-c.jpeg',
                  fileFormat: 'image/jpeg'
                }
              },
              {
                '@id': 'http://example.com/image-part-d',
                '@type': 'Image',
                alternateName: 'D',
                caption: 'Pterodactyl',
                encoding: {
                  '@id': 'http://example.com/encoding-part-d',
                  '@type': 'ImageObject',
                  contentUrl: 'http://example.com/image-part-d.jpeg',
                  fileFormat: 'image/jpeg'
                }
              }
            ]
          }}
        />
      </section>
    );
  }
}

Figures.ds3Id = `ds3:${Figures.name}`;

export default Customize(Figures);
