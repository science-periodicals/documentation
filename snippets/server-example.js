import server from './http-server';

const portHttp = 3000;

server.listen(portHttp, function() {
  console.log('HTTP server running on port ' + portHttp);
});
