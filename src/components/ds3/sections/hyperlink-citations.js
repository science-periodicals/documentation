import React from 'react';
import FormatIdentifierUrl from '../formats/format-identifier-url';
import Customize from '../../../hoc/customize';

class HyperlinkCitations extends React.Component {
  render() {
    return (
      <section id={HyperlinkCitations.ds3Id} className="style-guide__subgroup">
        <h4>Adding citations using hyperlinks and screentips</h4>
        <p>
          This last method provides the most flexibility and removes the need to
          have the long form of citations explicitly in the text (or as
          footnotes, endnotes, or in a dedicated bibliography section).
        </p>
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <ol>
                  <li>Highlight the citation text.</li>
                  <li>
                    Go to the <span className="ms-value">Insert</span>
                    tab of the ribbon and click on
                    <span className="ms-button">Hyperlink</span>, a new{' '}
                    <span className="ms-label">Insert Hyperlink</span> dialogue
                    window will appear.
                  </li>
                  <li>
                    <ul>
                      <li>
                        <p>
                          If a URL is present, enter it in the
                          <span className="ms-label">Address box</span>
                          of the{' '}
                          <span className="ms-label">
                            Web Page or File
                          </span>{' '}
                          tab.
                        </p>
                        <ul>
                          <li>
                            Privilege robust URLs such as{' '}
                            <a href="https://en.wikipedia.org/wiki/Persistent_uniform_resource_locator">
                              <abbr title="Persistent uniform resource locator">
                                PURL
                              </abbr>s
                            </a>,{' '}
                            <a href="https://en.wikipedia.org/wiki/Permalink">
                              permalinks
                            </a>, or a URLs using a{' '}
                            <a href="http://doi.org">
                              <abbr title="Digital Object Identifier">DOI</abbr>
                            </a>.
                          </li>
                          <li>
                            When possible link directly to the specific part of
                            a citation. For instance, if the first figure of an
                            article is being cited and this figure contains a
                            specific URL (<span className="eg">
                              <a href="http://doi.org/10.1371/journal.pone.0109888.g001">
                                http://doi.org/10.1371/journal.pone.0109888.g001
                              </a>
                            </span>), use this URL instead of the URL of the
                            whole article (<span className="eg">
                              <a href="http://doi.org/10.1371/journal.pone.0109888">
                                http://doi.org/10.1371/journal.pone.0109888
                              </a>
                            </span>).
                          </li>
                          <li>
                            If no URL is available but a{' '}
                            <strong>unique identifier</strong> for the resource
                            can be found (e.g.,{' '}
                            <abbr title="Digital object identifier">DOI</abbr>,{' '}
                            <abbr title="International Standard Book Number">
                              ISBN
                            </abbr>,{' '}
                            <abbr title="Library of Congress Control Number">
                              LCCN
                            </abbr>, <abbr title="PubMed ID">PMID</abbr> or
                            database entry) try to convert the unique identifier
                            into a URL following the guidelines{' '}
                            <a href="#identifier-url-format">below</a>.
                          </li>
                        </ul>
                      </li>
                      <li>
                        When no URL can be found (or constructed), hyperlink the
                        citation to itself:
                        <ol>
                          <li>
                            Create a{' '}
                            <span className="ms-feature">bookmark</span>
                            from the selection.
                          </li>
                          <li>Re-select the same citation.</li>
                          <li>
                            Hyperlink the citation to the bookmark just created
                            (click on the{' '}
                            <span className="ms-label">This Document</span> tab
                            and select the bookmark just created).
                          </li>
                        </ol>
                      </li>
                    </ul>
                  </li>
                </ol>
                <ul className="example">
                  <li>
                    <a
                      className="citation"
                      href="http://doi.org/10.1371/journal.pone.0109888.g001"
                      title={`Janis, Christine M., Karalyn Buttrill, and Borja Figueirido. 2014. "Locomotion in extinct giant kangaroos: were sthenurines hop-less monsters?." PLoS ONE 9(10): e109888, figure 1.`}
                    >
                      Janis, Buttrill and Figueirido (2014, figure 1)
                    </a>
                  </li>
                  <li>
                    <a
                      className="citation"
                      href="#CommunicationAct1934"
                      title="Communications Act of 1934, Pub. L. No. 73-416, \xA7 605, 48 Stat. 1064, 1103-04 (codified as amended at 47 U.S.C. \xA7 605 (2012)"
                    >
                      Communications Act of 1934
                    </a>
                  </li>
                  <li>
                    GenBank accession number{' '}
                    <a
                      className="citation"
                      title="GenBank (Ideonella dechloratans cytochrome C class 1 precursor and molybdopterin-guanine dinucleotide biosynthesis genes, complete cds [accession number EU768872]; Accessed January 1, 2016), http://www.ncbi.nlm.nih.gov/genbank."
                      href="http://www.ncbi.nlm.nih.gov/nuccore/EU768872"
                    >
                      EU768872
                    </a>.
                  </li>
                </ul>
                <p className="warning">
                  Always use the same URL (or bookmark) for repeated occurrences
                  of the same citation (for instance multiple shortened versions
                  of a citation)). When possible, use different URLs (or
                  bookmarks) for citations of a work and citations of parts of a
                  work (sections, figures, etc.).
                </p>
              </figcaption>
              <img
                src="/images/citation-hyperlink-1.png"
                alt="add screen tip to citation to entity"
              />
            </figure>

            <FormatIdentifierUrl />
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  To mitigate{' '}
                  <a href="https://en.wikipedia.org/wiki/Link_rot">link rot</a>{' '}
                  and provide enough metadata to ensure a good reading
                  experience in the printed version of the article, add a{' '}
                  <span className="ms-feature">Screen tip</span> to the
                  hyperlink containing the long version of the citation.
                </p>
                <ol>
                  <li>
                    Click on the <span className="ms-button">ScreenTip...</span>
                    button in the{' '}
                    <span className="ms-label">Insert Hyperlink</span> dialogue
                    window.
                  </li>
                  <li>
                    Fill in the <span className="ms-label">ScreenTip text</span>{' '}
                    field.
                  </li>
                  <li>
                    Click on <span className="ms-button">OK</span>.
                  </li>
                </ol>
                <ul className="example">
                  <li className="ms-screentip">
                    Janis, Christine M., Karalyn Buttrill, and Borja Figueirido.
                    2014. "Locomotion in extinct giant kangaroos: were
                    sthenurines hop-less monsters?." PLoS ONE 9(10): e109888,
                    figure 1.
                  </li>
                  <li className="ms-screentip">
                    Communications Act of 1934, Pub. L. No. 73-416, § 605, 48
                    Stat. 1064, 1103-04 (codified as amended at 47 U.S.C. § 605
                    (2012).
                  </li>
                  <li className="ms-screentip">
                    GenBank (Ideonella dechloratans cytochrome C class 1
                    precursor and molybdopterin-guanine dinucleotide
                    biosynthesis genes, complete cds [accession number
                    EU768872]; Accessed January 1, 2016),
                    http://www.ncbi.nlm.nih.gov/genbank.
                  </li>
                </ul>
                <p className="warning">
                  If the screen tip is longer than 255 characters, Microsoft
                  Word will truncate it. In this case, the workaround described
                  at the <a href="#long-screen-tip">end of this section</a> must
                  be used.
                </p>
              </figcaption>
              <img
                src="/images/citation-hyperlink-2.png"
                alt="add screen tip to citation to entity"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  The citation is now hyperlinked, and a screen tip will appear
                  when hovering over the citation.
                </p>
                <p>
                  Note: copying and pasting hyperlinks will preserve their
                  screen tips, saving authors the need to re-enter screen tips
                  for each new hyperlink of the same citation.
                </p>
              </figcaption>
              <img
                src="/images/citation-hyperlink-3.png"
                alt="add screen tip to citation to entity"
              />
            </figure>
          </li>
        </ol>
        <figure id="long-screen-tip">
          <figcaption>
            <p>
              Due to a current limitation of Microsoft Word graphical user
              interface, a <span className="ms-feature">Screen tip</span>
              longer than 255 characters must be directly entered in the
              hyperlink <span className="ms-feature">field code</span> (the
              graphical user interface will truncate any text longer than 255
              characters).
            </p>
            <p>
              To edit hyperlink <span className="ms-feature">field codes</span>,
              the hyperlink values must first be replaced by their field codes
              by typing <code>ALT+F9</code> on the keyboard.
            </p>
            <p>
              For instance a hyperlink value like
              <a
                className="citation"
                href="http://doi.org/10.1371/journal.pone.0109888.g001"
                title={`Janis, Christine M., Karalyn Buttrill, and Borja Figueirido. 2014. "Locomotion in extinct giant kangaroos: were sthenurines hop-less monsters?." PLoS ONE 9(10): e109888, figure 1.`}
              >
                Janis, Buttrill and Figueirido (2014, figure 1)
              </a>{' '}
              will be replaced by the following field code:
            </p>
            <p>
              <code className="force-break">
                <span className="token">{'{'}</span>
                <span className="token">HYPERLINK</span>{' '}
                <span className="token">"</span>http://doi.org/10.1371/journal.pone.0109888.g001<span className="token">
                  "
                </span>{' '}
                <span className="token">\o</span>
                <span className="token">"</span>Janis, Christine M., Karalyn
                Buttrill, and Borja Figueirido. 2014.{' '}
                <span className="token">\</span>"Locomotion in extinct giant
                kangaroos: were sthenurines hop-less monsters?.<span className="token">
                  \
                </span>" PLoS ONE 9(10): e109888, figure 1.<span className="token">
                  "
                </span>
                <span className="token">
                  {'}'}
                  <span className="token" />
                </span>
              </code>
            </p>
            <p>
              The part of the field code starting with{' '}
              <code className="token">\o</code> corresponds to the screen tip.
              Text can be added or edited to circumvent the 255 characters
              limitation of the <span className="ms-feature">ScreenTip</span>{' '}
              user interface.
            </p>
            <p className="warning">
              If the screen tip contains double quotes (<span className="token">
                ""
              </span>) they must be escaped using a backslash character (<span className="token">
                \
              </span>).
            </p>
            <p>
              Once field codes have been edited, they can be replaced by their
              values by re-typing <code>ALT+F9</code> on the keyboard.
            </p>
          </figcaption>
          <img
            src="/images/citation-hyperlink-4.png"
            alt="add screentip manually when greater than 255 characters"
          />
        </figure>
      </section>
    );
  }
}

HyperlinkCitations.ds3Id = `ds3:${HyperlinkCitations.name}`;

export default Customize(HyperlinkCitations);
