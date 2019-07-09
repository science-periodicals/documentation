/* eslint-disable import/no-unresolved */

import http from 'http';
import socketIo from 'socket.io';
import { setUpSocketIoServer } from '@scipe/app-suite';
import { defaultConfig as config } from './config';
import { app, sessionMiddleware } from './app';

const server = http.createServer(app);
// Add WebSockets support
setUpSocketIoServer(app, socketIo(server), sessionMiddleware, config);

export default server;
