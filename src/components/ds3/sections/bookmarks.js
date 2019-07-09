import React from 'react';
import Customize from '../../../hoc/customize';

class Bookmarks extends React.Component {
  render() {
    return (
      <section id={Bookmarks.ds3Id} className="style-guide__group">
        <h3>Bookmarks</h3>
        <p>
          Bookmarks allow to identify a specific part or element of a document
          such as authors’ display names or organization names.{' '}
          <span className="ms-feature">Cross-references</span> are used to
          create a link to a bookmark location and/or insert the bookmarked
          text.
        </p>
        <p>
          To create a <span className="ms-feature">bookmark</span> for a
          selection of text within a document:
        </p>
        <figure>
          <figcaption>
            <ol>
              <li>
                Highlight the text to be bookmarked (the selected text is what
                will be inserted if the{' '}
                <span className="ms-feature">Cross-reference</span> feature is
                used later).
              </li>
              <li>
                Go to the <span className="ms-label">Insert</span> tab of the
                ribbon and click on <span className="ms-button">Bookmark</span>.
              </li>
              <li>
                <p>
                  Fill in the <span className="ms-label">Bookmark name</span>{' '}
                  field. Bookmark names must begin with a letter, can contain
                  numbers and cannot include white spaces (if needed,
                  underscores [<code className="token">_</code>] can be used to
                  separate words). The bookmark name will be used to identify
                  the bookmark when inserting a{' '}
                  <span className="ms-feature">cross-reference</span> therefore
                  a mnemonic, short name should be preferred.
                </p>
              </li>
              <li>
                Click on <span className="ms-button">Add</span>.
              </li>
            </ol>
          </figcaption>
          <img
            src="/images/bookmark-1.png"
            alt="select author display name text and use built-in insert bookmark tool to create a bookmark with the selected text."
          />
        </figure>
        <p>
          Note: When a caption (for a figure, table, equation, etc) is created
          using the built-in <span className="ms-feature">Caption</span> feature
          of Microsoft Word, everything happens as if a bookmark had been
          automatically generated for the caption. The same applies for section
          headings created with the built-in{' '}
          <span className="ms-feature">styles</span> (
          <span className="ms-style">Heading 2</span> etc.) and for footnotes
          and endnotes. These automatically generated bookmark-like objects can
          later be used to refer to the figure, table, citation, section
          heading, footnote, etc. elsewhere in the document using the built-in{' '}
          <span className="ms-feature">Cross-reference</span> feature of
          Microsoft Word.
        </p>
      </section>
    );
  }
}

Bookmarks.ds3Id = `ds3:${Bookmarks.name}`;

export default Customize(Bookmarks);
