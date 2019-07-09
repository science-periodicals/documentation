import React from 'react';
import Customize from '../../../hoc/customize';

class Paragraphs extends React.Component {
  render() {
    return (
      <section id={Paragraphs.ds3Id} className="style-guide__group">
        <h3>Paragraphs</h3>
        <figure>
          <figcaption>
            <p>
              Format paragraphs with the{' '}
              <span className="ms-style">Normal</span> style (this is the
              default style).
            </p>
          </figcaption>
          <img
            src="/images/do-normal.png"
            alt="Apply normal styles to body text."
          />
        </figure>
        <p className="warning">
          Be sure to check that blank lines do not contain styles (clicking on a
          blank line should highlight the{' '}
          <span className="ms-style">Normal</span> style in the{' '}
          <span className="ms-label">Home</span> ribbon).
        </p>
      </section>
    );
  }
}

Paragraphs.ds3Id = `ds3:${Paragraphs.name}`;

export default Customize(Paragraphs);
