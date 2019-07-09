import assert from 'assert';
import http from 'http';
import express from 'express';
import enableDestroy from 'server-destroy';
import request from 'request';
import createError from '@scipe/create-error';
import {
  createExpressLoggerMiddleware,
  createExpressErrorLoggerMiddleware
} from '@scipe/express-logger';

import { documentation, assets } from '../src';

describe('documentation', function() {
  this.timeout(4000);

  const portHttp = 3085;
  let server;
  before(done => {
    const config = { log: { name: 'test', level: 'fatal' } };

    const app = express();
    app.use(assets(config));
    app.use(createExpressLoggerMiddleware(config));
    app.use(documentation(config));
    app.use(createExpressErrorLoggerMiddleware(config));

    server = http.createServer(app);
    enableDestroy(server);

    server.listen(portHttp, done);
  });

  it('should serve the app', done => {
    request.get(
      {
        url: `http://127.0.0.1:${portHttp}/get-started`,
        headers: {
          Accept: 'text/html'
        }
      },
      (err, resp, body) => {
        if ((err = createError(err, resp, body))) {
          return done(err);
        }
        assert.equal(resp.statusCode, 200);
        assert(/window.__INITIAL_STATE__/.test(body));
        done();
      }
    );
  });

  after(() => {
    server.destroy();
  });
});
