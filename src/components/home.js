import React, { Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { getId } from '@scipe/jsonld';
import {
  Header,
  Footer,
  AppLayout,
  AppLayoutHeader,
  AppLayoutLeft,
  AppLayoutMiddle,
  AppLayoutRight,
  AppLayoutFooter,
  ResponsiveHeaderItem,
  ResponsiveHeaderMenu,
  withScreenDim,
  BemTags,
  LinkInterceptor,
  MenuItem,
  CSS_TABLET
} from '@scipe/ui';
import SplashPage from './splash-page';
import Page from './page';
import PageToc from './page-toc';
import PricingPage from './pricing-page';
import HireUsPage from './hire-us-page';
import VisionPage from './vision-page';
import FeaturePage from './feature-page';
import GetStartedLinks from './get-started-links';
import Legal from './legal';

const bem = BemTags('@sa');

class Home extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.any,
    user: PropTypes.object,
    legal: PropTypes.shape({
      terms: PropTypes.shape({
        '@type': PropTypes.string,
        '@value': PropTypes.string
      }),
      privacy: PropTypes.shape({
        '@type': PropTypes.string,
        '@value': PropTypes.string
      })
    }).isRequired,
    snippets: PropTypes.object,
    screenWidth: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      $content: null,
      leftExpanded: false,
      isPromoDismissed: false
    };
    this.isMobile = false; // needed to autoclose toc on click on mobile
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.handleMql = this.handleMql.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  componentDidMount() {
    this.mql = window.matchMedia('(min-width: 769px)');
    this.isMobile = !this.mql.matches;
    if (this.mql.matches) {
      this.setState({ leftExpanded: true });
    }
    this.mql.addListener(this.handleMql);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location !== prevProps.location &&
      !this.props.location.hash
    ) {
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    this.mql.removeListener(this.handleMql);
  }

  handleMql(mql) {
    const nextIsMobile = !mql.matches;
    // close side bar when we cross mobile media query
    if (this.state.leftExpanded && !this.isMobile && nextIsMobile) {
      // desktop -> mobile, we close
      this.setState({ leftExpanded: false });
    } else if (
      // mobile -> desktop, we open
      !this.state.leftExpanded &&
      this.isMobile &&
      !nextIsMobile
    ) {
      this.setState({ leftExpanded: true });
    }
    this.isMobile = nextIsMobile;
  }

  handleLink(e, $a, type, resourceId, pathname) {
    const { history, location } = this.props;
    if ($a) {
      const href = $a.getAttribute('href');
      let selector;
      if (href && href.startsWith('#') && href.length > 1) {
        selector = href.replace(/:/g, '\\:');
      }
      if (
        selector &&
        this.state.$content &&
        this.state.$content.querySelector(selector)
      ) {
        const $target = document.querySelector(selector);
        if (this.isMobile) {
          this.setState({ leftExpanded: false });
        }
        if ($target) {
          e.preventDefault();
          const rect = $target.getBoundingClientRect();
          // compensate for header
          window.scroll({
            top: window.pageYOffset + rect.top - 56,
            behavior: 'smooth'
          });
          // change URL
          history.push({
            pathname: location.pahtname,
            search: location.search,
            hash: href
          });
        }
      }
    }
  }

  handleUpdate($content) {
    this.setState({ $content });
  }

  handleHamburgerClick() {
    this.setState({
      leftExpanded: !this.state.leftExpanded,
      rightExpanded: !this.state.leftExpanded
    });
  }

  handleDismiss = () => {
    this.setState({
      isPromoDismissed: true
    });
  };

  render() {
    const {
      match,
      match: { params: { slug } } = {},
      screenWidth,
      user,
      legal,
      snippets
    } = this.props;

    const { isPromoDismissed, leftExpanded, $content } = this.state;
    const isLoggedIn = !!getId(user);

    const crumbs = [
      // {
      //   key: 'documentation',
      //   children: 'Get started',
      //   to: '/get-started'
      // }
    ];
    if (slug) {
      crumbs.push({
        key: slug,
        children: slug,
        to: match.url
      });
    }

    return (
      <div className={bem`home documentation @__default-ui-type`}>
        <LinkInterceptor onLink={this.handleLink}>
          <AppLayout
            leftExpanded={
              slug !== undefined &&
              slug !== 'pricing' &&
              slug !== 'quick-start' &&
              slug !== 'features' &&
              slug !== 'vision' &&
              leftExpanded
            }
            rightExpanded={
              !slug || (slug ? true : false) /*&& slug !== 'pricing'*/
            }
          >
            <AppLayoutHeader>
              <Header
                logoLink={isLoggedIn ? { href: '/' } : { to: '/get-started' }}
                homeLink={{ to: '/get-started' }}
                userBadge={isLoggedIn ? { userId: getId(user) } : undefined}
                crumbs={crumbs}
                showHamburger={
                  slug &&
                  slug !== 'pricing' &&
                  slug !== 'terms' &&
                  slug !== 'privacy' &&
                  slug !== 'quick-start' &&
                  slug !== 'features' &&
                  slug !== 'vision'
                    ? true
                    : false
                }
                onClickHamburger={this.handleHamburgerClick}
              >
                <ResponsiveHeaderItem>
                  <Link className="header-item-link" to="/get-started/vision">
                    Vision
                  </Link>
                </ResponsiveHeaderItem>
                <ResponsiveHeaderItem>
                  <Link className="header-item-link" to="/get-started/features">
                    Features
                  </Link>
                </ResponsiveHeaderItem>
                <ResponsiveHeaderItem>
                  <Link className="header-item-link" to="/get-started/pricing">
                    Pricing
                  </Link>
                </ResponsiveHeaderItem>
                <ResponsiveHeaderItem>
                  <a
                    href="https://research.sci.pe/"
                    className="header-item-link"
                    to="/get-started/vision"
                  >
                    Blog
                  </a>
                </ResponsiveHeaderItem>

                <ResponsiveHeaderMenu icon="logoSciAlt" align="right">
                  <MenuItem to="/get-started">Get Started</MenuItem>
                  <MenuItem href="/explore/journals">Explore Journals</MenuItem>
                  <MenuItem href="/explore/articles">Explore Articles</MenuItem>
                  <MenuItem href="/explore/rfas">Explore RFAs</MenuItem>
                </ResponsiveHeaderMenu>
              </Header>
            </AppLayoutHeader>

            {/* Only display ToC for documentation pages */}
            {slug &&
              slug !== 'features' &&
              slug !== 'pricing' &&
              slug !== 'quick-start' && (
                <AppLayoutLeft backgroundOnDesktop={false}>
                  <div className="home__toc">
                    <Route exact path="/get-started/:slug">
                      {({ match }) =>
                        match ? <PageToc $content={$content} /> : null
                      }
                    </Route>
                  </div>
                </AppLayoutLeft>
              )}

            <AppLayoutMiddle widthMode="auto" maxContentWidth="980px">
              <div className="home__body">
                <Switch>
                  <Route
                    exact
                    path="/get-started"
                    render={props => (
                      <SplashPage {...props} screenWidth={screenWidth} />
                    )}
                  />
                  <Route
                    exact
                    path="/get-started/features"
                    render={props => <FeaturePage {...props} user={user} />}
                  />
                  <Route
                    exact
                    path="/get-started/pricing"
                    render={props => <PricingPage {...props} user={user} />}
                  />
                  <Route
                    exact
                    path="/get-started/work-with-us"
                    render={props => <HireUsPage {...props} user={user} />}
                  />
                  <Route
                    exact
                    path="/get-started/vision"
                    render={props => <VisionPage {...props} user={user} />}
                  />
                  <Route
                    exact
                    path="/get-started/terms"
                    render={props => (
                      <Fragment>
                        <Helmet>
                          <title>Terms • sci.pe</title>
                        </Helmet>
                        <Legal {...props} text={legal.terms} />
                      </Fragment>
                    )}
                  />
                  <Route
                    exact
                    path="/get-started/privacy"
                    render={props => (
                      <Fragment>
                        <Helmet>
                          <title>Privacy • sci.pe</title>
                        </Helmet>
                        <Legal {...props} text={legal.privacy} />
                      </Fragment>
                    )}
                  />
                  <Route
                    exact
                    path="/get-started/:slug"
                    render={props => (
                      <Page
                        {...props}
                        snippets={snippets}
                        onUpdate={this.handleUpdate}
                        $content={$content}
                      />
                    )}
                  />
                </Switch>
              </div>
            </AppLayoutMiddle>

            {/* We do not show the get started links if user is logged in */}
            {(!isPromoDismissed || !slug) &&
            !!(!slug || slug) /*&& slug !== 'pricing'*/ &&
              screenWidth > CSS_TABLET && (
                <AppLayoutRight backgroundOnDesktop={false}>
                  <div className="home__right">
                    <GetStartedLinks
                      user={user}
                      isDismissible={
                        slug && slug !== 'terms' && slug !== 'privacy'
                      }
                      onDismiss={this.handleDismiss}
                    />
                  </div>
                </AppLayoutRight>
              )}

            <AppLayoutFooter>
              <Footer hideCopyright={true} />
            </AppLayoutFooter>
          </AppLayout>
        </LinkInterceptor>
      </div>
    );
  }
}

export default withScreenDim(Home);
