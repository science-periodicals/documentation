import React from 'react';
import PropTypes from 'prop-types';
import { BemTags } from '@scipe/ui';
import DocumentationLicense from '../license.js';
import { Helmet } from 'react-helmet-async';

export default class Ms3 extends React.PureComponent {
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
        className={bem`ms3 @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>MS3 • sci.pe</title>
        </Helmet>
        <header className={bem`@__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>
            Markdown Standard Scientific Style
          </h1>
          <img
            src="/images/archive-logo.png"
            alt="Markdown Standard Scientific Style badge showing cascadability (1 styleguide capturing enough metadata to express the originality of any journal)"
          />
        </header>

        <section id="overview" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Introduction</h2>

          <p>Markdown support coming soon, please check back.</p>
        </section>
        <DocumentationLicense />
      </article>
    );
  }
}
