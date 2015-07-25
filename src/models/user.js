'use strict';

var bookshelf = require('../db');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  hasSecurePassword: true,
  visible: ['id', 'email', 'created_at']
}, {

  authenticate: function *(email, password) {
    var normalizedEmail = email.toLowerCase().trim();
    var user = yield new this({ email: normalizedEmail }).fetch({ require: true });
    var authenticated = user.authenticate(password);

    return authenticated && user;
  }
});

module.exports = bookshelf.model('User', User);
