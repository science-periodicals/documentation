/* eslint-disable import/no-unresolved */

import { ImageWorker } from '@scipe/workers';
import { defaultConfig } from './config';

const config = Object.assign({}, defaultConfig, {
  log: {
    name: 'image-worker',
    level: 'info'
  }
});

const worker = new ImageWorker(config);

worker.listen();
