/* eslint-disable import/no-unresolved */

import path from 'path';
import { fork } from 'child_process';
import { Broker } from '@scipe/workers';
import { defaultConfig } from './config';

const config = Object.assign({}, defaultConfig, {
  log: {
    name: 'broker',
    level: 'info'
  }
});

const broker = new Broker(config);

broker.listen(function(err) {
  if (err) {
    throw err;
  }

  ['image-worker.js', 'audio-video-worker.js', 'document-worker.js'].forEach(
    function(modulePath) {
      fork(path.join(__dirname, modulePath));
    }
  );
});
