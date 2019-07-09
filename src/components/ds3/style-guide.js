import React from 'react';
import PropTypes from 'prop-types';
import { arrayify, getId } from '@scipe/jsonld';
import * as Sections from './sections';
import createStyleGuide from '../../utils/create-style-guide';
import { DS3_PARTS } from '../../constants';

// TODO In footnote section list citation caveat (copy and paste to document first)
// TODO uiOnly flag ?
// TODO file extension format

class StyleGuide extends React.Component {
  constructor(props) {
    super(props);
    this.getElement = this.getElement.bind(this);
  }

  getElement(part) {
    const { styleGuide } = this.props;
    const id = getId(part);
    return React.createElement(Sections[id.replace(/^ds3:/, '')], {
      key: id,
      styleGuide,
      part
    });
  }

  render() {
    const { styleGuide } = this.props;

    return (
      <section id="style-guide" className="ds3 style-guide style-guide__group">
        <h2>Style Guide</h2>

        <p>
          This style guide (referred to as "DOCX Standard Scientific Style" or{' '}
          <abbr title="DOCX Standard Scientific Style">DS3</abbr>) encourages
          authors not to worry about the appearance of their document and
          instead to concentrate on giving it structure and making it
          accessible. The ultimate goal is to help authors to produce scholarly
          articles optimized for accessiblity, discoverability, and long-term
          preservation.
        </p>

        <p>
          <abbr title="DOCX Standard Scientific Style">DS3</abbr> is written so
          that readers unfamiliar with Microsoft Word&apos;s advanced features
          (such as styles, hyperlinks, multi-part figures, bookmarks, and
          cross-references) can follow this guide without having to consult any
          other source of documentation. The best practices recommended in this
          style guide apply to most documents written with Microsoft Word and
          may already be familiar to the reader.
        </p>

        {arrayify(styleGuide.hasPart || DS3_PARTS)
          .filter(part => {
            const id = getId(part);
            return (
              id && id.startsWith('ds3:') && id.replace(/^ds3:/, '') in Sections
            );
          })
          .map(part => this.getElement(part))}
      </section>
    );
  }
}

StyleGuide.defaultProps = {
  onUpdate: () => {},
  styleGuide: createStyleGuide()
};

StyleGuide.propTypes = {
  styleGuide: PropTypes.object
};

export default StyleGuide;
