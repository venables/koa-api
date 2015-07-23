'use strict';

var bookshelf = require('../db');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  visible: ['id', 'email', 'created_at'],
});

module.exports = bookshelf.model('User', User);
