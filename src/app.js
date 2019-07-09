import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import smoothscrollPolyfill from 'smoothscroll-polyfill';

import './app.css';

window.__forceSmoothScrollPolyfill__ = true;
smoothscrollPolyfill.polyfill();

function render(config, initialState) {
  const Router = require('./components/router').default;

  ReactDOM[config.ssr ? 'hydrate' : 'render'](
    <Router
      user={initialState.user}
      legal={initialState.legal}
      snippets={initialState.snippets}
    />,
    document.getElementById('app')
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const initialState = window.__INITIAL_STATE__;
  const config = window.__CONFIG__;

  if (module.hot) {
    // See https://blog.isquaredsoftware.com/2016/11/practical-redux-part-3-project-planning-and-setup/
    module.hot.accept('./components/router', () => {
      setTimeout(() => {
        render(config, initialState);
      }, 0);
    });
  }

  render(config, initialState);
});
