/* eslint-disable import/no-unresolved */

import { Broker } from '@scipe/workers';
import { defaultConfig } from './config';

const config = Object.assign({}, defaultConfig, {
  log: {
    name: 'broker',
    level: 'info'
  }
});

const broker = new Broker(config);

broker.listen();
broker.on('change', data => {
  // use `data.nPendingRequests` and `data.nUsableWorkers` to auto scale the
  // workers
});
