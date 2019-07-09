import React from 'react';
import PropTypes from 'prop-types';
import { BemTags } from '@scipe/ui';
import hljs from 'highlight.js';

export default class JsonldExample extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    language: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    children: PropTypes.any // caption
  };

  static defaultProps = {
    root: true,
    treeView: true
  };

  render() {
    const bem = new BemTags('@sa', '@documentation');
    const { children, id, code, language } = this.props;

    const highlighted = hljs.highlight(language, code);

    return (
      <figure id={id} className={bem`code-example`}>
        <pre>
          <code
            className={'hljs ' + highlighted.language}
            dangerouslySetInnerHTML={{ __html: highlighted.value }}
          />
        </pre>

        {children && (
          <figcaption className={bem`@__default-ui-type--caption`}>
            {children}
          </figcaption>
        )}
      </figure>
    );
  }
}
