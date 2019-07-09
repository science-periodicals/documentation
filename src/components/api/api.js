import React from 'react';
import { BemTags } from '@scipe/ui';
import PropTypes from 'prop-types';
import ApiConcepts from './api-concepts';
import ApiAuthentication from './api-authentication';
import ApiRoutes from './api-routes';
import ApiErrors from './api-errors';
import ApiActionReference from './api-action-reference';
import DocumentationLicense from '../license.js';
import { Helmet } from 'react-helmet-async';

export default class Api extends React.PureComponent {
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
        className={bem`api @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>API • sci.pe</title>
        </Helmet>

        <header className={bem`header @__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>sci.pe API</h1>

          <img src="/images/api-logo.png" alt="sci.pe api logo (hypercube)" />
        </header>

        <ApiConcepts />
        <ApiAuthentication />
        <ApiErrors />

        <ApiRoutes />

        <ApiActionReference />
        <DocumentationLicense />
      </article>
    );
  }
}
