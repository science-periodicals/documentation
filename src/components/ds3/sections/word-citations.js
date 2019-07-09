import React from 'react';
import Customize from '../../../hoc/customize';

class WordCitations extends React.Component {
  render() {
    return (
      <section id={WordCitations.ds3Id}>
        {/*
            <h4>
            Adding citations using the built-in bibliography feature of Microsoft
            Word
            </h4>*/}

        <p>
          Citations must be inserted using the built-in{' '}
          <span className="ms-feature">Bibliography</span>
          feature of Microsoft Word that allows to organize a bibliography,
          automatically format citations, and guarantee that each shortened
          version of a citation is properly linked to its long version.
        </p>

        <section id="insert-citations-from-a-new-source">
          <h4>Insert citations from a new source</h4>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Set the bibliography style (e.g., Chicago Manual of Style):
                  </p>
                  <ol>
                    <li>
                      Go to the <span className="ms-label">References</span> tab
                      of the ribbon.
                    </li>
                    <li>
                      Set <span className="ms-label">Bibliography Style</span>{' '}
                      to the desired value (here{' '}
                      <span className="ms-value">Chicago</span>).
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-citations-1.png"
                  alt="The citations button in the Reference tab of the banner is clicked"
                />
              </figure>
            </li>

            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Place the cursor where a citation needs to be inserted.
                    </li>
                    <li>
                      Click on{' '}
                      <span className="ms-button">Insert Citation</span>
                    </li>
                    <li>
                      <p>
                        Fill in the source information, starting with the{' '}
                        <span className="ms-label">Type of Source</span>.
                      </p>
                      <p>
                        Be sure to include author information in the format
                        prompted by Microsoft Word when adding source
                        information (for instance for Author, enter the family
                        name followed by a comma (<code className="token">
                          ,
                        </code>) followed by the given name, followed by any
                        additional names).
                      </p>
                      <p>
                        If a citation contains several authors, separate them by
                        a semicolon (<code className="token">;</code>), or click
                        on the <span className="ms-button">Edit...</span> button
                        and add more authors by clicking on the{' '}
                        <span className="ms-button">+</span> button.
                      </p>
                      <p className="warning">
                        Use the{' '}
                        <span className="ms-label">Standard number field</span>{' '}
                        to add identifiers such as{' '}
                        <abbr title="Digital Object Identifier">DOI</abbr>s or{' '}
                        <abbr title="International Standard Book Number">
                          ISBN
                        </abbr>s.
                      </p>
                      <p className="warning">
                        If a URL is known for the citation but the{' '}
                        <span className="ms-label">Type of Source</span>{' '}
                        corresponding to the source does not contain a{' '}
                        <span className="ms-label">URL</span> enter the URL in
                        the <span className="ms-label">Comments</span>
                        field.
                      </p>
                      <p className="warning">
                        If no appropriate{' '}
                        <span className="ms-label">Type of Source</span> can be
                        found, select the{' '}
                        <span className="ms-value">Miscellaneous</span>
                        style. Fill in as much relevant fields as possible and
                        provide the long form of the citation (including any
                        relevant URL) in the{' '}
                        <span className="ms-label">Comments</span>
                        field (formatted according the guidelines of the Chicago
                        Manual of Style, as this style usually results in
                        citations containing more metadata than any other
                        citation format).
                      </p>
                    </li>
                    <li>
                      Click on <span className="ms-button">OK</span>, the
                      bibliography now has a new entry.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-citations-2.png"
                  alt="The chicago citation style is selected in the citations window that appears"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    A reference to the citation is now inserted in the citation
                    source manager and a specific instance of the citation is
                    inserted in the text.
                  </p>
                  <p className="example">
                    (<span className="citation">Smith &amp; Doe 2014</span>)
                  </p>
                  <p className="warning">
                    If a citation is inserted in a footnote, Microsoft Word may
                    automatically convert it into plain text, loosing the
                    benefit of using the built-in{' '}
                    <span className="ms-feature">Bibliography</span> feature. To
                    prevent this behavior, insert the citation in the text (not
                    in the footnote) first, copy it, and then paste it in the
                    footnote.
                  </p>
                </figcaption>
                <img
                  src="/images/insert-citations-3.png"
                  alt="The citation appears in the text where the cursor was located"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    Once inserted, the reference text can be modified to
                    suppress the author, year, or title from being displayed or
                    to display a point citation (e.g., citation to a specific
                    page, range of pages, anchor of a website, section, or
                    resource):
                  </p>
                  <ol>
                    <li>Click on the citation.</li>
                    <li>
                      Click on the arrow on the right (or right click) to access
                      a drop-down menu and select
                      <span className="ms-value">Edit this citation</span>.
                    </li>
                    <li>
                      Check the box next to author, year, or title to supress it
                      from being displayed and enter point citation information
                      after the <span className="ms-label">pages</span> label.
                    </li>
                  </ol>
                  <p>
                    Note, any modifications made only apply to this instance of
                    the citation and do not impact the citation stored in the
                    citation source manager (or any other reference to that
                    source).
                  </p>
                </figcaption>
                <img
                  src="/images/insert-citations-4.png"
                  alt="Modifying the instance citation to add page numbers"
                />
              </figure>
            </li>
          </ol>
        </section>

        <section id="insert-citation-from-an-existing-source">
          <h4>Insert citations from an existing source</h4>
          <ol className="style-guide__steps">
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <ol>
                    <li>
                      Go to the <span className="ms-label">References</span> tab
                      of the ribbon.
                    </li>
                    <li>
                      Click on <span className="ms-button">Citations</span>.
                    </li>
                  </ol>
                </figcaption>
                <img
                  src="/images/insert-citations-existing-source-1.png"
                  alt="With the citation window open, an existing source is added to the text by double clicking it"
                />
              </figure>
            </li>
            <li className="style-guide__step">
              <figure>
                <figcaption>
                  <p>
                    A side menu containing the list of sources relevant to the
                    document is now available.
                  </p>
                  <p>
                    Double click on the source to be cited to insert it in the
                    text.
                  </p>
                  <p className="example">
                    (<span className="citation">Smith &amp; Doe 2014</span>)
                  </p>
                  <p className="warning">
                    If a citation is inserted in a footnote, Microsoft Word may
                    automatically convert it into text, loosing the benefit of
                    using the built-in{' '}
                    <span className="ms-feature">Bibliography</span> feature. To
                    prevent this behavior, insert the citation in the text
                    first, copy it, and then paste it in the footnote.
                  </p>
                  <p>
                    To expand the inserted reference '(<span className="citation">
                      {' '}
                      Smith &amp; Doe 2014
                    </span>)' with additional references, e.g., '(<span className="citation">
                      Smith &amp; Doe 2014
                    </span>; <span className="citation">Sullivan 2015</span>)',
                    click on the inserted citation in the document and then
                    insert another citation.{/*'*/}
                  </p>
                  <p className="warning">
                    If the document includes multiple citations sharing the same
                    first author and years, additional authors and/or the
                    publication title will also be included in the inserted
                    citation (along with the first author and year). This is an
                    expected behavior and makes it possible to differentiate
                    between multiple citations sharing the same first authors
                    and years.
                  </p>
                </figcaption>
                <img
                  src="/images/insert-citations-existing-source-2.png"
                  alt="With the citation window open, add a second existing source is added to the text by double clicking it"
                />
              </figure>
            </li>
            <li className="style-guide__step" id="modify-inserted-citation">
              <figure>
                <figcaption>
                  <p>
                    Once inserted, the reference text can be modified to
                    suppress the author, year, or title from being displayed or
                    to display a point citation (e.g., citation to specific
                    pages, sections, or resources):
                  </p>
                  <ol>
                    <li>Click on the citation.</li>
                    <li>
                      Click on the arrow on the right (or right click) to access
                      a drop-down menu and select{' '}
                      <span className="ms-value">Edit this citation</span>.
                    </li>
                    <li>
                      Check the box next to author, year, or title to supress it
                      from being displayed and enter point citation information
                      after the <span className="ms-label">pages</span> label.
                    </li>
                  </ol>
                  <p>
                    Note, any modifications made only apply to this instance of
                    the citation and do not impact the citation stored in the
                    citation source manager (or any reference to that source).
                  </p>
                  <p className="warning">
                    A point citation can only be added to the first citation in
                    a list of citations in Microsoft Word, e.g., '(<span className="citation">
                      Smith &amp; Doe 2014, 12-24; Sullivan 2015
                    </span>)'. If multiple citations in a list require a point
                    citation, each must be inserted independently, e.g., '(<span className="citation">
                      Smith &amp; Doe 2014, 12-24
                    </span>)(<span className="citation">
                      {' '}
                      Sullivan 2015, 135
                    </span>)'
                  </p>
                </figcaption>
                <img
                  src="/images/insert-citations-edit.png"
                  alt="The citation appears in the text where the cursor was located"
                />
              </figure>
            </li>
          </ol>
        </section>

        <section id="add-bibliography-section">
          <h4>Add bibliography section</h4>
          <figure>
            <figcaption>
              <ol>
                <li>
                  Go to the <span className="ms-label">References</span> tab of
                  the ribbon.
                </li>
                <li>
                  Place the cursor at the end of the document, where the
                  Bibliography should be inserted.
                </li>
                <li>
                  Click on <span className="ms-button">Bibliography</span> and
                  select the desired option from the drop-down menu.
                </li>
              </ol>
            </figcaption>
            <img
              src="/images/insert-bibliography-short-1.png"
              alt="Works cited is selected from the bibliography button on the Reference banner"
            />
          </figure>
          <figure>
            <figcaption>
              A bibliography will be inserted, using the bibliography style
              specified (Chicago here).
            </figcaption>
            <img
              src="/images/insert-bibliography-short-2.png"
              alt="A works cited section is automatically generated at the end of the document"
            />
          </figure>
        </section>

        <section id="managing-citation-sources">
          <h4>Managing citation sources</h4>
          <p>
            Citation sources can be imported from other documents, added from
            scratch (without being inserted in the text), edited, or deleted.
          </p>
          <p>To manage citation sources:</p>
          <figure>
            <figcaption>
              <ol>
                <li>
                  Go to the <span className="ms-label">References</span> tab of
                  the ribbon.
                </li>
                <li>
                  Click on <span className="ms-button">Citations</span> to open
                  the <span className="ms-label">citations</span> side bar.
                </li>
                <li>
                  Click on the settings menu icon in the bottom right corner and
                  select{' '}
                  <span className="ms-value">citation source manager...</span>{' '}
                  from the drop-down menu.
                </li>
                <li>
                  A new dialogue window will appear allowing to add, import,
                  delete, or edit citation sources.
                </li>
              </ol>
            </figcaption>
            <img
              src="/images/insert-reference-list.png"
              alt="insert list of references"
            />
          </figure>
        </section>
      </section>
    );
  }
}

WordCitations.ds3Id = `ds3:${WordCitations.name}`;

export default Customize(WordCitations);
