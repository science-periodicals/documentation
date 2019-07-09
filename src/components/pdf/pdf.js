import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { BemTags, TextLogo } from '@scipe/ui';

import DocumentationLicense from '../license.js';
import Info from '../info';

export default class Pdf extends React.PureComponent {
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
        className={bem`pdf @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>PDF • sci.pe</title>
        </Helmet>
        <header className={bem`@__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>
            PDF submissions
          </h1>
          <img src="/images/authors-logo.png" alt="PDF logo" />
        </header>

        <section id="overview" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Introduction</h2>
          <p>
            <TextLogo /> enables authors to drag and drop a single PDF file to
            submit to a journal. This guide provides recommendations for authors
            preparing a PDF submission.
          </p>
        </section>
        <section id="guidelines" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Preparing PDF submissions
          </h2>
          <p>
            The only requirement for PDF submissions is to include all resources
            and metadata in a single PDF file. This includes:
          </p>
          <ul className={bem`@__list`}>
            <li>Figures, tables, code snippets, and other resources,</li>
            <li>
              Links to any external resources that cannot be embedded (e.g.,
              large datasets hosted elsewhere or code repositories),
            </li>
            <li>
              Author information (including full names, affilliations, and
              contributions),
            </li>
            <li>
              Funding sources (including funder name and location, recipient,
              and funding target, e.g., whether the funding was awarded for the
              work, part of the work, or an individual),
            </li>
            <li>Disclosures,</li>
            <li>
              Full reference list (including DOIs or other identifying URLs),
              and
            </li>
            <li>Any other supporting material.</li>
          </ul>

          <Info className={bem`@__info-panel`}>
            <header id="conversion">
              Why is it important to include all data and metadata in the PDF?
            </header>
            <p>
              In order to provide authors with formless submission, in-context
              peer review, and production quality previews, PDF submissions are
              converted to a standard scientific style (either{' '}
              <Link to="/get-started/ds3">DOCX Standard Scientific Style</Link>{' '}
              or Markdown{' '}
              <Link to="/get-started/ms3">
                Markdown Standard Scientific Style
              </Link>
              ). Including all data and metadata in the submitted PDF makes the
              conversion process faster and results in richer, web-first
              content.
            </p>
          </Info>
        </section>

        <section id="anonymity" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Anonymizing author information
          </h2>
          <p>
            If <strong>author anonymity</strong> is required for the journal
            publication type (e.g., double blind review), authors are
            responsible for preparing an anonymized copy of the submission. This
            includes temporarily removing:{' '}
          </p>
          <ul className={bem`@__list`}>
            <li>Author names and affiliations, and </li>
            <li>
              Any sections with identifying information such as funding,
              disclosures, or acknowledgements.
            </li>
          </ul>
          <p>
            Authors must upload the anonymized PDF at submission. Authors will
            later be prompted to upload the non-anonymized PDF during
            typesetting (for conversion). Only the typesetter will be able to
            view author identity. Anonymity will be preserved for reviewers,
            editors, and public readers as required by the workflow, even after
            conversion.{' '}
          </p>
        </section>
        <DocumentationLicense />
      </article>
    );
  }
}
