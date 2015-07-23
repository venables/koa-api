'use strict';

var config = require('../config');

module.exports = function *(next) {
  this.config = config;
  yield next;
};
