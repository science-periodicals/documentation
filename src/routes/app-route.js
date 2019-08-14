import fs from 'fs';
import path from 'path';
import marked from 'marked';
import { Router } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import getBundlePaths from '../utils/get-bundle-paths';
import Home from '../components/home';

const docRoot = path.join(
  path.dirname(path.dirname(__dirname)),
  'public',
  'legal'
);

const terms = marked(
  fs.readFileSync(path.join(docRoot, 'terms.md'), { encoding: 'utf8' })
);

const privacy = marked(
  fs.readFileSync(path.join(docRoot, 'privacy.md'), { encoding: 'utf8' })
);

function escJSON(obj) {
  const str = JSON.stringify(obj);
  if (str) {
    //- \u2028: line separator
    //- \u2029: paragraph separator
    // those 2 characters are valid JSON _but_ for JavaScript, these two characters are considered to be the same as \n.
    // => it breaks window.__INITIAL_STATE__ = <%- locals.escJSON(locals.initialState) %> as the JS parser will complain...
    // to prevent that we escape them...

    return str
      .replace(/<\/script/gi, '<\\u002fscript')
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');
  }
  return str;
}

const snippets = fs
  .readdirSync(path.resolve(__dirname, '../../snippets'))
  .reduce((map, p) => {
    const text = fs
      .readFileSync(path.resolve(__dirname, '../../snippets', p), {
        encoding: 'utf8'
      })
      .replace('/* eslint-disable import/no-unresolved */', '')
      .trim();
    map[path.basename(p, '.js')] = text;
    return map;
  }, {});

const router = new Router({ caseSensitive: true });

const docSlugs = [
  'archive',
  'api',
  'ds3',
  'ms3',
  'pdf',
  'workflows',
  'ontology',
  'publication-types-and-style-guides',
  'editor-user-guide',
  'author-and-reviewer-user-guide',
  'install',
  'quick-start'
];

router.get(
  `/:slug(${docSlugs.join(
    '|'
  )}|pricing|work-with-us|features|terms|privacy|about|vision)?`,
  (req, res, next) => {
    getBundlePaths('main', (err, bundles) => {
      if (err) return next(err);

      const user =
        req.session && req.session.username
          ? {
              '@id': `user:${req.session.username}`,
              username: req.session.username
            }
          : null;

      const legal = {
        terms: {
          '@type': 'rdf:HTML',
          '@value': terms
        },
        privacy: {
          '@type': 'rdf:HTML',
          '@value': privacy
        }
      };

      const initialState = {
        user,
        snippets,
        legal
      };

      const ssr = !req.app.locals.config.disableSsr;
      const prefetchManifest = req.app.locals.config.prefetchManifest;

      // server side rendering
      // Note no SSR for documentation pages as archive and API we use DOMParser in ComponentWillMount (TODO update) and the other use React.lazy
      if (ssr && !docSlugs.includes(req.params.slug)) {
        const routerContext = {};
        const helmetContext = {};

        const html = ReactDOMServer.renderToString(
          <HelmetProvider context={helmetContext}>
            <StaticRouter location={req.originalUrl} context={routerContext}>
              <Route
                path="/get-started/:slug?"
                render={props => <Home {...props} user={user} legal={legal} />}
              />
            </StaticRouter>
          </HelmetProvider>
        );

        if (routerContext.url) {
          res.writeHead(301, {
            Location: routerContext.url
          });
          res.end();
        } else {
          const { helmet } = helmetContext;

          res.render('index', {
            // ssrOnly: true, // useful to debug
            ssr: true,
            helmet,
            html,
            bundles,
            prefetchManifest,
            escJSON,
            initialState
          });
        }
      } else {
        // rendering for non-ssr
        res.render('index', {
          ssr: false,
          bundles,
          prefetchManifest,
          escJSON,
          initialState
        });
      }
    });
  }
);

export default router;
