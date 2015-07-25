'use strict';

var config = require('../config');
var knexfile = require('../../knexfile')[config.env];
var knex = require('knex')(knexfile);
var bookshelf = require('bookshelf')(knex);
var plugins = require('./plugins');

bookshelf.plugin('registry');
bookshelf.plugin('virtuals');
bookshelf.plugin('visibility');

plugins.hasPasswordDigest(bookshelf);

module.exports = bookshelf;
