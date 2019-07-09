import React from 'react';
import Customize from '../../../hoc/customize';

class Lists extends React.Component {
  render() {
    return (
      <section id={Lists.ds3Id} className="style-guide__group">
        <h3>Lists</h3>
        <p>To create a list:</p>
        <ol className="style-guide__steps">
          <li className="style-guide__step">
            <figure>
              <figcaption>
                <p>
                  Place the cursor on a new line and start a new list either by
                  clicking the bulleted list icon (for unordered list) or the
                  numbered list icon (for ordered list) on the{' '}
                  <span className="ms-label">Home</span> tab of the ribbon.
                </p>
              </figcaption>
              <img
                src="/images/lists-1.png"
                alt="Create a list using the bulleted list icon"
              />
            </figure>
          </li>
          <li className="style-guide__step">
            <figure>
              <figcaption>Add the list items.</figcaption>
              <img src="/images/lists-2.png" alt="add items to the list" />
            </figure>
          </li>
        </ol>
        <p className="warning">
          After having completed the list, be sure to clear the bullet points,
          numbers, or the paragraph list style by selecting the{' '}
          <span className="ms-style">Normal</span> style from the styles pane
          (in the <span className="ms-label">Home</span> tab of the ribbon).
        </p>
      </section>
    );
  }
}

Lists.ds3Id = `ds3:${Lists.name}`;

export default Customize(Lists);
