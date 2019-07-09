import React from 'react';

class Introduction extends React.Component {
  render() {
    return (
      <section>
        <p>
          'DOCX Standard Scientific Style' (<abbr title="DOCX Standard Scientific Style">
            DS3
          </abbr>) is a style guide that encourages authors of scholarly
          articles in any discipline not to worry about the appearance of their
          document and instead to concentrate on giving it structure and making
          it accessible.
        </p>
        <p>
          Documents written in 'DOCX Standard Scientific Style' (DS3) are
          automatically convertible to HTML and JSON-LD / schema.org ensuring
          the interoperable exchange, discoverability, and long-term
          preservation of accessible scholarly articles.
        </p>
      </section>
    );
  }
}

export default Introduction;
