'use strict';

var app = require('./app');
var config = require('./config');

app.listen(config.port, function() {
  console.log('koa server (%s) listening on port %s', config.env, config.port);
  console.log('available at %s', config.url);
});
