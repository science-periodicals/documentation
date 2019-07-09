import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bemify, Card, TextLogo } from '@scipe/ui';
import Iconoclass from '@scipe/iconoclass';
import LayersGraphic from './layers-graphic';
import ReplicationAnim from './replication-anim';
import Markup from './markup';
import { Element } from 'react-scroll';

export default class FeaturePage extends React.Component {
  static propTypes = {
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      replicationFigWidth: 0,
      replicationFigHeight: 0
    };
    this.handleResize = this.handleResize.bind(this);
    this.replicationFig = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('load', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resizer', this.handleResize);
    window.removeEventListener('load', this.handleResize);
  }

  handleResize() {
    if (!this.replicationFig.current) {
      return;
    }
    if (
      (this.replicationFig.current.clientWidth != null &&
        this.replicationFig.current.clientWidth !==
          this.state.replicationFigWidth) ||
      (this.replicationFig.current.clientHeight != null &&
        this.replicationFig.current.clientHeight !==
          this.state.replicationFigHeight)
    ) {
      this.setState({
        replicationFigWidth: this.replicationFig.current.clientWidth,
        replicationFigHeight: this.replicationFig.current.clientHeight
      });
    }
  }

  render() {
    const bem = bemify('feature-page');

    return (
      <div className={bem``}>
        <Helmet>
          <title>Features • sci.pe</title>
        </Helmet>

        <section className={bem`__section __section--intro`}>
          <Element name="intro-target" className={bem`__intro`}>
            <header className={bem`__header`}>
              {/* <img
                  className={bem`__science-logo`}
                  src="images/logo_scienceai_black_148x50.svg"
                  width="148px"
                  height="50px"
                  /> */}
              <div className={bem`__header`}>
                <h1 className={bem`__title`}>Features</h1>
              </div>
              <LayersGraphic />
            </header>
          </Element>
        </section>

        <section>
          {/* App suite */}
          <Card className={bem`__section`}>
            <Element name="products__target" className="element">
              <header className={bem`__section__header`}>
                <img
                  className={bem`__section__header__icon`}
                  src="/images/layers-icons_apps-circle.svg"
                  alt="scientific knowledge graph icon"
                />
                <h2 className={bem`__section__title`}>App suite</h2>
                <div className={bem`__section__sub-title`}>
                  The New, All Inclusive, Publishing Experience
                </div>
              </header>
            </Element>

            <div className={bem`__body`}>
              <div className={bem`__product-grid`}>
                <div className={bem`__product-grid__item-group`}>
                  <div className={bem`__product-grid__item`}>
                    <Iconoclass
                      iconName={'publisher'}
                      className={bem`__product-icon`}
                      size="4rem"
                    />
                    <h4 className={bem`__product-title`}>Rich Submissions</h4>
                  </div>
                  <div className={bem`__product-grid__item`}>
                    <Iconoclass
                      iconName={'dispatcher'}
                      className={bem`__product-icon`}
                      size="4rem"
                    />
                    <h4 className={bem`__product-title`}>
                      Smart Editorial Workflows
                    </h4>
                  </div>
                </div>
                <div className={bem`__product-grid__item-group`}>
                  <div className={bem`__product-grid__item`}>
                    <Iconoclass
                      iconName={'sifter'}
                      className={bem`__product-icon`}
                      size="4rem"
                    />
                    <h4 className={bem`__product-title`}>
                      Integrated Monetization
                    </h4>
                  </div>
                  <div className={bem`__product-grid__item`}>
                    <Iconoclass
                      iconName={'reader'}
                      className={bem`__product-icon`}
                      size="4rem"
                    />
                    <h4 className={bem`__product-title`}>
                      Industry Grade Hosting
                    </h4>
                  </div>
                </div>
              </div>

              <div className={bem`__feature__row`}>
                <figure className={bem`__feature__figure`}>
                  <img
                    src="/images_editorial/create-journals-01.png"
                    alt="workflow"
                  />
                </figure>
                <section className={bem`__feature__copy`}>
                  <h2 className={bem`__feature__title`}>
                    Easy and Flexible Journal Setup with an All Inclusive
                    Solution
                  </h2>
                  <p className={bem`__feature__body`}>
                    <TextLogo /> gives you everything you need to set up a
                    journal in minutes using a modern user interface.{' '}
                    <Link to="/get-started/workflows#anonymity-settings">
                      Set up any peer review model
                    </Link>{' '}
                    (single blind, double blind, triple blind, open, and
                    beyond),{' '}
                    <Link to="/get-started/workflows#creating-editorial-workflows">
                      create custom editorial workflows
                    </Link>{' '}
                    (add custom tasks, deadlines, and questions), define{' '}
                    <a href="/get-started/publication-types-and-style-guides">
                      publication types
                    </a>{' '}
                    and start accepting submissions right away. <TextLogo />{' '}
                    also lets you{' '}
                    <Link to="/get-started/editor-user-guide#organizing-issues">
                      organize accepted submissions
                    </Link>{' '}
                    (e.g., featured content, publication issues) and publish{' '}
                    <Link to="/get-started/editor-user-guide#rfas">
                      requests for new articles
                    </Link>
                    . Journals on <TextLogo /> come with a modern homepage,
                    article hosting and a submission management system so you
                    don‘t need to rely on third party services or pay for
                    integration costs.
                  </p>
                </section>
              </div>

              <div className={bem`__feature__row`}>
                <figure className={bem`__feature__figure`}>
                  <img
                    src="/images_editorial/publish-rich-content-01.png"
                    alt="detail of an annotation"
                  />
                </figure>
                <section className={bem`__feature__copy`}>
                  <h2 className={bem`__feature__title`}>
                    Formless Submission, Rigorous Peer Review
                  </h2>
                  <p className={bem`__feature__body`}>
                    <TextLogo /> lets you capture any research material (e.g.,
                    manuscripts, data, code, media) with a simple{' '}
                    <Link to="/get-started/author-and-reviewer-user-guide#start-submission">
                      formless submission experience
                    </Link>{' '}
                    and ensures that they are linked (e.g., the data and code
                    required to reproduce a figure). <TextLogo /> provides a
                    powerful peer review system with support for{' '}
                    <Link to="/get-started/author-and-reviewer-user-guide#working-with-annotations">
                      annotations
                    </Link>
                    , privacy sensitive comments and direct access to submission
                    artifacts. <TextLogo /> also provides all the options
                    required to publish any part of the editorial workflow
                    (reviews, decision, comments and more) involved with
                    articles while respecting{' '}
                    <Link to="/get-started/workflows#post-publication-anonymity">
                      adequate privacy constraints
                    </Link>
                    .
                  </p>
                </section>
              </div>

              <div className={bem`__feature__row`}>
                <figure className={bem`__feature__figure`}>
                  <img
                    src="/images_editorial/integrated-payments-03.png"
                    alt="Integrated Payment Platform"
                  />
                </figure>
                <section className={bem`__feature__copy`}>
                  <h2 className={bem`__feature__title`}>
                    Built-in Payments, Remunerations, and Author Services
                  </h2>
                  <p className={bem`__feature__body`}>
                    <TextLogo /> comes with payments and author services
                    integrations built in. Create any custom{' '}
                    <Link to="/get-started/workflows#business-model">
                      open access business model
                    </Link>{' '}
                    (e.g., submission fees, article processing charges, or other
                    publication fees), offer any{' '}
                    <Link to="/get-started/editor-user-guide#providing-author-services">
                      author services
                    </Link>
                    , or decide to remunerate reviewers or editors without any
                    additional work required.
                  </p>
                </section>
              </div>
            </div>
          </Card>

          {/* --------- API and Data -------- */}

          <Card className={bem`__section`}>
            <Element name="services__target">
              <header className={bem`__section__header`}>
                <img
                  className={bem`__section__header__icon`}
                  src="/images/layers-icons_services-circle.svg"
                  alt="intelligent submissions icon"
                />
                <br />
                <h2 className={bem`__section__title`}>API, Data and Hosting</h2>
                <div className={bem`__section__sub-title`}>
                  Unrivaled control and customization.
                </div>
              </header>
            </Element>

            <div className={bem`__body`}>
              <div className={bem`__feature__row`}>
                <figure className={bem`__feature__figure`}>
                  <img
                    src="/images_editorial/hypermedia-01.png"
                    alt="hypercubes of hypermedia API"
                  />
                </figure>
                <section className={bem`__feature__copy`}>
                  <h2 className={bem`__feature__title`}>
                    Powerful API, Zero Lock-in
                  </h2>
                  <p className={bem`__feature__body`}>
                    <TextLogo /> gives you full programmatic control of your
                    publishing operation from submission to publication via a
                    powerful <Link to="/get-started/api">hypermedia API</Link>{' '}
                    and <Link to="/get-started/archive">data model</Link>.
                    Manage user identities and roles, set up journals in bulk,
                    design editorial workflows, process payments, and access and
                    search your data. With strict adhesion to web standards,{' '}
                    <TextLogo /> guarantees zero lock-in and complete control
                    over your data and processes.
                  </p>
                </section>
              </div>

              <div className={bem`__feature__row`}>
                <figure className={bem`__feature__figure`}>
                  <img
                    src="/images_editorial/build-business-01.png"
                    alt="format conversion"
                  />
                </figure>
                <section className={bem`__feature__copy`}>
                  <h2 className={bem`__feature__title`}>
                    Reactive Data and Analytics
                  </h2>
                  <p className={bem`__feature__body`}>
                    <TextLogo /> monitors all data changes and user actions,
                    from submission to publication. Changes are exposed through
                    a <Link to="/get-started/api#changes-feed">data feed</Link>,
                    letting you react in real time and build powerful
                    notifications, alerts, or integrations.
                  </p>
                </section>
              </div>

              <div className={bem`__feature__row`}>
                <figure
                  className={bem`__feature__figure`}
                  ref={this.replicationFig}
                >
                  <ReplicationAnim
                    width={this.state.replicationFigWidth}
                    height={this.state.replicationFigHeight}
                  />
                  <img
                    onLoad={this.handleResize}
                    src="/images_editorial/hosting-01.png"
                    alt="concept hosting"
                  />
                </figure>
                <section className={bem`__feature__copy`}>
                  <h2 className={bem`__feature__title`}>
                    Offline-first Hosting
                  </h2>
                  <p className={bem`__feature__body`}>
                    <TextLogo /> allows your data to flow seamlessly between
                    servers and web browsers, letting you offer an offline-first
                    user-experience while maintaining the high performance and
                    strong reliability of a traditional hosting solution.
                  </p>
                </section>
              </div>
            </div>
          </Card>

          {/* --------- Standard compliant infrastructure -------- */}

          <Card className={bem`__section`} id="open-standards">
            <Element name="open-standards__target">
              <header className={bem`__section__header`}>
                <img
                  className={bem`__section__header__icon`}
                  src="/images/layers-icons_open-circle.svg"
                  alt="open web standards icon"
                />
                <br />
                <h2 className={bem`__section__title`}>
                  Standard Compliant Infrastructure
                </h2>
                <div className={bem`__section__sub-title`}>
                  Interoperable, accessible, low-cost, web optimized.
                </div>
              </header>
            </Element>

            <div className={bem`__features`}>
              <div className={bem`__feature__row`}>
                <figure className={bem`__feature__figure`}>
                  <img
                    src="/images_editorial/doc-transformation-01.png"
                    alt="scale up area of the graph"
                  />
                </figure>
                <section className={bem`__feature__copy`}>
                  <h2 className={bem`__feature__title`}>Built for the web</h2>
                  <p className={bem`__feature__body`}>
                    <TextLogo /> lets you reliably transform author inputs
                    (e.g., Microsoft Word or Excel documents, images, audio,
                    video, dataset, code) into linked, structured data and
                    production-quality HTML /{' '}
                    <a href="https://www.w3.org/TR/rdfa-primer/">RDFa</a> /{' '}
                    <a href="https://json-ld.org/">JSON-LD</a> at submission
                    time. This allows <TextLogo /> to operate on production
                    quality content from submission to production – greatly
                    simplifying the publishing pipeline and enhancing the user
                    experience while reducing operational costs.
                  </p>
                </section>
              </div>

              <div className={bem`__feature__row`}>
                <figure className={bem`__feature__figure`}>
                  <img
                    src="/images_editorial/search-engines-01.png"
                    alt="rich snippets"
                  />
                </figure>
                <section className={bem`__feature__copy`}>
                  <h2 className={bem`__feature__title`}>
                    Optimized for Search Engines
                  </h2>
                  <p className={bem`__feature__body`}>
                    All content on <TextLogo /> is published with{' '}
                    <a href="http://schema.org">schema.org</a> markup, which is
                    understood and used by all the major search engines (Google,
                    Yahoo, Yandex, Bing) to{' '}
                    <a href="https://developers.google.com/search/docs/guides/search-features">
                      improve search results, create richer search experiences,{' '}
                    </a>
                    and{' '}
                    <Link to="/get-started/author-and-reviewer-user-guide#benefits">
                      increase the impact of science
                    </Link>
                    .
                  </p>
                </section>
              </div>

              <div className={bem`__feature__row`}>
                <figure className={bem`__feature__figure`}>
                  <Markup />
                </figure>
                <section className={bem`__feature__copy`}>
                  <h2 className={bem`__feature__title`}>
                    Natively Interoperable
                  </h2>
                  <p className={bem`__feature__body`}>
                    <TextLogo /> uncompromisingly adheres to W3C standards and{' '}
                    <Link to="/get-started/archive">high quality markup</Link>.
                    This ensures that your content is interoperable and
                    accessible to all. It also allows your publications to join
                    the Internet Archive, where more than{' '}
                    <a href="https://archive.org/web/">350 Billion websites</a>{' '}
                    are already part of humanity’s common record.
                  </p>
                </section>
              </div>
            </div>
          </Card>
        </section>
      </div>
    );
  }
}
