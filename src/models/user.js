'use strict';

var bcrypt = require('bcryptjs');
var bookshelf = require('../db');

var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  visible: ['id', 'email', 'created_at'],

  virtuals: {
    password: {
      get: function() {},
      set: function(value) {
        var salt = bcrypt.genSaltSync(10);
        this.set('password_digest', bcrypt.hashSync(value, salt));
      }
    }
  }
}, {

  authenticate: function *(email, password) {
    var normalizedEmail = email.toLowerCase().trim();
    var user = yield new this({ email: normalizedEmail }).fetch({ require: true });

    yield bcrypt.compare(user.get('password_digest', password));
  }
});

module.exports = bookshelf.model('User', User);
