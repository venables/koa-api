'use strict';

var app = require('koa')();
var config = require('./config');
var helmet = require('koa-helmet');
var logger = require('koa-morgan').middleware;
var middleware = require('./middleware');

app.use(logger(config.logging.format));
app.use(helmet());
app.use(middleware.config);

module.exports = app;
