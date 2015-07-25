'use strict';

var config = require('../config');
var knexfile = require('../../knexfile')[config.env];
var knex = require('knex')(knexfile);
var bookshelf = require('bookshelf')(knex);
var securePassword = require('bookshelf-secure-password');

bookshelf.plugin('registry');
bookshelf.plugin('virtuals');
bookshelf.plugin('visibility');
bookshelf.plugin(securePassword);

module.exports = bookshelf;
