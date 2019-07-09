import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './home';

export default class Router extends React.Component {
  static propTypes = {
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
    snippets: PropTypes.object
  };

  render() {
    const { user, legal, snippets } = this.props;

    return (
      <HelmetProvider>
        <BrowserRouter>
          <Route
            path="/get-started/:slug?"
            render={props => (
              <Home {...props} user={user} legal={legal} snippets={snippets} />
            )}
          />
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}
