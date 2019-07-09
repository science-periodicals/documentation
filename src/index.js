import path from 'path';
import express from 'express';
import appRoute from './routes/app-route';

// used to prefetch the documentation bundles from `@scienceai/app-suite`
// (<link rel="prefetch" href=... />)
export const bundleManifestPath = path.join(
  path.dirname(__dirname),
  '/public/assets/documentation-bundle-manifest.json'
);

export function assets(config = {}) {
  const app = express();
  app.use(express.static(path.join(path.dirname(__dirname), 'public')));

  return app;
}

export function documentation(config = {}) {
  const app = express();

  app.enable('case sensitive routing');
  app.set('views', path.join(path.dirname(__dirname), 'views'));
  app.set('view engine', 'ejs');

  // we append the config with redis, blobStore and worker so that when we use the changes feed it
  // has access to those without having to recreate them!
  app.locals.config = Object.assign({}, config);

  app.use('/get-started', appRoute);

  return app;
}
