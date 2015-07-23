'use strict';

var config = require('../config');
var knexfile = require('./knexfile')[config.env];
var knex = require('knex')(knexfile);
var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');
bookshelf.plugin('visibility');

module.exports = bookshelf;
