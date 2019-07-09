import React from 'react';

class Examples extends React.Component {
  render() {
    return (
      <section id="examples" className="style-guide__group">
        <h2>Examples</h2>
        <ul>
          <li>
            <a href="/samples/example.ds3.docx" download="example.ds3.docx">
              Sample document
            </a>{' '}
            illustrating all the features of 'DOCX Standard Scientific Style'{' '}
            (adapted from{' '}
            <a href="http://wwwnc.cdc.gov/eid/article/19/5/12-1042_article">
              source
            </a>).
          </li>
        </ul>
      </section>
    );
  }
}

export default Examples;
