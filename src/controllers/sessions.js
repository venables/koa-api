'use strict';

var create = function *() {
  var user = yield this.models.User.authenticate(this.request.body.email, this.request.body.password);

  if (user) {
    this.status = 201;
    this.body = {
      user: user
    };
  } else {
    this.status = 400;
    this.body = {
      errors: {
        password: 'invalid'
      }
    };
  }
};

module.exports = {
  create: create
};
