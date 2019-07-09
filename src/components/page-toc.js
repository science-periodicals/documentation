import React from 'react';
import PropTypes from 'prop-types';
import { DomToc } from '@scipe/ui';

export default class PageToc extends React.Component {
  render() {
    const { $content } = this.props;

    return (
      <DomToc
        $content={$content}
        expansionOnLevels={[2, 3]}
        defaultExpanded={false}
      />
    );
  }
}

PageToc.propTypes = {
  $content: PropTypes.any
};
