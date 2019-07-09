import React from 'react';
import Customize from '../../../hoc/customize';

class StrongAndEmphasizedText extends React.Component {
  render() {
    return (
      <section
        id={StrongAndEmphasizedText.ds3Id}
        className="style-guide__group"
      >
        <h3>Strong and Emphasized text</h3>
        <figure>
          <figcaption>
            <p>
              For text with strong importance, apply the{' '}
              <span className="ms-style">Strong</span> style.{' '}
              <strong>This is Strong</strong>.
            </p>
            <p>
              For text with emphatic stress, as well as for variable names and
              scientific names, apply the{' '}
              <span className="ms-style">Emphasis</span>.{' '}
              <em>This is Emphasis</em>
            </p>
            <p>
              <span className="ms-style">Strong</span> and{' '}
              <span className="ms-style">Emphasis</span> styles can also be
              added directly with the Bold{' '}
              <strong className="ms-button">B</strong> (for strong) and italic{' '}
              <em className="ms-button">I</em> (for emphasis) button in the{' '}
              <span className="ms-label">Home</span> tab of the ribbon.
            </p>
          </figcaption>
          <img
            src="/images/strong.png"
            alt="apply strong style with bold tool"
          />
        </figure>
        <p className="warning">
          Be sure to only apply the <span className="ms-style">Strong</span> and{' '}
          <span className="ms-style">Emphasis</span> styles when semantically
          appropriate and not for visual purposes alone.
        </p>
      </section>
    );
  }
}

StrongAndEmphasizedText.ds3Id = `ds3:${StrongAndEmphasizedText.name}`;

export default Customize(StrongAndEmphasizedText);
