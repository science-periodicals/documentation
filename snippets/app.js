/* eslint-disable import/no-unresolved */

import express from 'express';
import createError from '@scipe/create-error';
import {
  createExpressLoggerMiddleware,
  createExpressErrorLoggerMiddleware
} from '@scipe/express-logger';
import resources from '@scipe/resources';
import {
  documentation,
  assets as documentationAssets
} from '@scipe/documentation';
import ontologist from '@scipe/ontologist';
import { api, assets as apiAssets } from '@scipe/api';
import {
  appSuite,
  assets as appSuiteAssets,
  createSessionMiddleware,
  createErrorPageMiddleware
} from '@scipe/app-suite';

import { defaultConfig as config } from './config';

export const app = express();
export const sessionMiddleware = createSessionMiddleware(config);

// static assets
app.use(resources(config));
app.use(appSuiteAssets(config));
app.use(apiAssets(config));
app.use(documentationAssets(config));

// logger (after the assets so we don't log the static asset access)
app.use(createExpressLoggerMiddleware(config));

// the different parts of the app
app.use(api(config)); // API
app.use(ontologist(config)); // ontology service
app.use(documentation(config)); // documentation
app.use(appSuite(config)); // the app-suite per se

// log errors
app.use(createExpressErrorLoggerMiddleware(config));

// handle 404
app.use((req, res, next) => {
  next(createError(404));
});

// Display errors
app.use(createErrorPageMiddleware(config));
