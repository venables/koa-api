'use strict';

var models = require('../models');

module.exports = function *(next) {
  this.models = models;
  yield next;
};
