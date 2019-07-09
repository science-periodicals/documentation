import React from 'react';
import PropTypes from 'prop-types';
import { BemTags, TextLogo } from '@scipe/ui';
import Structure from './structure';
import Manifest from './manifest';
import Example from './example';
import Processing from './processing';
import DocumentationLicense from '../license.js';
import Markup from '../markup';
import { Helmet } from 'react-helmet-async';

export default class Archive extends React.PureComponent {
  static propTypes = {
    $content: PropTypes.object,
    onUpdate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    if (this.rootRef.current) {
      this.props.onUpdate(this.rootRef.current);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.rootRef.current && prevProps.$content !== this.props.$content) {
      this.props.onUpdate(this.rootRef.current);
    }
  }

  render() {
    const bem = new BemTags('@sa', '@documentation');

    return (
      <article
        ref={this.rootRef}
        className={bem`archive @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>Archive format and markup • sci.pe</title>
        </Helmet>
        <header className={bem`@__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>
            sci.pe archive format and markup
          </h1>

          <div className={bem`__markup`}>
            <Markup />
          </div>
        </header>

        <section id="intro" className={bem`__intro @__section`}>
          <p>
            This document exposes the format used by <TextLogo /> to represent
            and archive scholarly content. It also provides a reference for
            authors wishing to submit rich scholarly content using web formats
            or for third party tools aiming to import/export content from/to{' '}
            <TextLogo />. <TextLogo /> archive format relies exclusively on
            standardized open web formats (
            <a href="https://www.w3.org/TR/html5/">HTML</a>,{' '}
            <a href="https://www.w3.org/TR/json-ld/">JSON-LD</a>,{' '}
            <a href="https://www.w3.org/TR/rdfa-syntax/">RDFa</a>,{' '}
            <a href="https://www.w3.org/TR/rdf-schema/">RDFS</a>) and{' '}
            <a href="http://schema.org">schema.org</a>. Readers not familiar
            with those technologies should refer to the latest version of the
            W3C{' '}
            <a href="https://www.w3.org/TR/rdf11-primer/">
              RDF primer document
            </a>{' '}
            and the <a href="http://schema.org">schema.org documentation</a>.
          </p>
        </section>
        <Structure />
        <Manifest />
        <Example />
        <Processing />
        <DocumentationLicense />
      </article>
    );
  }
}
