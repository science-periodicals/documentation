import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PaperButtonLink, bemify, TextLogo } from '@scipe/ui';
import { getId } from '@scipe/jsonld';
import Iconoclass from '@scipe/iconoclass';
import RoleBenefitsTabs from './role-benefits-tabs';

export default class PricingPage extends React.Component {
  static propTypes = {
    user: PropTypes.object
  };

  render() {
    const { user } = this.props;
    const bem = bemify('pricing-page');

    const isLoggedIn = getId(user);

    return (
      <div className={bem``}>
        <Helmet>
          <title>Pricing • sci.pe</title>
        </Helmet>

        <header>
          <h1 className="pricing-page__headline">Journal Pricing</h1>
        </header>

        <section>
          <p className="pricing-page__body-text">
            <TextLogo /> is available on the cloud (
            <a href="#explorer">explorer</a> and <a href="#voyager">voyager</a>{' '}
            plans) or as a software package that can be deployed to your own
            servers, <abbr title="Amazon Web Services">AWS</abbr>, Azure, or{' '}
            <abbr title="Google Cloud Platform">GCP</abbr> (
            <a href="#endeavour">endeavour</a> plan).
          </p>
          <p className="pricing-page__body-text">
            Journals on <TextLogo /> set their own business models with custom{' '}
            <abbr title="Article Processing Charges">APCs</abbr> and author
            services sales. Any collected fees may be redistributed back to
            reviewers or editors according to the rules defined by journals in
            smart editorial workflows. <TextLogo /> pricing applies to journals
            only.
          </p>

          <div className="pricing-page__columns">
            <div className="pricing-page__columns-group pricing-page__columns-group--cloud">
              <div className="pricing-page__columns-group__header">
                <h5 className="pricing-page__columns-group__title">
                  Cloud Solutions
                </h5>
              </div>
              <section id="explorer" className="pricing-page__column">
                <div className="pricing-page__column__head">
                  <div className="pricing-page__column__head-row">
                    <h2 className="pricing-page__column-title">Explorer</h2>
                    <div className="pricing-page__price-row">
                      <div className="pricing-page__price">
                        <span className="pricing-page__price__feature">
                          <span className="pricing-page__price__symbol">$</span>
                          99
                        </span>

                        <span className="pricing-page__price__per">
                          <span className="pricing-page__price__slash">/</span>
                          <span className="pricing-page__price__per__top">
                            published
                            <br />
                            submission<FootnoteMark>1</FootnoteMark>
                            <br />
                          </span>
                        </span>
                      </div>
                      <div className="pricing-page__price-row__divider" />
                      <div className="pricing-page__price">
                        <span className="pricing-page__price__feature">
                          <span className="pricing-page__price__symbol">$</span>
                          <span className="pricing-page__price__one">1</span>0
                        </span>

                        <span className="pricing-page__price__per">
                          <span className="pricing-page__price__slash">/</span>
                          <span className="pricing-page__price__per__top">
                            unpublished
                            <br />
                            submission<FootnoteMark>2</FootnoteMark>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-page__sub-text">
                    One time setup fee: $1000
                  </div>
                </div>

                <div className="pricing-page__features">
                  <FeatureList plan="explorer" />
                </div>

                <div className="block__bottom">
                  <GetStartedLink isLoggedIn={isLoggedIn} plan="explorer" />
                </div>
              </section>

              <section id="voyager" className="pricing-page__column">
                <div className="pricing-page__column__head">
                  <div className="pricing-page__column__head-row">
                    <h2 className="pricing-page__column-title">Voyager</h2>
                    <div className="pricing-page__price-row">
                      <div className="pricing-page__price">
                        <a
                          href="mailto:contact@sci.pe"
                          className="pricing-page__price__feature pricing-page__price__feature--quote"
                        >
                          Request Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-page__sub-text">
                    Unlimited submissions - no additional fees
                  </div>
                </div>

                <div className="pricing-page__features">
                  <FeatureList plan="voyager" />
                </div>

                <div className="pricing-page__column__bottom">
                  <GetStartedLink isLoggedIn={isLoggedIn} plan="voyager" />
                </div>
              </section>
            </div>
            <div className="pricing-page__columns-group pricing-page__columns-group--self-hosted">
              <div className="pricing-page__columns-group__header">
                <h5 className="pricing-page__columns-group__title">
                  Self-Hosted
                </h5>
              </div>
              <section id="endeavour" className="pricing-page__column">
                <div className="pricing-page__column__head">
                  <div className="pricing-page__column__head-row">
                    <h2 className="pricing-page__column-title">Endeavour</h2>
                    <div className="pricing-page__price-row">
                      <div className="pricing-page__price">
                        <a
                          href="mailto:contact@sci.pe"
                          className="pricing-page__price__feature pricing-page__price__feature--quote"
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-page__sub-text">
                    The <TextLogo /> application platform for self-hosted
                    solutions
                  </div>
                </div>

                <div className="pricing-page__features">
                  <FeatureList plan="endeavour" />
                </div>

                <div className="pricing-page__column__bottom">
                  <GetStartedLink isLoggedIn={isLoggedIn} plan="endeavour" />
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="pricing-page__professional-services">
          {/* <h2 className="pricing-page__professional-services__title">
            Professional Services & Support
          </h2> */}

          <div className="pricing-page__professional-services__body">
            <div className="pricing-page__professional-services__icon-row">
              <Iconoclass iconName="hypermedia" size="32px" />
            </div>
            <h4 className="pricing-page__professional-services__sub-title">
              Professional Services & Support
            </h4>
            <p className="pricing-page__professional-services__body-intro">
              <TextLogo /> offers professional services and support to customers
              wanting to easily migrate existing journals, create unique user
              experiences, develop a journal brand, or benefit from additional
              editorial and production staff support.
            </p>
            <div className="pricing-page__professional-services__aside">
              <Iconoclass iconName="info" />
              <span>
                The team behind sci.pe is also available for custom projects.
                Visit our{' '}
                <Link to="/get-started/work-with-us">work with us</Link> page
                for more information.
              </span>
            </div>
            <ul className="pricing-page__professional-services__body-list">
              <li>Custom journal homepage design</li>
              <li>Custom icon sets and theme</li>
              <li>Editorial workflow design</li>
              <li>Dedicated editorial office and/or production team</li>
              <li>Journal migration (content, data and settings)</li>
              <li>Dedicated support</li>
            </ul>
            <div className="pricing-page__contact-row">
              <PaperButtonLink href="mailto:contact@sci.pe">
                Contact us
              </PaperButtonLink>
            </div>
          </div>
        </section>

        <section className={bem`__benefits`}>
          <h2 className={bem`__benefits-title`}>
            Who benefits from <TextLogo />?
          </h2>

          <div className={bem`__benefits-tabs`}>
            <RoleBenefitsTabs />
          </div>
        </section>

        <div className="pricing-page__footnotes">
          <Footnote mark="1">
            Published submissions are charged at the time when they are
            scheduled for publication. Fees (all or a portion) can be paid for
            by the authors or the journal.
          </Footnote>
          <Footnote mark="2">
            Unpublished submissions are only charged upon author completion of
            the first stage of a smart editorial workflow. Fees (all or a
            portion) can be paid for by the authors or the journal.
          </Footnote>
          <Footnote mark="3">
            A commercial license is required if the software is used for
            commercial purposes or non open access journals.{' '}
            <a href="mailto:contact@sci.pe">Contact us</a> to learn which
            license applies to your use case.
          </Footnote>
        </div>
      </div>
    );
  }
}

function FeatureList({ plan = 'explorer' }) {
  return (
    <ul className="pricing-page__features__list">
      {plan === 'endeavour' ? (
        <Fragment>
          <li className="pricing-page__features__list-item">
            Access to <TextLogo /> source code (
            <a href="http://www.gnu.org/licenses/agpl-3.0.html">
              GNU AGPL v3.0
            </a>
            ) and exception for commercial use of the sofware
            <FootnoteMark>3</FootnoteMark>
          </li>
        </Fragment>
      ) : (
        <Fragment>
          <li className="pricing-page__features__list-item">
            Premium onboarding support
          </li>
          <li className="pricing-page__features__list-item">
            Peer review with smart editorial workflows
          </li>
          <li className="pricing-page__features__list-item">
            Journal homepage
          </li>
          <li className="pricing-page__features__list-item">
            Hosting & <abbr title="Search Engine Optimization">SEO</abbr>
          </li>
          <li className="pricing-page__features__list-item">
            <abbr title="Application programming interface">API</abbr> access
          </li>
        </Fragment>
      )}

      {plan === 'explorer' ? (
        <li className="pricing-page__features__list-item">
          70% of <abbr title="Article Processing Charges">APCs</abbr> and author
          services sales
        </li>
      ) : (
        <Fragment>
          <li className="pricing-page__features__list-item">
            Access to development issue tracker and priority feature requests
          </li>
          <li className="pricing-page__features__list-item">
            100% of <abbr title="Article Processing Charges">APCs</abbr> and
            author services sales
          </li>
        </Fragment>
      )}
    </ul>
  );
}
FeatureList.propTypes = {
  plan: PropTypes.oneOf(['explorer', 'voyager', 'endeavour']).isRequired
};

function FootnoteMark({ children }) {
  return (
    <a href={`#footnote-${children}`} className="pricing-page__super">
      {children}
    </a>
  );
}
FootnoteMark.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

function Footnote({ mark, children }) {
  return (
    <div className="pricing-page__footnotes__footnote">
      <a name={`footnote-${mark}`}>{mark}.</a>
      {'\u00A0'}
      {children}
    </div>
  );
}
Footnote.propTypes = {
  mark: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ])
};

function GetStartedLink({ isLoggedIn, plan = 'explorer' }) {
  const href = isLoggedIn
    ? '/settings/organization'
    : `/register?next=${encodeURIComponent(`/settings?plan=${plan}`)}`;

  return (
    <div className="pricing-page__register">
      {plan === 'endeavour' ? (
        <Fragment>
          <PaperButtonLink to="/get-started/install">Start now</PaperButtonLink>
          <span className="pricing-page__register-subtext">
            Install <TextLogo /> on your own infrastructure
          </span>
        </Fragment>
      ) : (
        <Fragment>
          <PaperButtonLink href={href}>Setup Your Journal Now</PaperButtonLink>
          <span className="pricing-page__register-subtext">{`You won't be charged until the first author submission.`}</span>
        </Fragment>
      )}
    </div>
  );
}
GetStartedLink.propTypes = {
  isLoggedIn: PropTypes.bool,
  plan: PropTypes.oneOf(['explorer', 'voyager', 'endeavour']).isRequired
};
