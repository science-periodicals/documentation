import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, BemTags, TextLogo } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import DocumentationLicense from '../license.js';

const bem = new BemTags('@sa', '@documentation');

export default class PublicationTypesAndStyleGuides extends React.PureComponent {
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
    return (
      <article
        ref={this.rootRef}
        className={bem`publication-types-and-style-guides @__article @__default-sans-body-type`}
      >
        <Helmet>
          <title>Publication Types and Style Guides • sci.pe</title>
        </Helmet>

        <header className={bem`@__header`}>
          <h1 className={bem`@__default-ui-type--display-1`}>
            Publication types and style guides
          </h1>
          <img src="/images/authors-logo.png" alt="issue guide logo" />
        </header>

        <section id="introduction" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Introduction</h2>
          <p>
            Journals on <TextLogo /> can setup arbitrary{' '}
            <a href="#publication-types">publication types</a> (e.g., research,
            review, or observation publication types). Each type can be mapped
            to a{' '}
            <Link to="/get-started/workflows">smart editorial workflow</Link>{' '}
            with its own submission guidelines.{' '}
          </p>
          <p>
            Submission guidelines only focus on the semantic of each section
            (e.g., describing what is required for an impact statement versus a
            scientific abstract) and are unique to each journal publication
            type. All <a href="#style-guides">formatting and styling</a> of
            submissions (e.g., how to format author lists and add figures and
            tables) can then be shared across journal publication types.{' '}
          </p>
          <p>
            This document provides an overview of{' '}
            <a href="#publication-types">publication types</a> for journals on{' '}
            <TextLogo /> and <a href="#style-guides">style guides</a> for
            formatting and styling any submissions in{' '}
            <Link to="/get-started/pdf">PDF</Link>,{' '}
            <Link to="/get-started/ds3">Microsoft Word</Link>, and{' '}
            <Link to="/get-started/ms3">Markdown</Link>.
          </p>
        </section>

        <section id="publication-types" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>
            Publication types
          </h2>
          <p>
            Journal publication types on <TextLogo /> are formally defined by
            the semantics of the required sections for a given type (e.g., an
            research article publication type may require an abstract while an
            editorial publication type may not).
          </p>
          <p>
            Each publication type may have one or more available editorial
            workflows associated with it. Authors submitting to a journal must
            select the publication type of their submission (e.g., research
            article, review, observation or editorial), and the desired workflow
            (e.g., single blind vs double blind review) if the type offers more
            than one editorial workflow.{' '}
          </p>
          <p>
            Journal publication type are available from the journal homepage
            (for more information on setting up publication types, see the{' '}
            <Link to="/get-started/editor-user-guide#workflows-and-types">
              editor user guide
            </Link>
            ).
          </p>
          <figure className={bem`@__figure`}>
            <figcaption className={bem`@__figure-caption`}>
              <p>
                Example of a journal publication type definition for a review
                article.
              </p>
            </figcaption>
            <img
              src="/images/publication-types.png"
              alt="Journal publication type definition for a review article as viewed from the journal homepage"
              className={bem`@__figure-image @--screen-shot`}
            />
          </figure>
        </section>

        <section id="style-guides" className={bem`@__section`}>
          <h2 className={bem`@__default-ui-type--headline`}>Style guides</h2>
          <p>
            The following formats can be submitted to journals on <TextLogo />:
          </p>
          <ul className={bem`@__list`}>
            <li>
              <Link to="/get-started/pdf">PDF</Link>,
            </li>
            <li>
              <Link to="/get-started/ds3">DS3</Link> (Microsoft Word DOCX
              following DOCX Standard Style), or
            </li>
            <li>
              <Link to="/get-started/ms3">MS3</Link> (Markdown following
              Markdown Standard Scientific Style - <em>Coming soon</em>)
            </li>
          </ul>{' '}
          <p>
            The style guides below are provided to assist authors and
            typesetters in formatting submissions of any publication type. The
            style guides require no advanced knowledge to follow and can be used
            to help produce scholarly articles optimized for accessibility,
            discoverability, and long-term preservation.{' '}
          </p>
          <ul className={bem`__doc-list @__clear-list-styles `}>
            <li>
              <Card className={bem`__card --pdf`}>
                <div className={bem`__card-header`}>
                  <h2 className={bem`__title @__default-ui-type--headline`}>
                    <Link to={{ pathname: `/get-started/pdf` }}>
                      PDF submissions
                    </Link>
                  </h2>
                  <Iconoclass
                    className={bem`__card-icon`}
                    iconName="filePdf"
                    round={true}
                    size="4rem"
                  />
                </div>
              </Card>
            </li>

            <li>
              <Card className={bem`__card --ds3`}>
                <div className={bem`__card-header`}>
                  <h2 className={bem`__title @__default-ui-type--headline`}>
                    <Link to={{ pathname: `../get-started/ds3` }}>
                      DOCX Standard Scientific Style
                    </Link>
                  </h2>
                  <Iconoclass
                    className={bem`__card-icon`}
                    iconName="ds3"
                    round={true}
                    size="4rem"
                  />
                </div>
              </Card>
            </li>

            <li>
              <Card className={bem`__card --ms3`}>
                <div className={bem`__card-header`}>
                  <h2 className={bem`__title @__default-ui-type--headline`}>
                    <Link to={{ pathname: `/get-started/ms3` }}>
                      Markdown Standard Scientific Style
                    </Link>
                  </h2>
                  <Iconoclass
                    className={bem`__card-icon`}
                    iconName="ms3"
                    round={true}
                    size="4rem"
                  />
                </div>
              </Card>
            </li>
          </ul>
        </section>
        <DocumentationLicense />
      </article>
    );
  }
}
