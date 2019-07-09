/* eslint-disable import/no-unresolved */

import { AudioVideoWorker } from '@scipe/workers';
import { defaultConfig } from './config';

const config = Object.assign({}, defaultConfig, {
  log: {
    name: 'audio-video-worker',
    level: 'info'
  }
});

const worker = new AudioVideoWorker(config);

worker.listen();
