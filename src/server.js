import http from 'http';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import resources from '@scipe/resources';
import webpackConfig from '../webpack.config';
import { assets, documentation } from './';

const isProd = process.env.NODE_ENV === 'production';

const host = process.env.HOST || '127.0.0.1';
const port = 3335;

const app = express();

const config = {
  log: {
    name: 'documentation',
    level: 'debug'
  },
  cache: false,
  disableSsr: process.env.NODE_ENV !== 'production'
};

app.use(resources(config));
app.use(assets(config));

if (!isProd) {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.get('/', (req, res, next) => {
  res.redirect('/get-started');
});
app.use(documentation(config));

const server = http.createServer(app);
server.listen(port, () => {
  console.warn('Server running on port ' + port + ' (' + host + ')');
});
