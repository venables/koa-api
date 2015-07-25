'use strict';

module.exports = function(Bookshelf) {
  var _ = require('lodash');
  var bcrypt = require('bcryptjs');
  var defaultPasswordField = 'password_digest';
  var proto = Bookshelf.Model.prototype;

  Bookshelf.plugin('virtuals');

  var Model = Bookshelf.Model.extend({
    hasPasswordDigest: false,

    constructor: function() {
      var passwordDigestField = _.isString(this.hasPasswordDigest) ? this.hasPasswordDigest : defaultPasswordField;

      if (this.hasPasswordDigest) {
        this.virtuals = _.extend({}, this.virtuals, {
          password: {
            get: function() {},
            set: function(value) {
              var salt = bcrypt.genSaltSync(10);
              this.set(passwordDigestField, bcrypt.hashSync(value, salt));
            }
          }
        });

        proto.constructor.apply(this, arguments);
      }
    },

    authenticate: function(password) {
      var passwordDigestField = _.isString(this.hasPasswordDigest) ? this.hasPasswordDigest : defaultPasswordField;

      if (this.hasPasswordDigest) {
        return bcrypt.compareSync(password, this.get(passwordDigestField));
      }

      return false;
    }
  });

  Bookshelf.Model = Model;
};
