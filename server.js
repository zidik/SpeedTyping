const handleIncomingRequest = require('./server/HandleIncomingWebSockets');

var path = require('path');
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

//Express
var express = require('express');
var app = express();
var server = app.listen(port, () => console.log('Server running on port ' + port));

//Websockets
var WebSocketServer = require('websocket').server
var wsServer = new WebSocketServer({ httpServer : server });
wsServer.on('request', handleIncomingRequest);


if (!isProduction) {
  var bundleSource = require('./server/bundleSource.js');
  bundleSource();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  var httpProxy = require('http-proxy');
  var proxy = httpProxy.createProxyServer();
  // It is important to catch any errors from the proxy or the server will crash. 
  proxy.on('error', () => console.log('Could not connect to proxy, please try again...'));
  app.all(
    '/build/*', 
    (req, res) => proxy.web(req, res, {target: 'http://localhost:8080'})
  );
}

//Serve static files
app.use(express.static(publicPath));
//If no static file found, serve index.html
app.get('/*', function(req, res){
  res.sendFile(publicPath + '/index.html');
});

