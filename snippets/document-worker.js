/* eslint-disable import/no-unresolved */

import { DocumentWorker } from '@scipe/workers';
import { defaultConfig } from './config';

const config = Object.assign({}, defaultConfig, {
  log: {
    name: 'document-worker',
    level: 'info'
  }
});

const worker = new DocumentWorker(config);

worker.listen();
