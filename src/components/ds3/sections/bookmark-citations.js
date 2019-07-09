import React from 'react';
import Customize from '../../../hoc/customize';

class BookmarkCitations extends React.Component {
  render() {
    return (
      <section id={BookmarkCitations.ds3Id} className="style-guide__subgroup">
        <h4>Adding citations using bookmarks and hyperlinks to bookmarks</h4>
        <p>
          Adding citations using bookmarks and hyperlinks to bookmarks provides
          more flexibility and control than{' '}
          <a href="#adding-citations-using-microsoft-word-bibliography-feature">
            using the built-in <span className="ms-feature">Bibliography</span>
            feature
          </a>{' '}
          of Microsoft Word but does require:
        </p>
        <ul>
          <li>
            That a long version of the citation exists in the text (typically in
            a footnote, endnote, or a dedicated section named 'References',
            'Bibliography', or 'Works Cited'). If this requirement is a
            constraint, see the method defined in the{' '}
            <a href="#adding-citations-using-hyperlinks-and-screentips">
              next section
            </a>.
          </li>
          <li>
            To manually manage links between the long (bookmarked) and shortened
            version of the citatation.
          </li>
        </ul>
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  Create a bookmark for the long version of the reference
                  (typically in a footnote, endnote, or a dedicated section
                  named References, Bibliography, or Work Cited).
                </p>
                <ol>
                  <li>
                    Highlight the long version of a citation to be bookmarked.
                  </li>
                  <li>
                    Go to the <span className="ms-value">Insert</span>
                    tab of the ribbon and click on{' '}
                    <span className="ms-button">Bookmark</span>.
                  </li>
                  <li>
                    Fill in the <span className="ms-label">Bookmark name</span>.
                    Bookmark names must begin with a letter, can contain numbers
                    and cannot include white spaces (if needed, underscores [<code className="token">
                      _
                    </code>] can be used to separate words). The bookmark name
                    will be used to identify the bookmark when inserting a
                    hyperlink (or cross-reference), therefore a mnemonic, short
                    name should be preferred.
                  </li>
                  <li>
                    Click on <span className="ms-button">Add</span> to complete
                    the bookmark creation.
                  </li>
                </ol>
                <p className="example">
                  <span className="bookmark" id="CommunicationAct1934">
                    Communications Act of 1934, Pub. L. No. 73-416, § 605, 48
                    Stat. 1064, 1103-04 (codified as amended at 47 U.S.C. § 605
                    (2012))
                  </span>
                </p>
              </figcaption>
              <img
                src="/images/citation-bookmark-1.png"
                alt="bookmark citation to long version of the reference"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>Hyperlink the citation to the bookmark:</p>
                <ol>
                  <li>Highlight the citation text.</li>
                  <li>
                    Go to the <span className="ms-value">Insert</span>
                    tab of the ribbon and click on
                    <span className="ms-button">Hyperlink</span>.
                  </li>
                  <li>
                    On the new{' '}
                    <span className="ms-label">Insert Hyperlink</span> dialogue
                    window, click on the{' '}
                    <span className="ms-label">This Document</span> tab.
                  </li>
                  <li>
                    Select the citation bookmark name ('CommunicationAct1934').
                  </li>
                </ol>
                <p className="example">
                  <a className="citation" href="#CommunicationAct1934">
                    Communications Act of 1934
                  </a>
                </p>
              </figcaption>
              <img
                src="/images/citation-bookmark-2.png"
                alt="hyperink short version of citation to long version"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>
                The short version of the citation is now hyperlinked to the long
                version.
              </figcaption>
              <img
                src="/images/citation-bookmark-3.png"
                alt="short version of the citation is hyperlinked to the long version itself bookmarked"
              />
            </figure>
          </li>
        </ol>
      </section>
    );
  }
}

BookmarkCitations.ds3Id = `ds3:${BookmarkCitations.name}`;

export default Customize(BookmarkCitations);
