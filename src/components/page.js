import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Card, ErrorCard, CSS_HEADER_HEIGHT } from '@scipe/ui';
import Loading from './loading';

const Ds3 = React.lazy(() => import(/* webpackChunkName: "Ds3" */ './ds3/ds3'));
const Archive = React.lazy(() =>
  import(/* webpackChunkName: "Archive" */ './archive/archive')
);
const Api = React.lazy(() => import(/* webpackChunkName: "Api" */ './api/api'));
const Workflows = React.lazy(() =>
  import(/* webpackChunkName: "Workflows" */ './workflows/workflows')
);
const AuthorAndReviewerUserGuide = React.lazy(() =>
  import(
    /* webpackChunkName: "AuthorAndReviewerUserGuide" */ './author-and-reviewer-user-guide/author-and-reviewer-user-guide'
  )
);
const EditorUserGuide = React.lazy(() =>
  import(
    /* webpackChunkName: "EditorUserGuide" */ './editor-user-guide/editor-user-guide'
  )
);
const PublicationTypesAndStyleGuides = React.lazy(() =>
  import(
    /* webpackChunkName: "PublicationTypesAndStyleGuides" */ './publication-types-and-style-guides/publication-types-and-style-guides'
  )
);
const Ms3 = React.lazy(() => import(/* webpackChunkName: "Ms3" */ './ms3/ms3'));
const Pdf = React.lazy(() => import(/* webpackChunkName: "Pdf" */ './pdf/pdf'));

const Install = React.lazy(() =>
  import(/* webpackChunkName: "Install" */ './install/install')
);

// We redirect to GH pages for ontology while waiting that those documentation pages are proted to React.
class Ontology extends React.Component {
  componentDidMount() {
    window.location = 'http://ns.sci.pe';
  }

  render() {
    return <Redirect to="/get-started" />;
  }
}

export default class Page extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        slug: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    snippets: PropTypes.object,
    $content: PropTypes.object,
    onUpdate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidMount() {
    document.addEventListener('readystatechange', this.handleReadyStateChange);
    this.hasLoaded = document.readyState === 'complete';
    window.addEventListener('load', this.handleLoad);
    if (location.hash) {
      const id = location.hash.substring(1);
      if (id) {
        this.queueScrollToId(id);
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener(
      'readystatechange',
      this.handleReadyStateChange
    );
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  handleReadyStateChange = e => {
    if (e.target.readyState === 'complete') {
      this.hasLoaded = true;
      if (this.scrollToId) {
        // that will set a timeout if queueScrollToId was already called before
        this.queueScrollToId(this.scrollToId);
      }
    }
  };

  handleClick = e => {
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
    this.scrollToId = null;
    if (
      e.target &&
      e.target.localName === 'a' &&
      e.target.hasAttribute('href')
    ) {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const id = href.substring(1);
        this.queueScrollToId(id);
        const $el = document.getElementById(id);
        if (!$el) {
          this.queueScrollToId(id);
        }
      }
    }
  };

  queueScrollToId(id) {
    this.scrollToId = id;
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
    // we wait untill we have 2 stable measurements in 1 interval before scrolling
    let firstTop = null,
      secondTop = null;
    this.intervalId = setInterval(() => {
      const $el = document.getElementById(id);
      if ($el) {
        const rect = $el.getBoundingClientRect();
        if (firstTop === null) {
          firstTop = rect.top;
        } else if (secondTop === null) {
          secondTop = rect.top;
        }

        if (this.hasLoaded && firstTop === secondTop) {
          window.scroll({
            top: window.pageYOffset + rect.top - CSS_HEADER_HEIGHT,
            behavior: 'smooth'
          });
          clearInterval(this.intervalId);
          clearTimeout(this.timeoutId);
        } else {
          if (secondTop !== null) {
            firstTop = secondTop;
            secondTop = null;
          }
        }
      }
    }, 500);

    if (this.hasLoaded) {
      this.timeoutId = setTimeout(() => {
        clearInterval(this.intervalId);
      }, 20000);
    }
  }

  render() {
    const { onUpdate, $content, snippets } = this.props;
    const { error } = this.state;
    if (error) {
      return <ErrorCard error={error} />;
    }

    return (
      <Card bevel={true}>
        <Suspense fallback={<Loading />}>
          <div onClick={this.handleClick}>
            <Switch>
              <Route
                exact
                path="/get-started/archive"
                render={props => (
                  <Archive onUpdate={onUpdate} $content={$content} />
                )}
              />
              <Route
                exact
                path="/get-started/ds3"
                render={props => (
                  <Ds3 onUpdate={onUpdate} $content={$content} />
                )}
              />
              <Route
                exact
                path="/get-started/ms3"
                render={props => (
                  <Ms3 onUpdate={onUpdate} $content={$content} />
                )}
              />
              <Route
                exact
                path="/get-started/pdf"
                render={props => (
                  <Pdf onUpdate={onUpdate} $content={$content} />
                )}
              />
              <Route
                exact
                path="/get-started/workflows"
                render={props => (
                  <Workflows onUpdate={onUpdate} $content={$content} />
                )}
              />

              <Route
                exact
                path="/get-started/author-and-reviewer-user-guide"
                render={props => (
                  <AuthorAndReviewerUserGuide
                    onUpdate={onUpdate}
                    $content={$content}
                  />
                )}
              />
              <Route
                exact
                path="/get-started/api"
                render={props => (
                  <Api onUpdate={onUpdate} $content={$content} />
                )}
              />

              <Route
                exact
                path="/get-started/install"
                render={props => (
                  <Install
                    onUpdate={onUpdate}
                    $content={$content}
                    snippets={snippets}
                  />
                )}
              />

              <Route
                exact
                path="/get-started/ontology"
                render={props => <Ontology />}
              />

              <Route
                exact
                path="/get-started/editor-user-guide"
                render={props => (
                  <EditorUserGuide onUpdate={onUpdate} $content={$content} />
                )}
              />

              <Route
                exact
                path="/get-started/publication-types-and-style-guides"
                render={props => (
                  <PublicationTypesAndStyleGuides
                    onUpdate={onUpdate}
                    $content={$content}
                  />
                )}
              />
            </Switch>
          </div>
        </Suspense>
      </Card>
    );
  }
}
