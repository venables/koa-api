'use strict';

var app = require('koa')();
var middleware = require('./middleware');

app.use(middleware.config);

module.exports = app;
